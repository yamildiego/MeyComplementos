import { ARTICLE_ADD, ARTICLES_GET_LOCAL_FORAGE, ARTICLE_DELETE } from './types';
import localforage from 'localforage';

var dataCart = {
    cartItems: [],
    totalItems: 0,
    total: 0
}

const getItemsLocalForage = () => {
    var dataCart = {
        cartItems: [],
        totalItems: 0,
        total: 0
    }

    localforage.getItem('dataCart', (err, value) => { if (value !== undefined) dataCart = value; });

    return dataCart;
}


const AddItem = (state, item) => {
    let newList = [];
    let newItem = item;

    let totalItems = state.totalItems + newItem.qty;
    let total = state.total + newItem.price * newItem.qty;

    state.cartItems.forEach(i => {
        if (i.id == item.id && i.size == item.size && i.color == item.color)
            newItem.qty = newItem.qty + i.qty
        else
            newList.push(i);
    });

    newList.push(newItem);

    let newDataCart = { cartItems: newList, totalItems, total }

    localforage.setItem('dataCart', newDataCart);

    return newDataCart;
}

const removeItem = (state, item) => {
    let newList = [];
    let newItem = item;

    let totalItems = state.totalItems - newItem.qty;
    let total = state.total - newItem.price * newItem.qty;

    state.cartItems.forEach(i => {
        if (i.id == item.id && i.size == item.size && i.color == item.color)
            newItem.qty = i.qty - newItem.qty;
        else
            newList.push(i);
    });

    if (newItem.qty > 0) newList.push(newItem);

    let newDataCart = { cartItems: newList, totalItems, total }

    localforage.setItem('dataCart', newDataCart);
    return newDataCart;
}

export default function articleReducer(state = dataCart, action = {}) {
    switch (action.type) {
        case ARTICLES_GET_LOCAL_FORAGE:
            return { ...getItemsLocalForage() };
        case ARTICLE_ADD:
            return { ...AddItem(state, action.item) }
        case ARTICLE_DELETE:
            return { ...removeItem(state, action.item) }
        default:
            return state;
    }
}