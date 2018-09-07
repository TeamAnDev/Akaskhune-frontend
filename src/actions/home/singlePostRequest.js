import singlePostAxios from "../../axiosRequests/home/singlePostRequest";


export const SINGLE_POST_REQ_SENT = "SINGLE_POST_REQ_SENT";
export const SINGLE_POST_REQ_SUCCESS = "SINGLE_POST_REQ_SUCCESS";
export const SINGLE_POST_REQ_ERR = "SINGLE_POST_REQ_ERR";

function singlePostReqSent() {
    return({
        type: SINGLE_POST_REQ_SENT
    });
}

function singlePostReqSuccess(post) {
    return({
        type: SINGLE_POST_REQ_SUCCESS,
        post,
        
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
            dispatch(singlePostReqSent());
            await singlePostAxios(id)
            .then(function(response){
                dispatch(singlePostReqSuccess(response.data));
            }).catch(function(error){
                dispatch(singlePostReqErr(error.response.data.error));
            })
        
    }
}


