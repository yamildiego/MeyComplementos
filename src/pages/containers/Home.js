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
        modalVisible: false
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
    render() {
        return (
            <React.Fragment>
                <HomeLayout
                    menuLeft={<MenuLeft categories={data.categories} />}
                    main={<Articles
                        articles={data.articles}
                        openModal={this.openModal} />} />
                {
                    this.state.modalVisible &&
                    <ModalContainer>
                        <Modal closeModal={this.closeModal}>
                            <VideoPlayer autoplay title={this.state.article.title}></VideoPlayer>
                        </Modal>
                    </ModalContainer>
                }
            </React.Fragment>
        )
    }
}

export default Home;