import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import Slider from "react-slick";
import formatNumber from './../utilities/formatNumber';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import MultiToggle from 'react-multi-toggle';
import ImagesNotFound from './../images/images-not-found.jpg';
import './styles/ViewArticle.css';
const images = require.context('./../images/articles', true);

class ViewArticle extends React.Component {
    state = {
        itemSelected: {
            size: (this.props.modalType === 'EDIT' ? this.props.articleOptionsChosen.size : 0),
            color: (this.props.modalType === 'EDIT' ? this.props.articleOptionsChosen.color : 0)
        }
    }
    componentWillReceiveProps = (nextProps) => {
        if (this.props.item.id !== nextProps.item.id)
            this.setState({ itemSelected: { size: 0, color: 0 } });
    }
    handleClickAdd = () => {
        const element = {
            ...this.state.itemSelected,
            size: ((this.state.itemSelected.size !== undefined) ? this.state.itemSelected.size : 0),
            color: ((this.state.itemSelected.color !== undefined) ? this.state.itemSelected.color : 0),
            idArticle: this.props.item.id,
            title: this.props.item.title,
            price: this.props.item.price,
            image: ((this.props.item.images.length > 0) ? this.props.item.images[0].path : ImagesNotFound),
            sizes: this.props.item.sizes,
            colors: this.props.item.colors
        }
        this.props.handleAddItem(element);
    }
    handleClickUpdateItem = () => {
        if (this.props.articleOptionsChosen.size === this.state.itemSelected.size && this.props.articleOptionsChosen.color === this.state.itemSelected.color) {
            this.props.handleUpdateItem(false);
        } else {
            this.props.handleUpdateItem(true, this.state.itemSelected, this.props.item, this.props.articleOptionsChosen);
        }
    }
    onGroupSizeSelect = value => {
        this.setState(
            {
                itemSelected: {
                    ...this.state.itemSelected,
                    size: value
                }
            });
    }

    onGroupColorSelect = value => {
        this.setState(
            {
                itemSelected: {
                    ...this.state.itemSelected,
                    color: value
                }
            });
    }

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        let loadImage = imageName => (images(`./${imageName}`).default);

        const { intl } = this.props;
        return (

            <div className="ViewArticle">
                <Card>
                    <Card.Header>
                        <h2 className="ViewArticleTitle">
                            {this.props.item.title}
                        </h2>
                        {(this.props.quantity() > 0 && this.props.modalType === 'NEW') &&
                            <span className="ViewArticleText">
                                {
                                    this.props.quantity() === 1
                                        ? <FormattedMessage locale={this.props.lang} id="view_article.has_one" />
                                        : (intl.formatMessage({ id: "view_article.has_two_part_one" }) + this.props.quantity() + intl.formatMessage({ id: "view_article.has_two_part_two" }))
                                }
                            </span>
                        }
                        {this.props.modalType === 'EDIT' &&
                            <span className="ViewArticleText">
                                {
                                    this.props.articleOptionsChosen.quantity === 1
                                        ? <FormattedMessage locale={this.props.lang} id="view_article.has_one" />
                                        : (intl.formatMessage({ id: "view_article.has_two_part_one" }) + this.props.articleOptionsChosen.quantity + intl.formatMessage({ id: "view_article.has_two_part_two" }))

                                }
                            </span>
                        }
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
                                                        selectedOption={this.state.itemSelected.color}
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
                                                        selectedOption={this.state.itemSelected.size}
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
                                        <div className="ViewArticleInfo"><span><FormattedMessage locale={this.props.lang} id="view_article.description" /></span> {this.props.item.description}</div>
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
        lang
    }
}

export default injectIntl(connect(mapStateToProps)(ViewArticle));