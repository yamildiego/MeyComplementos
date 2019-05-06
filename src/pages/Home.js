import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuLeft from '../components/MenuLeft';
import Articles from '../components/Articles';
import ViewArticle from '../components/ViewArticle';
import ModalContainer from '../components/ModalContainer';
import LogoPresentation from './../components/LogoPresentation';
import Modal from '../components/Modal';
import CheckOut from '../components/CheckOut.js';
import CartDirectAccess from '../components/CartDirectAccess.js';
import localforage from 'localforage';
import Constants from './../config';
import data from './../api.json';
import './../components/styles/Home.css';

class Home extends React.Component {
    state = {
        loading: true,
        currentCount: 0,
        filter: { category: 0, text: '' },
        articles: new Array(),
        articlesFiltered: new Array(),
        modalVisible: false,
        modalType: 'NEW',
        showCart: false,
        categories: new Array(),
        dataCart: {
            cartItems: new Array(),
            totalItems: 0,
            total: 0,
            maxId: 0,
        }
    }
    componentWillUnmount() {
        clearInterval(this.countdown);
    }
    timer = () => {
        if (!this.state.loading)
            clearInterval(this.countdown);
        else
            this.setState({ currentCount: (this.state.currentCount + 5) });
    }
    componentDidMount = () => {
        this.countdown = setInterval(this.timer, 100);
        // fetch(Constants.urlServer + '/getCategories')
        //     .then(response => response.json()).then(response => {
        //         this.setState({ categories: response });
        //     });
        // fetch(Constants.urlServer + '/getArticles')
        //     .then(response => response.json())
        //     .then(response => {
        //         this.setState({ articles: response, articlesFiltered: response, loading: false });
        //     });
        this.setState({ categories: data.categories, articles: data.articles, articlesFiltered: data.articles, loading: false });
        var _this = this;
        localforage.getItem('dataCart', function (err, value) {
            if (typeof value === "object" && value !== null) _this.setState({ dataCart: value });
        });
    }
    openModal = article => {
        this.setState({
            modalVisible: true,
            article
        })
    }
    closeModal = () => this.setState({ modalVisible: false })
    getNextId = () => {
        this.setState({ dataCart: { ...this.state.dataCart, maxId: this.state.dataCart.maxId + 1 } });
        return this.state.dataCart.maxId;
    }
    handleAddItem = (element) => {
        var newCartItems = [];

        var ArrayWithiItem = this.state.dataCart.cartItems.filter((item) => {
            if (item.idArticle == element.idArticle && item.size == element.size && item.color == element.color)
                return item;
            else
                newCartItems.push(item);
        });

        if (ArrayWithiItem.length == 0)
            newCartItems.push({ ...element, quantity: 1 });
        else {
            var itemUpdated = ArrayWithiItem[0];
            itemUpdated.quantity++;
            newCartItems.push(itemUpdated);
        }

        var dataCart = {
            ...this.state.dataCart,
            cartItems: newCartItems,
            totalItems: this.state.dataCart.totalItems + 1,
            total: this.state.dataCart.total + element.price
        }

        localforage.setItem('dataCart', dataCart);
        this.setState({ dataCart, modalType: 'NEW' });
    }
    handleRemoveItem = item => {
        var newCartItems = this.state.dataCart.cartItems.filter(i => {
            if (i.idArticle == item.idArticle && i.size == item.size && i.color == item.color) {
                if (i.quantity > 1) {
                    i.quantity = i.quantity - 1;
                    return i;
                }
            } else {
                return i;
            }
        })

        var dataCart = {
            ...this.state.dataCart,
            cartItems: newCartItems,
            totalItems: this.state.dataCart.totalItems - 1,
            total: this.state.dataCart.total - item.price
        }

        localforage.setItem('dataCart', dataCart);
        this.setState({ dataCart });
    }
    cleanCart = () => {
        var dataCart = {
            cartItems: new Array(),
            totalItems: 0,
            total: 0,
            maxId: 0,
        }
        localforage.setItem('dataCart', dataCart);
        this.setState({ dataCart });
    }
    setFilterBySearch = text => {
        if (text == '')
            this.setFilterByCategory(this.state.filter.category);
        else {
            this.setState({
                filter: { ...this.state.filter, text: text },
                articlesFiltered: this.setFilterByCategory(this.state.filter.category).filter(item => {
                    if (item.title.toUpperCase().search(text.toUpperCase()) != -1)
                        return item;
                })
            })
        }
    }
    setFilterByCategory = (categoryId) => {
        var itemsFiltered = this.state.articles;

        if (categoryId != 0) {

            var category = undefined;
            this.state.categories.map(categoryItem => {
                if (categoryItem.id == categoryId) category = categoryItem;
            })

            if (category != undefined) {
                let ids = [];
                ids.push(categoryId);
                if (category.subcategories && category.subcategories.length > 0)
                    category.subcategories.map(i => { ids.push(i.id); })

                itemsFiltered = this.state.articles.filter(item => {
                    if (ids.includes(item.category)) return item;
                });
            } else {
                itemsFiltered = this.state.articles.filter(item => {
                    if (item.category == categoryId) return item;
                });
            }
        }

        this.setState({
            filter: { category: categoryId, text: '' },
            articlesFiltered: itemsFiltered
        })
        return itemsFiltered;
    }
    toggleViewCart = e => {
        this.setState({
            modalType: 'NEW',
            modalVisible: false,
            showCart: !this.state.showCart
        })
    }
    handleUpdateItem = (modified, itemUpdated, item, itemOld) => {
        if (modified) {
            var newCartItems = [];
            var cartItemsById = [];

            this.state.dataCart.cartItems.filter((element) => {
                if (element.idArticle == itemOld.idArticle)
                    if (itemOld.size == element.size && itemOld.color == element.color) { } else {
                        cartItemsById.push(element);
                    }
                else
                    newCartItems.push(element);
            });

            let isModified = false;

            cartItemsById.map((element) => {
                if (element.size == itemUpdated.size && element.color == itemUpdated.color) {
                    isModified = true;
                    element.quantity = element.quantity + itemOld.quantity;
                    newCartItems.push(element);
                } else
                    newCartItems.push(element);
            })

            if (!isModified) {
                itemOld.size = itemUpdated.size;
                itemOld.color = itemUpdated.color;
                newCartItems.push(itemOld);
            }

            var dataCart = {
                ...this.state.dataCart,
                cartItems: newCartItems
            }

            localforage.setItem('dataCart', dataCart);
            this.setState({ dataCart, modalVisible: false });
        } else
            this.setState({ modalVisible: false });
    }
    openModalUpdate = (item) => {
        this.state.articles.map(e => {
            if (e.id == item.idArticle) {
                this.setState({
                    article: e,
                    modalVisible: true,
                    modalType: 'EDIT',
                    articleOptionsChosen: item
                });
            }
        })
    }
    handleUpdateQuantity = (itemUpdated, item) => {
        var cartItemsNew = [];
        this.state.dataCart.cartItems.filter((i) => {
            if (i.idArticle == itemUpdated.idArticle) {
                if (i.size == itemUpdated.size && i.color == itemUpdated.color) {
                    if (itemUpdated.quantity > 0)
                        cartItemsNew.push(itemUpdated);
                } else
                    cartItemsNew.push(i);
            } else
                cartItemsNew.push(i);
        });

        var dataCart = {
            ...this.state.dataCart,
            cartItems: cartItemsNew,
            total: this.state.dataCart.total - (item.quantity * item.price) + (itemUpdated.quantity * itemUpdated.price),
            totalItems: this.state.dataCart.totalItems - item.quantity + itemUpdated.quantity
        }

        localforage.setItem('dataCart', dataCart);
        this.setState({ dataCart });
    }
    getQuantityById = id => {
        let quantity = 0;
        this.state.dataCart.cartItems.filter(i => {
            if (i.idArticle == id)
                quantity = quantity + i.quantity;
        })

        return quantity;
    }
    render() {
        return (
            <React.Fragment >
                {
                    this.state.loading
                        ? <LogoPresentation progress={this.state.currentCount} />
                        : <React.Fragment>
                            <CartDirectAccess
                                totalItems={this.state.dataCart.totalItems}
                                toggleViewCart={this.toggleViewCart}
                                showCart={this.state.showCart}
                            />
                            {!this.state.showCart ?
                                <Container fluid={true} className="Home">
                                    <Row>
                                        <Col md={4}>
                                            <MenuLeft
                                                category={this.state.filter.category}
                                                handleRemoveItem={this.handleRemoveItem}
                                                toggleViewCart={this.toggleViewCart}
                                                setFilterByCategory={this.setFilterByCategory}
                                                dataCart={this.state.dataCart}
                                                categories={this.state.categories}
                                            />
                                        </Col>
                                        <Col md={8}>
                                            <Articles
                                                setFilterByCategory={this.setFilterByCategory}
                                                categories={this.state.categories}
                                                category={this.state.filter.category}
                                                valueSearch={this.state.filter.text}
                                                setFilterBySearch={this.setFilterBySearch}
                                                articles={this.state.articlesFiltered}
                                                openModal={this.openModal}
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                                :
                                <CheckOut
                                    cleanCart={this.cleanCart}
                                    handleUpdateQuantity={this.handleUpdateQuantity}
                                    openModalUpdate={this.openModalUpdate}
                                    dataCart={this.state.dataCart}
                                    toggleViewCart={this.toggleViewCart}
                                />
                            }
                            {
                                this.state.modalVisible &&
                                <ModalContainer>
                                    <Modal closeModal={this.closeModal}>
                                        <ViewArticle
                                            modalType={this.state.modalType}
                                            articleOptionsChosen={this.state.articleOptionsChosen}
                                            modalType={this.state.modalType}
                                            item={this.state.article}
                                            quantity={() => this.getQuantityById(this.state.article.id)}
                                            closeModal={this.closeModal}
                                            handleAddItem={this.handleAddItem}
                                            handleUpdateItem={this.handleUpdateItem}
                                        />
                                    </Modal>
                                </ModalContainer>
                            }
                        </React.Fragment >
                }
            </React.Fragment >
        )
    }
}

export default Home;