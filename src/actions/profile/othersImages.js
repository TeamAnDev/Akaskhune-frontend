import imagesRequest from '../../axiosRequests/profile/profileImages';
export const IMAGES_OTHERS_REQ_INIT = "IMAGES_OTHERS_REQ_INIT"; 
export const IMAGES_OTHERS_REQ_SENT = "IMAGES_OTHERS_REQ_SENT";
export const IMAGES_OTHERS_REQ_SUCCESS = "IMAGES_OTHERS_REQ_SUCCESS";
export const IMAGES_OTHERS_REQ_ERROR = "IMAGES_OTHERS_REQ_ERROR";

export function imageOtherRequestInit(username)
{
    return {
        type : IMAGES_OTHERS_REQ_INIT,
        username
    }
}
function imagesOtherRequestSent() {
    return ({
        type: IMAGES_OTHERS_REQ_SENT,
    })
}

function imagesOtherRequestSuccess(images, next, username) {
    return ({
        type: IMAGES_OTHERS_REQ_SUCCESS,
        images,
        next,
        username
    })
}

 function imagesOtherRequestError(error) {
    return({
        type : IMAGES_OTHERS_REQ_ERROR,
        error
    })
}
export function requestOthersImages(imagesUrl, username) {
    return async (dispatch) => {
        if(imagesUrl !== null && imagesUrl !== undefined) {
            dispatch(imagesOtherRequestSent());
            await imagesRequest(imagesUrl)
            .then(function(response){
                dispatch(imagesOtherRequestSuccess(response.data.results, response.data.next, username));
            }).catch(function(error) {
                dispatch(imagesOtherRequestError(error));
            });
        }   
    }
}