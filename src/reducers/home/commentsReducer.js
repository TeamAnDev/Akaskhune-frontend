import {COMMENT_LISTS_REQ_ERR, COMMENT_LISTS_REQ_SENT, COMMENT_LISTS_REQ_SUCCESS, COMMENT_LISTS_INITIAL} from '../../actions/home/comentsRequest';
import { rest } from '../../config/urls';

function commentListReducer(state={success:false, error:"", errbool:false, loading:false, comments:[],
                                url:'', endLoading : false, postId:0}, action)
{
    switch(action.type)
    {
        case(COMMENT_LISTS_INITIAL):
            return Object.assign({}, state, {comments : [], url: rest.commentList(action.postId), postId:action.postId});
        case(COMMENT_LISTS_REQ_SENT):
            let loading = false;
            let endLoading = false;
            if(state.url === rest.commentList(state.postId))
                loading = true;
            else
                endLoading = true;
            return Object.assign({}, state, {loading, endLoading, success:false, errbool:false, error:""})
        case(COMMENT_LISTS_REQ_ERR):
            return Object.assign({}, state, {loading:false, endLoading:false, errbool:true, error:action.error});
        case(COMMENT_LISTS_REQ_SUCCESS):
            let newcomment = state.comments.concat(action.comment);
            return Object.assign({}, state, {loading:false, endLoading:false, success:true, comments : newcomment, url : action.nextUrl});
        default:
            return state;
    }
}
export default commentListReducer;