import {combineReducers} from 'redux';
import feedsListReducer from './feedsListReducer';
import singlePostReducer from './singlePostReducer';
import commentListReducer from './commentsReducer';
const homeApp = combineReducers({
    feedsListReducer,
    singlePostReducer,
    commentListReducer
});
export default homeApp;