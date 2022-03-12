import {createStore, combineReducers} from 'redux'
import authReducer from './authReducer';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
})



let store = createStore(reducers);
export default store