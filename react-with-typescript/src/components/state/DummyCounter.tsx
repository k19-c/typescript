import { useReducer } from "react";


type StateCounter = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}


type CounterAction = UpdateAction | ResetAction


const initialState = { count: 0};


const Reducer = (state: StateCounter, action: CounterAction) => {

    switch(action.type) {

        case 'increment':
           return { count: state.count +  action.payload}
        case 'decrement':
            return { count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}