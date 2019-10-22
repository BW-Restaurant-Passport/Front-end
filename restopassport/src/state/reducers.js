import * as types from "./actions";


// const initialValueCount = 0;
// export function countReducer(count = initialValueCount, action) {
//   switch (action.type) {
//     case types.INCREMENT:
//       return count + 1;
//     case types.DECREMENT:
//       return count - 1;
//     case types.RESET:
//       return 0;
//     default:
//       return count;
//   }
// }


// const initialUserDetails = { username: "", password: "" };

// export function userReducer(state = initialUserDetails, action) {
//   switch (action.type) {
//     // case types.FETCH_USER:
//     //   return action.payload;
//     default:
//       return initialUserDetails;
//   }
// }

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
   

        
        
