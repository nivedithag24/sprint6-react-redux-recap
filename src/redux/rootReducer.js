import { combineReducers } from "redux";
import reducer from "./cake/reducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake : reducer,
    icecream: iceCreamReducer,
    user : userReducer
})

export default rootReducer









