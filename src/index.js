import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {createStore} from "redux"


// ACTIONS
const increment = () => {
    return {
        type: 'INCREMENT',
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}

// REDUCERS
const counter = (state= 0, action) =>{
    switch (action.type){
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        default:
            return state
    }
}

// STORE
let store = createStore(counter)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
