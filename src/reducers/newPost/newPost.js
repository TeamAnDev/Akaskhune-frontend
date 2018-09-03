import {combineReducers} from 'redux';
import {cameraReducer} from './cameraReducer';
import {galleryReducer} from './galleryReducer';
import {POST_SET_IMAGE, RESET_POST_SELECTING} from '../../actions/newPost/postActions';
function newPostReducer(state={postImageSource:"", postSelected:false}, action)
{
    switch(action.type)
    {
        case(RESET_POST_SELECTING):
            return Object.assign({}, state, {postImageSource : "", postSelected : false })
        case(POST_SET_IMAGE):
            return Object.assign({}, state, {postImageSource : action.postImageSource, postSelected : true })
        default :
            return state;
    }
}


export default newPostApp = combineReducers({
    cameraReducer, 
    newPostReducer,
    galleryReducer
});