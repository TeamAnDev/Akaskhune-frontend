import {SINGLE_POST_REQ_ERR, SINGLE_POST_REQ_SENT, SINGLE_POST_REQ_SUCCESS, SINGLE_POST_INITIAL} from '../../actions/home/singlePostRequest';
import {ADD_COMMENT_TO_STATE} from '../../actions/home/comments';
import { rest } from '../../config/urls';

function singlePostReducer(state={success:false, error:"", errbool:false, loading:false, post : {}}, action)
{
    switch(action.type)
    {
        case(SINGLE_POST_REQ_SENT):
            return Object.assign({}, state, {loading:true, success:false, errbool:false, error:"", post:{}})
        case(SINGLE_POST_REQ_ERR):
            return Object.assign({}, state, {loading:false, errbool:true, error:action.error});
        case(SINGLE_POST_REQ_SUCCESS):
            return Object.assign({}, state, {loading:false, success:true, post : action.post});
        case(ADD_COMMENT_TO_STATE):
            let newPost = Object.assign({}, state.post, {comments_count : state.post.comments_count + 1});
            return Object.assign({}, state, {post : newPost});
        default:
            return state;
    }
}
export default singlePostReducer;