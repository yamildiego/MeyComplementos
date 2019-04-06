import React from 'react';
import MenuLeft from './MenuLeft';
import Articles from './Articles';
import data from './../../../src/api.json';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import ModalContainer from './ModalContainer';
import Modal from '../components/Modal/Modal';
import VideoPlayer from './VideoPlayer/VideoPlayer';

class Home extends React.Component {
    state = {
        modalVisible: false,
        cartItems: new Array(),
        total: 0
    }
    openModal = (article) => {
        this.setState({
            modalVisible: true,
            article
        })
    }
    closeModal = () => {
        this.setState({
            modalVisible: false,
        })
    }
    handleRemoveItem = (element) => {
        this.setState({
            cartItems: this.state.cartItems.filter((item) => item.id !== element.id)
        });
    }
    handleAddItem = (element) => {
        console.log(this.state.article);
        console.log(this.state.cartItems);
        var items = [...this.state.cartItems];
        items.push(this.state.article);
        // console.warn(items);
        // console.warn(items.push(this.state.article));
        // var text = items.push(this.state.article);
        // console.error(text);
        this.setState({
            cartItems: items
        });
    }
    render() {
        return (
            < React.Fragment >
                <HomeLayout
                    menuLeft={<MenuLeft total={this.state.total} handleRemoveItem={this.handleRemoveItem} cartItems={this.state.cartItems} categories={data.categories} />}
                    main={<Articles
                        articles={data.articles}
                        openModal={this.openModal} />} />
                {
                    this.state.modalVisible &&
                    <ModalContainer>
                        <Modal closeModal={this.closeModal}>
                            <div onClick={this.handleAddItem} >Boton</div>
                            {/* <VideoPlayer autoplay title={this.state.article.title}></VideoPlayer> */}
                        </Modal>
                    </ModalContainer>
                }
            </React.Fragment >
        )
    }
}

export default Home;