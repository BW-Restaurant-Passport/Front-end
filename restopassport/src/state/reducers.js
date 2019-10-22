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

const initialUserDetails = { username: "", password: "" };

export function userReducer(state = initialUserDetails, action) {
  switch (action.type) {
    case types.FETCH_USER:
      return action.payload;
    default:
      return initialUserDetails;
  }
}
