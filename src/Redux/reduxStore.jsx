import {createStore, combineReducers} from 'redux'
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
})



let store = createStore(reducers);
export default store