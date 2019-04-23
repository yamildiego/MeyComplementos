import React from 'react';
import Image from 'react-bootstrap/Image';
import { Dropdown } from 'react-bootstrap'
import formatNumber from './../utilities/formatNumber';
import './styles/ViewCartLine.css';

const MaxItem = [1, 2, 3, 4, 5, 6];

class ViewCartLine extends React.Component {
    state = {
        itemBack: this.props.item,
        item: this.props.item
    }
    componentWillReceiveProps = nextProps => {
        if (this.props.item.quantity != nextProps.item.quantity)
            this.setState({
                itemBack: { ...this.state.item },
                item: { ...this.state.item, quantity: parseInt(nextProps.item.quantity) }
            });
    }
    handleChange = (e) => {
        var itemUpdated = {
            ...this.state.item,
            quantity: parseInt(e)
        }
        this.props.handleUpdateQuantity(itemUpdated, this.state.item);
    }
    render() {
        return (
            <div className="ViewCartLine">
                <div className="row">
                    <div className="col-3">
                        <Image src="src/images/articles/95388.jpg" fluid />
                    </div>
                    <div className="col-4 p-0 pl-1">
                        <div>
                            <h5>{this.state.item.title}</h5>
                            <div className="ViewCartLineBody">
                                {this.props.item.quantity}
                                {this.state.item.quantity}
                                {this.state.item.colors &&
                                    <div>
                                        <label className="label">Color</label>
                                        <span>{this.state.item.colors[this.state.item.color].displayName}</span>
                                    </div>
                                }
                                {this.state.item.sizes &&
                                    <div>
                                        <label className="label">Talle</label>
                                        <span>{this.state.item.sizes[this.state.item.size].displayName}</span>
                                    </div>
                                }
                                <div className="ViewCartLineAction">
                                    <div className="Link">Editar</div>
                                    <div className="Link">Borrar</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 p-0" >
                        <div className="ViewCartLinePrice">
                            <div className="ViewCartLineItem">{formatNumber(this.state.item.price)}</div>
                            <div className="ViewCartLineItem">
                                <Dropdown onSelect={this.handleChange}>
                                    <Dropdown.Toggle id="dropdown-custom-components">
                                        X{this.state.item.quantity}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {
                                            MaxItem.map((item, index) => {
                                                return <Dropdown.Item key={index} eventKey={item} active={this.state.item.quantity == item} >X{item}</Dropdown.Item>
                                            })
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="ViewCartLineItem">{formatNumber(this.state.item.price * this.state.item.quantity)}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewCartLine;