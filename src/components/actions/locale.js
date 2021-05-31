import { LANG_SET } from "../reducers/types";
// import { LANG_SET, IS_LOADING, SET_MESSAGE, SHOW_ERRORS, UPDATE_FORM } from "../reducers/types";
// import Constants from './../config';
// import queryString from 'querystring';
// import isset from './../components/utilities/isset';

export const langSet = lang => ({
    type: LANG_SET,
    lang
});

// export const isLoading = value => ({
//     type: IS_LOADING,
//     value
// });

// export const showErrors = value => ({
//     type: SHOW_ERRORS,
//     value
// });
// export const setMessange = (text, type) => ({
//     type: SET_MESSAGE,
//     value: { text, type }
// });

// export const updateForm = (form) => ({
//     type: UPDATE_FORM,
//     value: form
// });

// export const sendFormAsync = form => {
//     return (dispatch) => {
//         if (form.name === "" || form.message === "" || form.email === "") {
//             dispatch(showErrors(true));
//         } else {
//             dispatch(isLoading(true));
//             fetch(Constants.urlServerPHP + '/contact', {
//                 method: 'POST',
//                 body: queryString.stringify(form),
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                     'Accept': 'application/json'
//                 }
//             })
//                 .then(response => response.json())
//                 .then(response => {
//                     if (response.status)
//                         if (isset(response.errors))
//                             dispatch(setMessange("Ups ha ocurrido un error, contacte al administrador del sistema.", "ERROR"));
//                         else
//                             dispatch(setMessange("La consulta se envio con éxito, te responderemos a la brevedad.", "OK"));
//                     else
//                         dispatch(setMessange("Ups ha ocurrido un error en nuestros servidor, contacte al administrador del sistema.", "ERROR"));
//                     dispatch(isLoading(false));
//                 });
//         }
//     }
// };