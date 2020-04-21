import {combineReducers} from 'redux';
import {UserReducer} from './User/reducer';

export const reducers = combineReducers({
    User:UserReducer
})