import {combineReducers} from 'redux';
import feedsListReducer from './feedsListReducer';
import singlePostReducer from './singlePostReducer';
import {commentListReducer, commentAddReducer} from './commentsReducer';
import likeReducer from './like';
import blockPostReducer from './blockPostReducer';
import sharePostReducer from './sharePostReducer';

const homeApp = combineReducers({
    feedsListReducer,
    singlePostReducer,
    commentListReducer,
    commentAddReducer,
    likeReducer,
    blockPostReducer,
    sharePostReducer
});
export default homeApp;