import {combineReducers} from 'redux';
import feedsListReducer from './feedsListReducer';
import singlePostReducer from './singlePostReducer';
import {commentListReducer, commentAddReducer} from './commentsReducer';
const homeApp = combineReducers({
    feedsListReducer,
    singlePostReducer,
    commentListReducer,
    commentAddReducer
});
export default homeApp;