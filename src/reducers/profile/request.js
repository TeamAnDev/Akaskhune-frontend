import {IMAGES_REQ_SENT, IMAGES_REQ_SUCCESS, IMAGES_REQ_ERROR} from '../../actions/profile/profileRequest';

export function imagesRequestReducer(state={images:[], err:"", loading:false, success:false}, action) {
    switch(action.type) {
        case IMAGES_REQ_SENT :
            return Object.assign({}, state, {loading:true});
        case IMAGES_REQ_SUCCESS :
            return Object.assign({}, state, {images: action.images, loading:false, success:true});
        case IMAGES_REQ_ERROR :
            return Object.assign({}, state, {err: action.error, loading:false});
        default :
            return state;    
    }
}
