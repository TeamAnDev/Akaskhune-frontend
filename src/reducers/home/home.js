import {combineReducers} from 'redux';
import feedsListReducer from './feedsListReducer';
import singlePostReducer from './singlePostReducer';
const homeApp = combineReducers({
    feedsListReducer,
    singlePostReducer
});
export default homeApp;