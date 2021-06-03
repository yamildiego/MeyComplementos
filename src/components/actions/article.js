import { ARTICLE_ADD, ARTICLE_DELETE, ARTICLE_REPLACE_QTY, ARTICLE_UPDATE, ARTICLES_SET_FROM_LOCAL_FORAGE } from "../reducers/types";
// import { LANG_SET, IS_LOADING, SET_MESSAGE, SHOW_ERRORS, UPDATE_FORM } from "../reducers/types";
// import Constants from './../config';
// import queryString from 'querystring';
// import isset from './../components/utilities/isset';

export const articleActionAdd = item => ({
    type: ARTICLE_ADD,
    item
});

export const articleActionDelete = item => ({
    type: ARTICLE_DELETE,
    item
});

export const articleActionReplace = item => ({
    type: ARTICLE_REPLACE_QTY,
    item
});

export const articleActionUpdate = (itemOld, itemNew) => ({
    type: ARTICLE_UPDATE,
    itemOld,
    itemNew
});

export const setItemsFromLocalForage = (dataCart) => ({
    type: ARTICLES_SET_FROM_LOCAL_FORAGE,
    dataCart
});