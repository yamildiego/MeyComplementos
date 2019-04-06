import React from 'react';
import MenuLeftLayout from './../components/MenuLeftLayout/MenuLeftLayout';
import Cart from './../components/Cart/Cart';
import Categories from './Categories';

class MenuLeft extends React.Component {
    render() {
        return (
            <MenuLeftLayout cart={<Cart handleRemoveItem={this.props.handleRemoveItem} cartItems={this.props.cartItems} />} categories={<Categories categories={this.props.categories} />} />
        )
    }
}

export default MenuLeft;