import React from 'react';
import MenuLeft from '../components/MenuLeft';
import Articles from '../components/Articles';
import HomeLayout from '../components/HomeLayout';
import ViewArticle from '../components/ViewArticle';
import ModalContainer from '../components/ModalContainer';
import Modal from '../components/Modal';
import data from './../api.json';

class Home extends React.Component {
    state = {
        modalVisible: false,
        cartItems: new Array(),
        quantitySelected: 0,
        maxId: 0,
        total: 0
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
                if (item.idProduct == id) {
                    if (item.quantity > 1) {
                        item.quantity = item.quantity - 1;
                        this.setState({
                            total: (this.state.total - item.price),
                            quantitySelected: item.quantity
                        })
                        return item;
                    } else {
                        this.setState({
                            total: (this.state.total - item.price),
                            quantitySelected: 0
                        })
                    }
                } else
                    return item;
            })
        });
    }
    getNextId = () => {
        this.setState({ maxId: this.state.maxId + 1 });
        return this.state.maxId;
    }
    handleAddItem = (element) => {
        var updated = false;
        var itemsUpdated = this.state.cartItems.filter((item) => {
            if (item.idProduct == this.state.article.id) {
                updated = true;
                item.quantity = item.quantity + 1;
                this.setState({
                    total: (this.state.total + item.price),
                    quantitySelected: item.quantity
                })
            }
            return item;
        });

        if (updated === false) {
            var article = {
                id: this.getNextId(),
                title: this.state.article.title,
                price: this.state.article.price,
                idProduct: this.state.article.id,
                quantity: 1
            }

            this.setState({
                total: (this.state.total + article.price),
                quantitySelected: 1
            })

            var itemsUpdated = [...this.state.cartItems];
            itemsUpdated.push(article);
        }

        this.setState({
            cartItems: itemsUpdated
        });
    }
    render() {
        return (
            < React.Fragment >
                <HomeLayout
                    menuLeft={<MenuLeft total={this.state.total} handleRemoveItemById={this.handleRemoveItemById} cartItems={this.state.cartItems} categories={data.categories} />}
                    main={<Articles
                        articles={data.articles}
                        openModal={this.openModal} />} />
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