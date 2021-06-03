import React from 'react';
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from 'react-bootstrap';
import formatNumber from './../utilities/formatNumber';
import * as actions from './actions/article';
import './styles/ViewCartLine.css';

const images = require.context('./../images/articles', true);

const MaxItem = [1, 2, 3, 4, 5, 6];

class ViewCartLine extends React.Component {

    handleChange = (e, item, itemData) => {
        let newItem = {
            id: item.id,
            size: itemData.size,
            color: itemData.color,
            price: item.price,
            qty: parseInt(e)
        }
        this.props.dispatch(actions.articleActionReplace(newItem));
    }

    handleClickDelete = (item, itemData) => {
        let newItem = {
            id: item.id,
            size: itemData.size,
            color: itemData.color,
            price: item.price,
            qty: itemData.qty
        }
        this.props.dispatch(actions.articleActionDelete(newItem));
    }

    render() {
        let loadImage = imageName => (images(`./${imageName}`).default);

        return (
            <div className="ViewCartLine">
                <div className="row">
                    <div className="col-3">
                        <Image src={loadImage(this.props.item.images[0].path)} fluid />
                    </div>
                    <div className="col-4 p-0 pl-1">
                        <div>
                            <h5>{this.props.item.title}</h5>
                            <div className="ViewCartLineBody">
                                {(this.props.item.colors && this.props.item.colors.length > 0) &&
                                    <div>
                                        <label className="label"><FormattedMessage locale={this.props.lang} id="view_cart_line.color" /></label>
                                        <span>{this.props.item.colors[this.props.itemData.color].displayName}</span>
                                    </div>
                                }
                                {(this.props.item.sizes && this.props.item.sizes.length > 0) &&
                                    <div>
                                        <label className="label"><FormattedMessage locale={this.props.lang} id="view_cart_line.size" /></label>
                                        <span>{this.props.item.sizes[this.props.itemData.size].displayName}</span>
                                    </div>
                                }
                                <div className="ViewCartLineAction">
                                    {
                                        (this.props.item.sizes && this.props.item.sizes.length > 0 && this.props.item.colors && this.props.item.colors.length > 0) &&
                                        < div className="Link" onClick={() => this.props.openModalUpdate(this.props.item, this.props.itemData)}>
                                            <FormattedMessage locale={this.props.lang} id="view_cart_line.edit" />
                                        </div>
                                    }

                                    <div className="Link" onClick={() => this.handleClickDelete(this.props.item, this.props.itemData)}>
                                        <FormattedMessage locale={this.props.lang} id="view_cart_line.delete" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 p-0" >
                        <div className="ViewCartLinePrice">
                            <div className="ViewCartLineItem">{formatNumber(this.props.item.price)}</div>
                            <div className="ViewCartLineItem">
                                <Dropdown onSelect={(e) => this.handleChange(e, this.props.item, this.props.itemData)}>
                                    <Dropdown.Toggle id="dropdown-custom-components" variant="outline-dark">
                                        X{this.props.itemData.qty}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {
                                            MaxItem.map((item, index) => {
                                                return <Dropdown.Item key={index} eventKey={item} active={this.props.itemData.qty === item} >X{item}</Dropdown.Item>
                                            })
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="ViewCartLineItem">{formatNumber(this.props.item.price * this.props.itemData.qty)}</div>
                        </div>
                    </div>
                </div>
            </div >
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

export default connect(mapStateToProps)(ViewCartLine);