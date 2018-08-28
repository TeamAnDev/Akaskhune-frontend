import imagesRequest from '../../axiosRequests/profile/profileImages';

export const IMAGES_REQ_SENT = "IMAGES_REQ_SENT";
export const IMAGES_REQ_SUCCESS = "IMAGES_REQ_SUCCESS";
export const IMAGES_REQ_ERROR = "IMAGES_REQ_ERROR";


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

export function requestImages() {
    return async (dispatch) => {
        dispatch(imagesRequestSent());
        await imagesRequest()
        .then(function(response){
            dispatch(imagesRequestSuccess(response.data.images));
        }).catch(function(error) {
            dispatch(imagesRequestError(error));
        })
    }
}

