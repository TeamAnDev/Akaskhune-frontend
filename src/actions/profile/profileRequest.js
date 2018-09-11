import imagesRequest from '../../axiosRequests/profile/profileImages';
import infoRequest from '../../axiosRequests/profile/profileInfo';
export const IMAGES_REQ_INIT = "IMAGES_REQ_INIT"; 
export const IMAGES_REQ_SENT = "IMAGES_REQ_SENT";
export const IMAGES_REQ_SUCCESS = "IMAGES_REQ_SUCCESS";
export const IMAGES_REQ_ERROR = "IMAGES_REQ_ERROR";
export const INFO_REQ_SUCCESS = "INFO_REQ_SUCCESS";


export function imageRequestInit()
{
    return {
        type : IMAGES_REQ_INIT,
    }
}
export function imagesRequestSent() {
    return ({
        type: IMAGES_REQ_SENT,
    })
}

export function imagesRequestSuccess(images, next) {
    return ({
        type: IMAGES_REQ_SUCCESS,
        images,
        next
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

export function requestImages(imagesUrl) {
    return async (dispatch) => {
        
        if(imagesUrl !== null && imagesUrl !== undefined) {
            dispatch(imagesRequestSent());
            await imagesRequest(imagesUrl)
            .then(function(response){
                dispatch(imagesRequestSuccess(response.data.results, response.data.next));
            }).catch(function(error) {
                dispatch(imagesRequestError(error));
            });
        }   
    }
}

export function requestInfo(username) {
    return async (dispatch) => {
        await infoRequest(username)
        .then(function(response){
            dispatch(infoRequestSuccess(response.data));
        });
    }
}

