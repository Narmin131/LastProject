import { combineReducers, createStore} from "redux";
import wishlist from "../store/reducer/AppReducer"

const store = createStore(
    combineReducers({
      wishlist
    })
)
export default store;