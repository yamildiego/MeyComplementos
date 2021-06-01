import { ARTICLE_ADD, ARTICLE_DELETE } from "../reducers/types";
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