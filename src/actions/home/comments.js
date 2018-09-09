import commentAxios from '../../axiosRequests/home/comment';
import {commentListRequest, commentListInitial} from './comentsRequest';
import {rest} from '../../config/urls';
export const COMMENT_REPLY_ADD = "COMMENT_REPLY";
export const COMMENT_REPLY_DELETE = "COMMENT_REPLY_DELETE";
export function addReply(cmId,  userName)
{
    return {
        type : COMMENT_REPLY_ADD,
        cmId,
        userName
    }
}
export function deleteReply()
{
    return {
        type : COMMENT_REPLY_DELETE,
    }
}

export const  ON_COMMENT_CHANGED = "ON_COMMENT_CHANGED";
export function changeComment(comment) {
    return {
        type : ON_COMMENT_CHANGED,
        comment
    }
}


export const ADD_COMMENT_TO_STATE = "ADD_COMMENT_TO_STATE";
export function addCommentToState(postId, index)
{
    return {
        type : ADD_COMMENT_TO_STATE,
        postId ,
        index
    }
}
export const ADD_COMMENT_TO_STATE_FEEDS = "ADD_COMMENT_TO_STATE_FEEDS";
export function addCommentToStateFeeds(postId, index)
{
    return {
        type : ADD_COMMENT_TO_STATE_FEEDS,
        postId ,
        index
    }
}
export const COMMENT_REQ_SENT = "COMMENT_REQ_SENT";
export const COMMENT_REQ_SUCCESS = "COMMENT_REQ_SUCCESS";
export const COMMENT_REQ_ERR = "COMMENT_REQ_ERR";

function commentReqSent() {
    return({
        type: COMMENT_REQ_SENT
    });
}
function commentReqSuccess() {
    return({
        type: COMMENT_REQ_SUCCESS,
    })
}
function commentReqErr(error) {
    return({
        type: COMMENT_REQ_ERR,
        error
    })
}

export function commentRequestAction(postId, comment, index,reply) {
    return async (dispatch) => {
        dispatch(commentReqSent());
        await commentAxios(postId, comment, reply)
        .then(function(response){
            dispatch(commentReqSuccess());
            dispatch(commentClear());
            dispatch(deleteReply());
            dispatch(addCommentToState(postId, index));
            dispatch(addCommentToStateFeeds(postId, index));
            dispatch(commentListInitial(postId));
            dispatch(commentListRequest(rest.commentList(postId.toString())));
        }).catch(function(error){
            dispatch(commentReqErr(error.response.data.error));
        })
       
    }
}

export const CLEAR_COMMNET = "CLEAR_COMMENT";
function commentClear()
{
    return {
        type : CLEAR_COMMNET
    }
}

export const START_COMMENTING = "START_COMMENTING";
export const STOP_COMMENTING = "STOP_COMMENTING";
export function startCommenting()
{
    return {
        type : START_COMMENTING
    }
}
export function stopCommenting()
{
    return {
        type : STOP_COMMENTING
    }
}
