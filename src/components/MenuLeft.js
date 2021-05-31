import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import MenuLeftLayout from './MenuLeftLayout';
import Cart from './Cart';
import Categories from './Categories';

class MenuLeft extends React.Component {
    state = {
        category: this.props.category
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.category !== this.state.category)
            this.setState({ category: nextProps.category });
    }
    render() {
        return (
            <MenuLeftLayout>
                <Categories
                    category={this.state.category}
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
                            <FormattedMessage locale={this.props.lang} id="menu_left.text_one" />
                        </div>
                        <div className="text-center">
                            <FormattedMessage locale={this.props.lang} id="menu_left.text_two_part_one" /> <Link to="/contacto"><FormattedMessage locale={this.props.lang} id="menu_left.text_two_part_two" />/</Link>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </MenuLeftLayout>
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

export default connect(mapStateToProps)(MenuLeft);