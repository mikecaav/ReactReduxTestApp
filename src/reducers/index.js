import counterReducer from "./counter.js"
import loggedReducer from "./isLogged.js"
import {combineReducers} from "redux"

const reducers = combineReducers({
    loggedReducer,
    counterReducer
})

export default reducers