import {SINGLE_POST_REQ_ERR, SINGLE_POST_REQ_SENT, SINGLE_POST_REQ_SUCCESS, SINGLE_POST_INITIAL} from '../../actions/home/singlePostRequest';
import {ADD_COMMENT_TO_STATE} from '../../actions/home/comments';
import { rest } from '../../config/urls';

function singlePostReducer(state={success:false, error:"", errbool:false, loading:false, post : {}}, action)
{
    switch(action.type)
    {
        case(SINGLE_POST_REQ_SENT):
            let postInit = Object.assign({}, state.post);
            postInit[action.postId] = {};
            return Object.assign({}, state, {loading:true, success:false, errbool:false, error:"", post : postInit});
        case(SINGLE_POST_REQ_ERR):
            return Object.assign({}, state, {loading:false, errbool:true, error:action.error});
        case(SINGLE_POST_REQ_SUCCESS):
            let postSuccess = Object.assign({}, state.post);
            postSuccess[action.postId] = action.post ;
            return Object.assign({}, state, {loading:false, success:true, post : postSuccess});
        case(ADD_COMMENT_TO_STATE):
            let postWithNewComment = Object.assign({}, state.post);
            postWithNewComment[action.postId].comments_count = state.post[action.postId].comments_count + 1;
            return Object.assign({}, state, {post : postWithNewComment});
        default:
            return state;
    }
}
export default singlePostReducer;