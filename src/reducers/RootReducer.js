import { combineReducers }  from 'redux'
import { todos }            from './AddTodoReducer'

const rootReducer = combineReducers({
    todos
})

export default rootReducer