import {combineReducers} from 'redux';
import feedsListReducer from './feedsListReducer';
const homeApp = combineReducers({
    feedsListReducer,
});
export default homeApp;