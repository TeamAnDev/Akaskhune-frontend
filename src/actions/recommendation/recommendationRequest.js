import recommendationRequest from '../../axiosRequests/recommendation/recommendation';

export const RECOM_REQ_SENT = "RECOM_REQ_SENT";
export const RECOM_REQ_SUCCESS = "RECOM_REQ_SUCCESS";
export const RECOM_REQ_ERR = "RECOM_REQ_ERR";

function recomReqSent() {
    return({
        type : RECOM_REQ_SENT
    })
}

function recomReqSuccess(recommendations) {
    return({
        type : RECOM_REQ_SUCCESS,
        recommendations
    })
} 

function recomReqErr(error) {
    return({
        type : RECOM_REQ_ERR,
        error
    })
}

export function requestRecommendations() {
    return async (dispatch) => {
        dispatch(recomReqSent());
        await recommendationRequest()
        .then(function(response){
            console.warn(response.data.results)
            dispatch(recomReqSuccess());
        }).catch(function(error){
            dispatch(recomReqErr(error.response.data.error));
        })
    }
}

