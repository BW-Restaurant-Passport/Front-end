import * as types from "./actions";
import axiosWithAuth from "../helpers/axiosWithAuth";
import axios from "axios";

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
const restosApi = "https://build-restaurant-passport.herokuapp.com/cities/restaurants";
const restosDetailApi = "https://build-restaurant-passport.herokuapp.com/cities/restaurants/3";


export function fetchRestos(restos){
    return {
        type: types.FETCH_RESTOS,
        payload: {...restos, restoDetails: {...restos, isDeleted: false,}}
    }
}

export const getRestos = (restosApi) => dispatch => {
    axiosWithAuth().get(restosDetailApi)
    .then(response => {
        const restos = response.data;
        dispatch(fetchRestos(restos));
    })
    .catch(error => {
        console.log(error.message);
    })
}



//actionCreators to fetch details on RESTOS

export function fetchRestosDetails (restos) {
  return { 
    type: types.FETCH_RESTOS_DETAILS,
    payload: restos
  }
};

export const getRestosDetails = (id) => dispatch => {
  axiosWithAuth().get(`https://build-restaurant-passport.herokuapp.com/cities/restaurants/${id}`)
  .then( response => {
    const restos = response.data;
    console.log('erica', restos);
    dispatch(fetchRestosDetails(restos));
  }
  )
}


//actionCreators to ADD DETAILS RESTAURANT

// export const onValueChange = input => {
    //   return {
      //     type: types.ON_INPUT_CHANGE,
    //     payload: input
    //   };
    // }
    
    // export const addRestoDetails = detailForm => { 
    //   return { 
    //     type: types.ADD_RESTOS_DETAILS,
    //     payload: detailForm
    //   };
    // }
    
    
    // export const postRestoDetails = (restos) => dispatch => { 
    //   axiosWithAuth().post(restosApi, restos)
    //   .then( (response) => { 
    //     const addedDetails = response.data;
    //     dispatch(addRestoDetails(addedDetails));
    //   })
    //   .catch( error => {
    //     console.log(error.message)
    // })
    // }


// export function fetchCity (city) {
//     return {
//         type: types.FETCH_CITY,
//         payload: city
//     }
// }

//export const getCityData = () => dispatch => {
    
  //     debugger
  //     axiosWithAuth().get(cityApi)
  //     .then(response => {
  //         const city = response.data;
          
  //         dispatch(fetchCity(city))
  //     })
  //     .catch(error => { 
  //         console.log('Error', error)
  //     })    
  // }
  
  
