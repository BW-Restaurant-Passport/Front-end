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

export const getCityData = () => dispatch => {
  debugger;
  axiosWithAuth()
    .get(cityApi)
    .then(response => {
      const city = response.data;
      console.log("dddd", city);

      dispatch(fetchCity(city));
    })
    .catch(error => {
      console.log("Error", error);
    });
};

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
    .get(restosApi)
    .then(response => {
      const restos = response.data;
      dispatch(fetchRestos(restos));
    })
    .catch(error => {
      console.log(error.message);
    });
};

// export const deleteRestos = restID => dispatch => {
//   debugger;
//   axiosWithAuth()
//     .delete(restosApi + restID)
//     .then(response => {
//       dispatch(fetchRestos(response));
//     })
//     .catch(error => console.log(error.message));
// };

export const deleteResto = (restos, id) => {
  console.log("restos", restos, "id", id);
  const newRestos = restos.restaurants.filter(resto => resto.restID !== id);
  console.log(newRestos);
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
