import imagesRequest from '../../axiosRequests/profile/profileImages';
import infoRequest from '../../axiosRequests/profile/profileInfo';

export const IMAGES_REQ_SENT = "IMAGES_REQ_SENT";
export const IMAGES_REQ_SUCCESS = "IMAGES_REQ_SUCCESS";
export const IMAGES_REQ_ERROR = "IMAGES_REQ_ERROR";
export const INFO_REQ_SUCCESS = "INFO_REQ_SUCCESS";

export function imagesRequestSent() {
    return ({
        type: IMAGES_REQ_SENT
    })
}

export function imagesRequestSuccess(images) {
    return ({
        type: IMAGES_REQ_SUCCESS,
        images
    })
}

export function imagesRequestError(error) {
    return({
        type : IMAGES_REQ_ERROR,
        error
    })
}

export function infoRequestSuccess(data) {
    return({
        type : INFO_REQ_SUCCESS,
        data
    })
}

export function requestImages() {
    return async (dispatch) => {
        dispatch(imagesRequestSent());
        await imagesRequest()
        .then(function(response){
            dispatch(imagesRequestSuccess(response.data.images));
        }).catch(function(error) {
            dispatch(imagesRequestError(error));
        });
    }
}

export function requestInfo() {
    return async (dispatch) => {
        await infoRequest()
        .then(function(response){
            dispatch(infoRequestSuccess(response.data));
        });
    }
}

