import {combineReducers} from 'redux';
import feedsListReducer from './feedsListReducer';
import singlePostReducer from './singlePostReducer';
import {commentListReducer, commentAddReducer} from './commentsReducer';
import likeReducer from './like';
const homeApp = combineReducers({
    feedsListReducer,
    singlePostReducer,
    commentListReducer,
    commentAddReducer,
    likeReducer
});
export default homeApp;