import { createStore, combineReducers } from 'redux'
import filterReducer from './filterReducer'
import todosReducer from './todosReducer'

const reducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer
})

export default reducer;