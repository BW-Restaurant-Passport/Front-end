import * as types from './actions';




//method 2 using gabe's  method

const initialRestosFetchState = [];

export function restosReducer (state= initialRestosFetchState, action) { 
    switch(action.type){
        case types.FETCH_RESTOS: 
        return [...state,
            ...action.payload]
            
            default: 
            return state;
        }
    }
    
const initialCityFetchState= [];

export function cityReducer (state = initialCityFetchState, action) {
    switch(action.type) {
        case types.FETCH_CITY:
            return [...state, 
                ...action.payload]
                
                default: 
                return state;
    }
}
        
        
//method 1 using training kit method