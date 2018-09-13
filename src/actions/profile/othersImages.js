import imagesRequest from '../../axiosRequests/profile/profileImages';
export const IMAGES_OTHERS_REQ_INIT = "IMAGES_OTHERS_REQ_INIT"; 
export const IMAGES_OTHERS_REQ_SENT = "IMAGES_OTHERS_REQ_SENT";
export const IMAGES_OTHERS_REQ_SUCCESS = "IMAGES_OTHERS_REQ_SUCCESS";
export const IMAGES_OTHERS_REQ_ERROR = "IMAGES_OTHERS_REQ_ERROR";

export function imageOtherRequestInit()
{
    return {
        type : IMAGES_OTHERS_REQ_INIT,
    }
}
function imagesOtherRequestSent() {
    return ({
        type: IMAGES_OTHERS_REQ_SENT,
    })
}

function imagesOtherRequestSuccess(images, next) {
    return ({
        type: IMAGES_OTHERS_REQ_SUCCESS,
        images,
        next
    })
}

 function imagesOtherRequestError(error) {
    return({
        type : IMAGES_OTHERS_REQ_ERROR,
        error
    })
}
export function requestOthersImages(imagesUrl) {
    return async (dispatch) => {
        
        if(imagesUrl !== null && imagesUrl !== undefined) {
            dispatch(imagesOtherRequestSent());
            await imagesRequest(imagesUrl)
            .then(function(response){
                dispatch(imagesOtherRequestSuccess(response.data.results, response.data.next));
            }).catch(function(error) {
                dispatch(imagesOtherRequestError(error));
            });
        }   
    }
}