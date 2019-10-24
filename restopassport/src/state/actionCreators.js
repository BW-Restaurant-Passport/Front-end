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

const cityApi = "https://build-restaurant-passport.herokuapp.com/cities";
const restosApi =
  "https://build-restaurant-passport.herokuapp.com/cities/3/restaurants";

const detailsApi =
  "https://build-restaurant-passport.herokuapp.com/cities/restaurants/";

export function fetchCity(city) {
  return {
    type: types.FETCH_CITY,
    payload: city
  };
}


const cityApi = 'https://build-restaurant-passport.herokuapp.com/cities';
// const restosApi = "https://build-restaurant-passport.herokuapp.com/cities/restaurants";
const restosDetailApi = "https://build-restaurant-passport.herokuapp.com/cities/restaurants/3";





// export const getRestos = (restosApi) => dispatch => {
//     axiosWithAuth().get(restosDetailApi)

export function fetchRestos(restos) {
  return {
    type: types.FETCH_RESTOS,
    payload: restos
    // payload: { ...restos, restoDetails: {...restos, isDeleted: false, isVisited: false} }
  };
}

// export function fetchDetail(restID) {
//   return{
//     type: types.FETCH_DETAIL,
//     payload: {...restoDetails, isVisited: false}
//   }
// }

export const getRestos = restosApi => dispatch => {
  axiosWithAuth()
    .get(restosDetailApi)
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


export const getRestosDetails = (restID) => dispatch => {

  debugger
  axiosWithAuth().get(`https://build-restaurant-passport.herokuapp.com/cities/restaurants${restID}`)

  .then( response => {
     
    const restos = response.data;
    dispatch(fetchRestosDetails(restos))
  }
  )
  .catch(error => console.log(error))
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
  
  

// export const deleteRestos = restID => dispatch => {
//   debugger;
//   axiosWithAuth()
//     .delete(restosApi + restID)
//     .then(response => {
//       dispatch(fetchRestos(response));
//     })
//     .catch(error => console.log(error.message));
// };

export const deleteResto = (state, id) => {
  
  const newRestos = state.restaurants.filter(resto => resto.restID !== id);

  return {
    type: types.DELETE_RESTO,
    payload: newRestos
  };
};

// export const renderDetail = restID => dispatch => {
// axiosWithAuth()
// .get(detailsApi + restID)
// .then(response => {
//   dispatch(fetchDetail(response));
// })
// .catch(error => console.log('detail fetching error'));
// }
