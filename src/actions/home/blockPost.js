import blockAxios from '../../axiosRequests/home/blockRequest';


export const DELETE_BLOCK_POST_FROM_FEED = "DELETE_BLOCK_POST_FROM_FEED";
export function deleteBlockedPost(postId)
{
    return {
        type : DELETE_BLOCK_POST_FROM_FEED,
        postId
    }
}


export const BLOCK_POST_REQ_SENT = "BLOCK_POST_REQ_SENT";
export const BLOCK_POST_REQ_SUCCESS = "BLOCK_POST_REQ_SUCCESS";
export const BLOCK_POST_REQ_ERR = "BLOCK_POST_REQ_ERR";

function blockPostReqSent() {
    return({
        type: BLOCK_POST_REQ_SENT
    });
}

function blockPostReqSuccess() {
    return({
        type: BLOCK_POST_REQ_SUCCESS,
    })
}

function blockPostReqErr(error) {
    return({
        type: BLOCK_POST_REQ_ERR,
        error
    })
}

export function blockPostRequest(postId) {
    return async (dispatch) => {
        dispatch(blockPostReqSent());
        await blockAxios(postId)
        .then(function(response){
            dispatch(blockPostReqSuccess());
        }).catch(function(error){
            dispatch(blockPostReqErr(error.response.data.error));
        });
    }
}