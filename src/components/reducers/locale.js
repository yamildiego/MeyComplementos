import { LANG_SET } from './types';

export default function locale(state = { lang: "" }, action = {}) {
    switch (action.type) {
        case LANG_SET:
            return { ...state, lang: action.lang };
        default:
            return state;
    }
}