import {COMMENT_LISTS_REQ_ERR, COMMENT_LISTS_REQ_SENT, COMMENT_LISTS_REQ_SUCCESS, COMMENT_LISTS_INITIAL} from '../../actions/home/comentsRequest';
import { rest } from '../../config/urls';
import {COMMENT_REPLY_ADD,START_COMMENTING, STOP_COMMENTING, COMMENT_REPLY_DELETE} from '../../actions/home/comments';
import {COMMENT_REQ_SENT, COMMENT_REQ_ERR, CLEAR_COMMNET,COMMENT_REQ_SUCCESS,  ON_COMMENT_CHANGED } from '../../actions/home/comments';
export function commentListReducer(state={success:false, error:"", errbool:false, loading:false, comments:[],
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

export function commentAddReducer(state={replyBool : false, replyCmId :  "", replyUserName : "",
                                        comment:"", success:false, error:"", errbool : false, loading : false, commenting : false}, action)
{
    switch(action.type)
    {
        case(START_COMMENTING):
            return Object.assign({}, state, {commenting:true});
        case(STOP_COMMENTING):
            return Object.assign({}, state, {commenting : false})
        case(COMMENT_REPLY_ADD):
            return Object.assign({}, state, {replyBool : true, replyCmId : action.cmId, replyUserName : action.userName});
        case(COMMENT_REPLY_DELETE):
            return Object.assign({}, state,  {replyBool : false, replyCmId : "", replyUserName : ""});
        case(ON_COMMENT_CHANGED):
            return Object.assign({}, state, {comment : action.comment});
        case(COMMENT_REQ_SENT):
            return Object.assign({}, state, {loading : true, success:false, errbool:false, error:""});
        case(COMMENT_REQ_ERR):
            return Object.assign({}, state, {loading : false, errbool:true, error : action.error});
        case(COMMENT_REQ_SUCCESS):
            return Object.assign({}, state, {loading:false, success:true});
        case(CLEAR_COMMNET):
            return Object.assign({}, state, {comment : ""});
        default:
            return  state;
    }

}
