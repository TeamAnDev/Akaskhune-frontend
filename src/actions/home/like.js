export const LIKE_REQ_SENT = "LIKE_REQ_SENT";
export const LIKE_REQ_SUCCESS = "LIKE_REQ_SUCCESS";
export const LIKE_REQ_ERR = "LIKE_REQ_ERR";

function likeReqSent() {
    return({
        type: LIKE_REQ_SENT
    });
}

function likeReqSuccess() {
    return({
        type: LIKE_REQ_SUCCESS,
    })
}

function likeReqErr(error) {
    return({
        type: LIKE_REQ_ERR,
        error
    })
}

export function likeRequestAction(postId) {
    return async (dispatch) => {
        dispatch(likeReqSent());
        await likeAxios(postId)
        .then(function(response){
            dispatch(likeReqSuccess());
        }).catch(function(error){
            dispatch(likeReqErr(error.response.data.error));
        })
       
    }
}