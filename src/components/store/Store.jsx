import Wishlist from "./reducer/AppReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
   reducer : {
    Wishlist
   }
})


export default store