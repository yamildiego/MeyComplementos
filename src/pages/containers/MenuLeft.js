import React from 'react';
import MenuLeftLayout from './../components/MenuLeftLayout/MenuLeftLayout';
import Categories from './Categories';

class MenuLeft extends React.Component {
    render() {
        return (
            <MenuLeftLayout cart={<Cart />} categories={<Categories categories={this.props.categories} />} />
        )
    }
}

const Cart = () => {
    return (<div>CART</div>)
}

// const Categories = (props) => {
//     return (
//         <div>
//             No {props.categories[0].name}
//         </div>
//     )
// }

export default MenuLeft;