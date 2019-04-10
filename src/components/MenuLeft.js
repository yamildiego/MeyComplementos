import React from 'react';
import MenuLeftLayout from './MenuLeftLayout';
import Cart from './Cart';
import Categories from './Categories';

class MenuLeft extends React.Component {
    render() {
        return (
            <MenuLeftLayout cart={<Cart total={this.props.total} handleRemoveItemById={this.props.handleRemoveItemById} cartItems={this.props.cartItems} />} categories={<Categories categories={this.props.categories} />} />
        )
    }
}

export default MenuLeft;