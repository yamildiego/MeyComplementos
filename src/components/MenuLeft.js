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
                <Categories
                    setFilterByCategory={this.props.setFilterByCategory}
                    categories={this.props.categories}
                />
                {
                    this.props.dataCart.cartItems.length > 0 &&
                    <Cart
                        handleRemoveItem={this.props.handleRemoveItem}
                        toggleViewCart={this.props.toggleViewCart}
                        dataCart={this.props.dataCart}
                    />
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