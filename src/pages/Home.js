import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import MenuLeft from '../components/MenuLeft';
import Articles from '../components/Articles';
import ViewArticle from '../components/ViewArticle';
import ModalContainer from '../components/ModalContainer';
import LogoPresentation from './../components/LogoPresentation';
import Modal from '../components/Modal';
import CheckOut from '../components/CheckOut.js';
import CartDirectAccess from '../components/CartDirectAccess.js';
// import localforage from 'localforage';
import data from './../api.json';
import './../components/styles/Home.css';
import queryString from 'querystring';
import OrderCompleted from '../components/OrderCompleted';

class Home extends React.Component {
    state = {
        collectionId: null,
        loading: true,
        currentCount: 0,
        filter: { category: 0, text: '' },
        articles: [],
        articlesFiltered: [],
        modalVisible: false,
        modalType: 'NEW',
        showCart: false,
        categories: []
    }

    componentWillUnmount = () => clearInterval(this.timeout);

    timer = () => {
        if (this.state.currentCount < 100) {
            setTimeout(
                () => {
                    this.setState({ currentCount: (this.state.currentCount + 5) })
                    this.timer()
                }
                ,
                100
            );
        } else {
            clearInterval(this.timeout);
        }
    }

    componentDidMount = () => {
        let params = queryString.parse(this.props.location.search.substring(1, this.props.location.search.length - 1))
        this.setState({ collectionId: (params.collection_id === undefined) ? null : params.collection_id, collectionStatus: params.collection_status });

        // this.countdown = setInterval(this.timer, 100);
        this.timeout = this.timer;
        this.timeout();


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

        // var _this = this;
        // localforage.getItem('dataCart', function (err, value) {
        //     if (typeof value === "object" && value !== null) _this.setState({ dataCart: value });
        // });
    }

    openModal = article => {
        this.setState({
            modalVisible: true,
            article
        })
    }

    openModalUpdate = (item, itemData) => {
        this.setState({
            article: item,
            modalVisible: true,
            modalType: 'EDIT',
            itemData: itemData
        });
    }

    closeModal = () => this.setState({ modalVisible: false })

    // cleanCart = () => {
    //     var dataCart = {
    //         cartItems: [],
    //         totalItems: 0,
    //         total: 0,
    //         maxId: 0,
    //     }
    //     localforage.setItem('dataCart', dataCart);
    //     this.setState({ dataCart });
    // }

    setFilterBySearch = text => {
        if (text === '')
            this.setFilterByCategory(this.state.filter.category);
        else {
            this.setState({
                filter: { ...this.state.filter, text: text },
                articlesFiltered: this.setFilterByCategory(this.state.filter.category).filter(item => {
                    if (item.title.toUpperCase().search(text.toUpperCase()) !== -1)
                        return item;
                    else
                        return false;
                })
            })
        }
    }

    setFilterByCategory = (categoryId) => {
        var itemsFiltered = this.state.articles;

        if (categoryId !== 0) {

            var category = undefined;
            this.state.categories.map(categoryItem => {
                if (categoryItem.id === categoryId)
                    category = categoryItem;
                return false;
            })

            if (category !== undefined) {
                let ids = [];
                ids.push(categoryId);
                if (category.subcategories && category.subcategories.length > 0)
                    category.subcategories.map(i => ids.push(i.id));

                itemsFiltered = this.state.articles.filter(item => {
                    if (ids.includes(item.category)) return item;
                    return false;
                });
            } else {
                itemsFiltered = this.state.articles.filter(item => {
                    if (item.category === categoryId) return item;
                    return false;
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

    render() {
        return (
            <React.Fragment>
                <React.Fragment >
                    {
                        this.state.collectionId !== null &&
                        <OrderCompleted
                            cleanCart={this.cleanCart}
                            collectionId={this.state.collectionId}
                            collectionStatus={this.state.collectionStatus}
                        />
                    }
                </React.Fragment>
                <React.Fragment>
                    {
                        this.state.collectionId === null &&
                        <React.Fragment >
                            {
                                this.state.currentCount < 100
                                    ? <LogoPresentation progress={this.state.currentCount} />
                                    : <React.Fragment>
                                        <CartDirectAccess
                                            toggleViewCart={this.toggleViewCart}
                                            showCart={this.state.showCart}
                                        />
                                        {!this.state.showCart ?
                                            <Container fluid={true} className="Home">
                                                <Row>
                                                    <Col md={4}>
                                                        <MenuLeft
                                                            category={this.state.filter.category}
                                                            toggleViewCart={this.toggleViewCart}
                                                            setFilterByCategory={this.setFilterByCategory}
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
                                                openModalUpdate={this.openModalUpdate}
                                                toggleViewCart={this.toggleViewCart}
                                            />
                                        }
                                        {
                                            this.state.modalVisible &&
                                            <ModalContainer>
                                                <Modal closeModal={this.closeModal}>
                                                    <ViewArticle
                                                        modalType={this.state.modalType}
                                                        itemData={this.state.itemData}
                                                        item={this.state.article}
                                                        closeModal={this.closeModal}
                                                    />
                                                </Modal>
                                            </ModalContainer>
                                        }
                                    </React.Fragment >
                            }
                        </React.Fragment >
                    }
                </React.Fragment>
            </React.Fragment >
        )
    }
}

function mapStateToProps(state, props) {
    let lang = (state.locale.lang === undefined || state.locale.lang === "") ? "en" : state.locale.lang;
    return {
        lang,
        props
    }
}

export default connect(mapStateToProps)(Home);