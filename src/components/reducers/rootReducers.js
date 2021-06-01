import { combineReducers } from "redux";
import locale from "./locale";
import articleReducer from "./articleReducer";

export default combineReducers({
    locale,
    articleReducer
});