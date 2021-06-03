import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import Slider from "react-slick";
import formatNumber from './../utilities/formatNumber';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import MultiToggle from 'react-multi-toggle';
import ImagesNotFound from './../images/images-not-found.jpg';
import './styles/ViewArticle.css';
import * as actions from './actions/article';
const images = require.context('./../images/articles', true);

class ViewArticle extends React.Component {

    state = {
        size: ((this.props.itemData && this.props.itemData.size !== undefined) ? this.props.itemData.size : 0),
        color: ((this.props.itemData && this.props.itemData.color !== undefined) ? this.props.itemData.color : 0),
        qty: ((this.props.itemData && this.props.itemData.qty !== undefined) ? this.props.itemData.qty : 0)
    }

    handleClickAdd = () => {
        let newItem = {
            id: this.props.item.id,
            size: this.state.size,
            color: this.state.color,
            price: this.props.item.price,
            qty: 1
        }

        this.setState({ ...this.state, qty: (this.state.qty + 1) })

        this.props.dispatch(actions.articleActionAdd(newItem));
    }

    handleClickUpdateItem = () => {
        let oldItem = {
            id: this.props.item.id,
            size: this.props.itemData.size,
            color: this.props.itemData.color,
            price: this.props.item.price,
            qty: this.props.itemData.qty
        }

        let newItem = {
            id: this.props.item.id,
            size: this.state.size,
            color: this.state.color,
            price: this.props.item.price,
            qty: this.props.itemData.qty
        }

        this.props.dispatch(actions.articleActionUpdate(oldItem, newItem));
        this.props.closeModal();
    }

    onGroupSizeSelect = value => this.setState({ ...this.state, size: value });

    onGroupColorSelect = value => this.setState({ ...this.state, color: value });

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        let loadImage = imageName => (images(`./${imageName}`).default);

        return (

            <div className="ViewArticle">
                <Card>
                    <Card.Header>
                        <h2 className="ViewArticleTitle">
                            {this.props.item.title}
                        </h2>
                        {this.state.qty > 0 &&
                            <span className="ViewArticleText">
                                <FormattedMessage locale={this.props.lang} id="view_article.added" />! <span className="ViewArticleQTY">QTY:{this.state.qty}</span>
                            </span>
                        }
                        {/* {(this.props.quantity() > 0 && this.props.modalType === 'NEW') && */}
                        {/* {this.props.itemData.qty &&
                            <span className="ViewArticleText">
                                <FormattedMessage locale={this.props.lang} id="view_article.added" /> QTY:{this.props.itemData.qty}
                            </span>
                        } */}
                        {/* } */}
                        {/* {this.props.modalType === 'EDIT' &&
                            <span className="ViewArticleText">
                                {
                                    this.props.itemData.qty === 1
                                        ? <FormattedMessage locale={this.props.lang} id="view_article.has_one" />
                                        : (intl.formatMessage({ id: "view_article.has_two_part_one" }) + this.props.itemData.qty + intl.formatMessage({ id: "view_article.has_two_part_two" }))

                                }
                            </span>
                        } */}
                        <span className="ViewArticlePrice">{formatNumber(this.props.item.price)}</span>
                    </Card.Header>
                    <Card.Body>
                        <div className="row">
                            <div className="col-md-6">
                                {
                                    this.props.item.images.length > 0 &&
                                    <Slider {...settings} className="ViewArticleSlider">
                                        {
                                            this.props.item.images.map((element) => {
                                                return <div key={element.id} className="text-center">
                                                    {
                                                        element.type === "image" ?
                                                            <Image src={loadImage(element.path)} className="mx-auto" /> :
                                                            <video controls autoPlay loop>
                                                                <source src={loadImage(element.path)} type="video/mp4" />
                                                            </video>
                                                    }
                                                </div>
                                            })
                                        }
                                    </Slider>
                                }
                                {
                                    this.props.item.images.length === 0 &&
                                    <Image src={ImagesNotFound} className="mx-auto" />
                                }
                            </div>
                            <div className="col-md-6">
                                <form>
                                    <div className="form-group">
                                        {(this.props.item.colors && this.props.item.colors.length > 0) &&
                                            <React.Fragment>
                                                <div className="ViewArticleInfo"><span><FormattedMessage locale={this.props.lang} id="view_cart_line.color" /></span></div>
                                                <span>
                                                    <MultiToggle
                                                        options={this.props.item.colors}
                                                        selectedOption={this.state.color}
                                                        onSelectOption={this.onGroupColorSelect}
                                                        className="ViewArticleToggleColors"
                                                    />
                                                </span>
                                            </React.Fragment>
                                        }

                                        {(this.props.item.sizes && this.props.item.sizes.length > 0) &&
                                            <React.Fragment>
                                                <div className="ViewArticleInfo"><span><FormattedMessage locale={this.props.lang} id="view_cart_line.size" /></span></div>
                                                <span>
                                                    <MultiToggle
                                                        options={this.props.item.sizes}
                                                        selectedOption={this.state.size}
                                                        onSelectOption={this.onGroupSizeSelect}
                                                        className="ViewArticleToggleSizes"
                                                    />
                                                </span>
                                            </React.Fragment>
                                        }

                                        {this.props.item.brand &&
                                            <React.Fragment>
                                                <div className="ViewArticleInfo"><span><FormattedMessage locale={this.props.lang} id="view_article.brand" /></span></div>
                                                <span>
                                                    {this.props.item.brand.displayName}
                                                </span>
                                            </React.Fragment>
                                        }
                                    </div>
                                    {
                                        this.props.item.description &&
                                        <div className="ViewArticleInfo">
                                            <span>
                                                <FormattedMessage locale={this.props.lang} id="view_article.description" />
                                            </span>
                                            <div>
                                                {this.props.item.description}
                                            </div>
                                        </div>
                                    }
                                </form>
                                <br />
                                {
                                    this.props.modalType === 'NEW' &&
                                    <Button className="BtnAddArticle" onClick={this.handleClickAdd} block={true} variant="outline-success"><FormattedMessage locale={this.props.lang} id="view_article.add" /> </Button>
                                }
                                {
                                    this.props.modalType === 'EDIT' &&
                                    <Button
                                        className="BtnAddArticle"
                                        onClick={this.handleClickUpdateItem}
                                        block={true}
                                        variant="outline-success">
                                        <FormattedMessage locale={this.props.lang} id="view_cart_line.edit" />
                                    </Button>
                                }
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>


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

export default connect(mapStateToProps)(ViewArticle);