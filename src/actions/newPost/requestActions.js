import newPostAxios from '../../axiosRequests/newPost/newPost';
import {requestImages} from '../profile/profileRequest';

export const NEW_POST_REQUEST_SENT = 'NEW_POST_REQUEST_SENT';
export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';
export const NEW_POST_REQ_ERR = 'NEW_POST_REQ_ERROR';

function newPostReqSent() {
    return {
        type : NEW_POST_REQUEST_SENT
    }
}

function newPostSuccess() {
    return {
        type : NEW_POST_SUCCESS,
    }
}

function newPostError(error) {
    return {
        type : NEW_POST_REQ_ERR,
        error
    }
}

export function createNewPost(sourceImage, caption, tags) {
    return async (dispatch) => {
        dispatch(newPostReqSent());
        await newPostAxios(sourceImage, caption, tags)
        .then (function(response){
            dispatch(newPostSuccess());
            dispatch(requestImages())
        }).catch (function(error) {
            dispatch(newPostError(error.response.data));
        })
    }
}