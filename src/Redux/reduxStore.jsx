import {createStore, combineReducers, applyMiddleware} from 'redux'
import authReducer from './authReducer';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import thunkMiddleWare from "redux-thunk"
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store