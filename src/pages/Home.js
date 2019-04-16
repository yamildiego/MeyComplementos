import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuLeft from '../components/MenuLeft';
import Articles from '../components/Articles';
import ViewArticle from '../components/ViewArticle';
import ModalContainer from '../components/ModalContainer';
import Modal from '../components/Modal';
import data from './../api.json';
import './../components/styles/Home.css'
class Home extends React.Component {
    state = {
        filter: { category: 0, text: '' },
        articles: [],
        modalVisible: false,
        cartItems: new Array(),
        totalItems: 0,
        total: 0,
        maxId: 0,
    }
    componentDidMount = () => {
        this.setState({ articles: data.articles });
    }
    openModal = article => {
        var itemFlag = undefined;
        this.state.cartItems.filter(item => {
            if (item.idProduct == article.id) {
                itemFlag = item;
            }
        })

        this.setState({
            modalVisible: true,
            article,
            quantitySelected: (itemFlag == undefined ? 0 : itemFlag.quantity)
        })
    }
    closeModal = () => {
        this.setState({
            modalVisible: false
        })
    }
    handleRemoveItemById = (id) => {
        this.setState({
            cartItems: this.state.cartItems.filter((item) => {
                if (item.idProduct != id)
                    return item;
            })
        })
    }
    getNextId = () => {
        this.setState({ maxId: this.state.maxId + 1 });
        return this.state.maxId;
    }
    handleAddItem = (element) => {
        var newCartItems = [];

        var ArrayWithiItem = this.state.cartItems.filter((item) => {
            if (item.idArticle == element.idArticle)
                return item;
            else
                newCartItems.push(item);
        });

        if (ArrayWithiItem.length == 0) {
            var newItem = {
                idArticle: element.idArticle,
                title: element.title,
                price: element.price,
                quantity: 1,
                details: [{ size: element.size, color: element.color, quantity: 1 }]
            }
            newCartItems.push(newItem);
        } else {
            var newDatails = [];
            var added = false;
            ArrayWithiItem[0].details.filter((item) => {
                if (item.size == element.size && item.color == element.color) {
                    item.quantity++;
                    newDatails.push(item);
                    var added = true;
                } else {
                    newDatails.push(item);
                }
            });

            if (!added) {
                newDatails.push({ size: element.size, color: element.color, quantity: 1 });
            }

            var itemUpdated = ArrayWithiItem[0];
            itemUpdated.quantity++;
            itemUpdated.details = newDatails;
            newCartItems.push(itemUpdated);
        }

        this.setState({ cartItems: newCartItems, totalItems: this.state.totalItems + 1, total: this.state.total + element.price });
    }
    setFilterBySearch = text => {
        if (text == '') {
            this.setFilterByCategory(this.state.filter.category);
        } else
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
    render() {
        return (
            <React.Fragment>
                <Container fluid={true} className="Home">
                    <Row>
                        <Col md={4}>
                            <MenuLeft setFilterByCategory={this.setFilterByCategory} totalItems={this.state.totalItems} total={this.state.total} cartItems={this.state.cartItems} categories={data.categories} />
                        </Col>
                        <Col md={8}>
                            <Articles
                                valueSearch={this.state.filter.text}
                                setFilterBySearch={this.setFilterBySearch}
                                articles={this.state.articles}
                                openModal={this.openModal} />
                        </Col>
                    </Row>
                </Container>
                {
                    this.state.modalVisible &&
                    <ModalContainer>
                        <Modal closeModal={this.closeModal}>
                            <ViewArticle
                                item={this.state.article}
                                quantity={this.state.quantitySelected}
                                closeModal={this.closeModal}
                                handleRemoveItemById={this.handleRemoveItemById}
                                handleAddItem={this.handleAddItem} />
                            {/* <VideoPlayer autoplay title={this.state.article.title}></VideoPlayer> */}
                        </Modal>
                    </ModalContainer>
                }
            </React.Fragment >
        )
    }
}

export default Home;