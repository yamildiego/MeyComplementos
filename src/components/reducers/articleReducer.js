import { ARTICLE_ADD, ARTICLE_DELETE, ARTICLE_REPLACE_QTY, ARTICLE_UPDATE, ARTICLES_SET_FROM_LOCAL_FORAGE } from './types';
import localforage from 'localforage';

var dataCart = {
    cartItems: [],
    totalItems: 0,
    total: 0
}

// const getItemsLocalForage = () => {
//     var dataCart = {
//         cartItems: [],
//         totalItems: 0,
//         total: 0
//     }

//     localforage.getItem('dataCart', (err, value) => { if (value !== undefined) dataCart = value; });

//     return dataCart;
// }


const addItem = (state, item) => {
    let newList = [];
    let newItem = item;

    let totalItems = state.totalItems + newItem.qty;
    let total = state.total + newItem.price * newItem.qty;

    state.cartItems.forEach(i => {
        if (i.id === item.id && i.size === item.size && i.color === item.color)
            newItem.qty = newItem.qty + i.qty
        else
            newList.push(i);
    });

    newList.push(newItem);

    let newDataCart = { cartItems: newList, totalItems, total }

    localforage.setItem('dataCart', newDataCart);

    return newDataCart;
}

const replaceQtyItem = (state, item) => {
    let newList = [];
    let newItem = item;

    let totalItems = state.totalItems;
    let total = state.total;

    state.cartItems.forEach(i => {
        if (i.id === item.id && i.size === item.size && i.color === item.color) {
            totalItems = state.totalItems - i.qty + newItem.qty;
            total = state.total - i.price * i.qty + newItem.price * newItem.qty;
        }
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
        if (i.id === item.id && i.size === item.size && i.color === item.color)
            newItem.qty = i.qty - newItem.qty;
        else
            newList.push(i);
    });

    if (newItem.qty > 0) newList.push(newItem);

    let newDataCart = { cartItems: newList, totalItems, total }

    localforage.setItem('dataCart', newDataCart);
    return newDataCart;
}

const updateItem = (state, itemOld, itemNew) => {
    return addItem(removeItem(state, itemOld), itemNew);
}

export default function articleReducer(state = dataCart, action = {}) {
    switch (action.type) {
        case ARTICLES_SET_FROM_LOCAL_FORAGE:
            return { ...action.dataCart };
        case ARTICLE_REPLACE_QTY:
            return { ...replaceQtyItem(state, action.item) };
        case ARTICLE_ADD:
            return { ...addItem(state, action.item) }
        case ARTICLE_DELETE:
            return { ...removeItem(state, action.item) }
        case ARTICLE_UPDATE:
            return { ...updateItem(state, action.itemOld, action.itemNew) }
        default:
            return { ...state };
    }
}