import {createStore, combineReducers, applyMiddleware} from 'redux'
import authReducer from './authReducer';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import thunkMiddleWare from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
})



let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store