import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuLeft from '../components/MenuLeft';
import Articles from '../components/Articles';
import ViewArticle from '../components/ViewArticle';
import ModalContainer from '../components/ModalContainer';
import Modal from '../components/Modal';
import CheckOut from '../components/CheckOut.js';
import localforage from 'localforage';
import data from './../api.json';
import './../components/styles/Home.css';

class Home extends React.Component {
    state = {
        filter: { category: 0, text: '' },
        articles: [],
        modalVisible: false,
        showCart: false,
        dataCart: {
            cartItems: new Array(),
            totalItems: 0,
            total: 0,
            maxId: 0,
        }
    }
    componentDidMount = () => {
        this.setState({ articles: data.articles });
        var _this = this;

        // localforage.setItem('dataCart', this.state.dataCart, function (err, value) { });

        localforage.getItem('dataCart', function (err, value) {
            if (typeof value === "object" && value !== null) _this.setState({ dataCart: value });
        });
    }
    // componentWillMount = () => {
    //     fetch('http://localhost/unallamanew/Server/ParticipantController/getParticipants')
    //         .then(response => response.json())
    //         .then(response => {
    //             console.error(response);
    //         });
    // }
    openModal = article => {
        var itemFlag = undefined;
        this.state.dataCart.cartItems.filter(item => {
            if (item.idProduct == article.id) {
                itemFlag = item;
            }
        })
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
        this.setState({ dataCart });
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
    setFilterBySearch = text => {
        if (text == '')
            this.setFilterByCategory(this.state.filter.category);
        else
            this.setState({
                filter: { ...this.state.filter, text: text },
                articles: data.articles.filter(item => {
                    if (this.state.filter.category != 0) {
                        if (item.category == this.state.filter.category && item.title.toUpperCase().search(text.toUpperCase()) != -1)
                            return item;
                    } else {
                        if (item.title.toUpperCase().search(text.toUpperCase()) != -1)
                            return item;
                    }
                })
            })
    }
    setFilterByCategory = (categoryId) => {
        var itemsFiltered = data.articles;

        if (categoryId != 0)
            itemsFiltered = data.articles.filter(item => {
                if (item.category == categoryId)
                    return item;
            });

        this.setState({
            filter: { category: categoryId, text: '' },
            articles: itemsFiltered
        })
    }
    toggleViewCart = e => {
        this.setState({
            modalVisible: false,
            showCart: !this.state.showCart
        })
    }
    handleUpdateQuantity = (itemUpdated, item) => {
        var cartItemsNew = [];
        this.state.dataCart.cartItems.filter((item) => {
            if (item.idArticle == itemUpdated.idArticle && item.size == itemUpdated.size && item.color == itemUpdated.color)
                cartItemsNew.push(itemUpdated);
            else
                cartItemsNew.push(item);
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
    render() {
        return (
            <React.Fragment>
                {!this.state.showCart ?
                    <Container fluid={true} className="Home">
                        <Row>
                            <Col md={4}>
                                <MenuLeft
                                    handleRemoveItem={this.handleRemoveItem}
                                    toggleViewCart={this.toggleViewCart}
                                    setFilterByCategory={this.setFilterByCategory}
                                    dataCart={this.state.dataCart}
                                    categories={data.categories}
                                />
                            </Col>
                            <Col md={8}>
                                <Articles
                                    valueSearch={this.state.filter.text}
                                    setFilterBySearch={this.setFilterBySearch}
                                    articles={this.state.articles}
                                    openModal={this.openModal}
                                />
                            </Col>
                        </Row>
                    </Container>
                    :
                    <CheckOut
                        handleUpdateQuantity={this.handleUpdateQuantity}
                        dataCart={this.state.dataCart}
                        toggleViewCart={this.toggleViewCart}
                    />
                }
                {
                    this.state.modalVisible &&
                    <ModalContainer>
                        <Modal closeModal={this.closeModal}>
                            <ViewArticle
                                item={this.state.article}
                                quantity={this.state.quantitySelected}
                                closeModal={this.closeModal}
                                handleAddItem={this.handleAddItem}
                            />
                        </Modal>
                    </ModalContainer>
                }
            </React.Fragment >
        )
    }
}

export default Home;