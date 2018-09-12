import {IMAGES_REQ_SENT,IMAGES_REQ_INIT, IMAGES_REQ_SUCCESS, IMAGES_REQ_ERROR, INFO_REQ_SUCCESS} from '../../actions/profile/profileRequest';
import {rest} from '../../config/urls';
import {IMAGES_OTHERS_REQ_ERROR, IMAGES_OTHERS_REQ_INIT, IMAGES_OTHERS_REQ_SENT, IMAGES_OTHERS_REQ_SUCCESS} from '../../actions/profile/othersImages';
export function imagesRequestReducer(state={images:[], err:"", loading:false, success:false, url:rest.imagesSelf}, action) {
    switch(action.type) {
        case IMAGES_REQ_INIT :
            return Object.assign({}, state, {images : []});
        case IMAGES_REQ_SENT :
            return Object.assign({}, state, {loading:true});
        case IMAGES_REQ_SUCCESS :
            let newImages = state.images.concat(action.images);
            return Object.assign({}, state, {images: newImages, loading:false, success:true, url:action.next});
        case IMAGES_REQ_ERROR :
            return Object.assign({}, state, {err: action.error, loading:false, success:false});
        default :
            return state;    
    }
}

export function infoRequestReducer(state={username:"", fullname:"", bio:"", follower_count:"", following_count:"", avatar:"", posts_count:0, boards_count:0}, action) {
    switch(action.type) {
        case INFO_REQ_SUCCESS :
            return Object.assign({}, state, {username:action.data.username, fullname:action.data.fullname,
                    bio:action.data.bio, follower_count:action.data.follower_count,
                    following_count:action.data.following_count, avatar:action.data.avatar,
                    posts_count:action.data.posts_count, boards_count:action.data.boards_count});
        default :
            return state;         
    }
}

export function othersImagesRequestReducer(state={images:[], err:"", loading:false, success:false, url:""}, action) {
    switch(action.type) {
        case IMAGES_OTHERS_REQ_INIT :
            return Object.assign({}, state, {images : []});
        case IMAGES_OTHERS_REQ_SENT :
            return Object.assign({}, state, {loading:true});
        case IMAGES_OTHERS_REQ_SUCCESS :
            let nImages = state.images.concat(action.images);
            return Object.assign({}, state, {images: nImages, loading:false, success:true, url:action.next});
        case IMAGES_OTHERS_REQ_ERROR :
            return Object.assign({}, state, {err: action.error, loading:false, success:false});
        default :
            return state;    
    }
}