import popularTagsRequest from '../../axiosRequests/search/popularTags';

export const POPULARTAGS_REQ_SENT = "POPULARTAGS_REQ_SENT";
export const POPULARTAGS_REQ_SUCCESS = "POPULARTAGS_REQ_SUCCESS";
export const POPULARTAGS_REQ_ERR = "POPULARTAGS_REQ_ERR";

function popularTagsReqSent() {
    return({
        type : POPULARTAGS_REQ_SENT
    })
}

function popularTagsReqSuccess(tags, next) {
    return({
        type : POPULARTAGS_REQ_SUCCESS,
        tags,
        next
    })
}

function popularTagsReqErr(error) {
    return({
        type : POPULARTAGS_REQ_ERR,
        error
    })
}

export function requestPopularTags() {
    return async (dispatch) => {
        dispatch(popularTagsReqSent());
        await popularTagsRequest()
        .then(function(response){
            console.warn(response.data);
            dispatch(popularTagsReqSuccess(response.data.results, response.data.next));
        }).catch(function(error){
            dispatch(popularTagsReqErr(error.response.data.error));
        })
    }
}