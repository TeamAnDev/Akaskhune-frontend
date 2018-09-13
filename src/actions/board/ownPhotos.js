import requestOwnPhotos from '../../axiosRequests/board/ownPhotos';

export const OWNPHOTOS_REQ_SENT = "OWNPHOTOS_REQ_SENT";
export const OWNPHOTOS_REQ_SUCCESS = "OWNPHOTOS_REQ_SUCCESS";
export const OWNPHOTOS_REQ_ERR = "OWNPHOTOS_REQ_ERR";

function ownPhotosReqSent() {
    return ({
        type : OWNPHOTOS_REQ_SENT
    })
}

function ownPhotosReqSuccess(images, next) {
    return({
        type : OWNPHOTOS_REQ_SUCCESS,
        images,
        next
    })
}

function ownPhotosReqErr(error) {
    return({
        type : OWNPHOTOS_REQ_ERR,
        error
    })
}

export function ownPhotosRequest(id) {
    return async (dispatch) => {
        dispatch(ownPhotosReqSent());
        await requestOwnPhotos(id)
        .then(function(response){
            console.warn(response.data);
            dispatch(ownPhotosReqSuccess(response.data.results, response.data.next));
        }).catch(function(error){
            dispatch(ownPhotosReqErr(error.response.data.error));
        })
    }
}