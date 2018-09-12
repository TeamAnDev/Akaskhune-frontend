import {imagesRequestReducer, infoRequestReducer, othersImagesRequestReducer} from './request';
import {combineReducers} from 'redux'

export default profileApp = combineReducers({
    imagesRequestReducer,
    infoRequestReducer,
    othersImagesRequestReducer,
});