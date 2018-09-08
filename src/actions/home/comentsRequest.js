import commentsOfPostAxios from '../../axiosRequests/home/commentsOfPostRequest';

export const COMMENT_LISTS_INITIAL = "COMMENT_LISTS_INITIAL"
export function commentListInitial(postId)
{
    return({
        type : COMMENT_LISTS_INITIAL,
        postId
    })
}

export const COMMENT_LISTS_REQ_SENT = "COMMENT_LISTS_REQ_SENT";
export const COMMENT_LISTS_REQ_SUCCESS = "COMMENT_LISTS_REQ_SUCCESS";
export const COMMENT_LISTS_REQ_ERR = "COMMENT_LISTS_REQ_ERR";

function commentListReqSent() {
    return({
        type: COMMENT_LISTS_REQ_SENT
    });
}

function commentListReqSuccess(comment, nextUrl) {
    return({
        type: COMMENT_LISTS_REQ_SUCCESS,
        comment,
        nextUrl
    })
}

function commentListReqErr(error) {
    return({
        type: COMMENT_LISTS_REQ_ERR,
        error
    })
}

export function commentListRequest(commentUrl) {
    return async (dispatch) => {
        if(commentUrl !== null)
        {
            dispatch(commentListReqSent());
            await commentsOfPostAxios(commentUrl)
            .then(function(response){
                dispatch(commentListReqSuccess(response.data.results, response.data.next));
            }).catch(function(error){
                dispatch(commentListReqErr(error.response.data.error));
            })
        }
    }
}


