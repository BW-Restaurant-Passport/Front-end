import * as types from "./actions";
import axiosWithAuth from "../helpers/axiosWithAuth";
import axios from 'axios';

import thunk from "redux-thunk";

// const userApi = "";

// export function setUserDetails(userDetails) {
//   return {
//     type: types.FETCH_USER,
//     payload: userDetails
//   };
// }

// // export function setFormDetails(formValues){
// //     return {
// //         type: types.SET_FORM_VALUES,
// //         payload: formValues
// //     }
// // }

// export const getUser = () => dispatch => {
//   axiosWithAuth()
//     .get(userApi)
//     .then(response => {
//       dispatch(setUserDetails(response.data));
//     })
//     .catch(error => {
//       console.log(error.message);
//     });
// };


const cityApi = 'https://build-restaurant-passport.herokuapp.com/cities';
const restosApi = "https://build-restaurant-passport.herokuapp.com/cities/3/restaurants";

export function fetchCity (city) {
    return {
        type: types.FETCH_CITY,
        payload: city
    }
}

export const getCityData = () => dispatch => {
    
    debugger
    axiosWithAuth().get(cityApi)
    .then(response => {
        const city = response.data;
        console.log('dddd', city);
        
        dispatch(fetchCity(city))
    })
    .catch(error => { 
        console.log('Error', error)
    })    
}


export function fetchRestos(restos){
    return {
        type: types.FETCH_RESTOS,
        payload: restos,
    }
}

export const getRestos = (restosApi) => dispatch => {
    debugger
    axiosWithAuth().get(restosApi)
    .then(response => {
debugger
        const restos = response.data;
        dispatch(fetchRestos(restos));
    })
    .catch(error => {
        console.log(error.message);
    })
}
