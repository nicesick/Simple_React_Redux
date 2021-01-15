import {ADD_TODO} from '../actions/AddTodoAction'

export function todos(state =[], action) {
    switch(action.type) {
        case ADD_TODO:
            return [...state, action.text];
        default:
            return state;
    }
}