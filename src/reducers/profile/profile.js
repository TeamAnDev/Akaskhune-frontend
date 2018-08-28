import {imagesRequestReducer, infoRequestReducer} from './request';
import {combineReducers} from 'redux'

export default profileApp = combineReducers({
    imagesRequestReducer,
    infoRequestReducer
});