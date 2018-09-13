import singlePostAxios from "../../axiosRequests/home/singlePostRequest";


export const SINGLE_POST_REQ_SENT = "SINGLE_POST_REQ_SENT";
export const SINGLE_POST_REQ_SUCCESS = "SINGLE_POST_REQ_SUCCESS";
export const SINGLE_POST_REQ_ERR = "SINGLE_POST_REQ_ERR";

function singlePostReqSent(postId) {
    return({
        type: SINGLE_POST_REQ_SENT,
        postId
    });
}

function singlePostReqSuccess(post, postId) {
    return({
        type: SINGLE_POST_REQ_SUCCESS,
        post,
        postId
    })
}

function singlePostReqErr(error) {
    return({
        type: SINGLE_POST_REQ_ERR,
        error
    })
}


export function singlePostRequest(id) {
    return async (dispatch) => {
            dispatch(singlePostReqSent(id));
            await singlePostAxios(id)
            .then(function(response){
                dispatch(singlePostReqSuccess(response.data, id));
            }).catch(function(error){
                dispatch(singlePostReqErr(error.response.data.error));
            })
        
    }
}


