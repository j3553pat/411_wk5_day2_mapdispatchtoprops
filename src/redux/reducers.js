import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
        return [...state, action.value]
        
        case 'REMOVE_CAR':
        let removedState = [...state]
        removedState.splice(action.value, 1)
        return removedState
        
        default:
        return state;
    }
}

export default combineReducers({ user, cars })