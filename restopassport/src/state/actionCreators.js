import * as types from './actions';
import axiosWithAuth from '../helpers/axiosWithAuth';

const cityApi = 'https://build-restaurant-passport.herokuapp.com/cities';

// const restosApi = '';

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

// export function fetchRestos (resto) {
//     return {
//         type: types.FETCH_RESTOS,
//         payload: restos
//     }
// }
