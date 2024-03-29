import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === 'toggle') {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });
const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

export default store;
