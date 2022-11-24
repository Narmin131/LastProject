import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import wishlist from "../store/reducer/AppReducer";

// const store = createStore(
//     combineReducers({
//       wishlist
//     })
// )

const store = configureStore({
  reducer: {
    wishlist,
  },
});
export default store;
