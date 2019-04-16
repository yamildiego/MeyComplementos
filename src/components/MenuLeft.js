import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import MenuLeftLayout from './MenuLeftLayout';
import Cart from './Cart';
import Categories from './Categories';

class MenuLeft extends React.Component {
    render() {
        return (
            <MenuLeftLayout>
                <Categories setFilterByCategory={this.props.setFilterByCategory} categories={this.props.categories} />
                {
                    this.props.cartItems.length > 0 &&
                    <Cart totalItems={this.props.totalItems} total={this.props.total} handleRemoveItemById={this.props.handleRemoveItemById} cartItems={this.props.cartItems} />
                }
                <ListGroup>
                    <ListGroup.Item className="MenuLeftLayout-Ad">
                        <div className="text-center">
                            ¿No tenemos lo que estas buscando?
                    </div>
                        <div className="text-center">
                            Hace tu pedido haciendo clic <Link to="/contacto">aquí!/</Link>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </MenuLeftLayout>
        )
    }
}

export default MenuLeft;