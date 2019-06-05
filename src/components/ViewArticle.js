import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import Slider from "react-slick";
import formatNumber from './../utilities/formatNumber';
import MultiToggle from 'react-multi-toggle';
import ImagesNotFound from './../images/images-not-found.gif';
import './styles/ViewArticle.css';

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
                                        ? "Ya se agrego uno al carrito!"
                                        : "Ya tienes " + this.props.quantity() + " en el carrito!"
                                }
                            </span>
                        }
                        {this.props.modalType === 'EDIT' &&
                            <span className="ViewArticleText">
                                Tienes  {this.props.articleOptionsChosen.quantity} en el carrito!
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
                                                            <Image src={require(`./../images/articles/${element.path}`)} className="mx-auto" /> :
                                                            <video controls>
                                                                <source src={require(`./../images/articles/${element.path}`)} type="video/mp4" />
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
                                                <div className="ViewArticleInfo"><span>Colores</span></div>
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
                                                <div className="ViewArticleInfo"><span>Talles</span></div>
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
                                                <div className="ViewArticleInfo"><span>Marca</span></div>
                                                <span>
                                                    {this.props.item.brand.displayName}
                                                </span>
                                            </React.Fragment>
                                        }
                                    </div>
                                    {
                                        this.props.item.description &&
                                        <div className="ViewArticleInfo"><span>Descripción</span> {this.props.item.description}</div>
                                    }
                                </form>
                                <br />
                                {
                                    this.props.modalType === 'NEW' &&
                                    <Button className="BtnAddArticle" onClick={this.handleClickAdd} block={true} variant="outline-success">Agregar al carrito </Button>
                                }
                                {
                                    this.props.modalType === 'EDIT' &&
                                    <Button
                                        className="BtnAddArticle"
                                        onClick={this.handleClickUpdateItem}
                                        block={true}
                                        variant="outline-success">
                                        Confirmar cambio
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

export default ViewArticle;