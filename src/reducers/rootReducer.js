import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import userReducer from './userReducer'
export default combineReducers({
    list : taskReducer,
    user : userReducer
})