import {IMAGES_REQ_SENT, IMAGES_REQ_SUCCESS, IMAGES_REQ_ERROR, INFO_REQ_SUCCESS} from '../../actions/profile/profileRequest';

export function imagesRequestReducer(state={images:[], err:"", loading:false, success:false}, action) {
    switch(action.type) {
        case IMAGES_REQ_SENT :
            return Object.assign({}, state, {loading:true});
        case IMAGES_REQ_SUCCESS :
            return Object.assign({}, state, {images: action.images, loading:false, success:true});
        case IMAGES_REQ_ERROR :
            return Object.assign({}, state, {err: action.error, loading:false, success:false});
        default :
            return state;    
    }
}

export function infoRequestReducer(state={username:"", fullname:"", bio:"", follower_count:"", following_count:"", avatar:""}, action) {
    switch(action.type) {
        case INFO_REQ_SUCCESS :
            return Object.assign({}, state, {username:action.data.username, fullname:action.data.fullname,
                 bio:action.data.bio, follower_count:action.data.follower_count,
                  following_count:action.data.following_count, avatar:action.data.avatar});
        default :
            return state;         
    }
}