import {combineReducers} from 'redux';
import {cameraReducer} from './cameraReducer';
import {galleryReducer} from './galleryReducer';
import {completePostReducer} from './completePostReducer';
import {POST_SET_IMAGE, RESET_POST_SELECTING} from '../../actions/newPost/postActions';
import {NEW_POST_REQ_ERR, NEW_POST_REQUEST_SENT, NEW_POST_SUCCESS} from '../../actions/newPost/requestActions';
function newPostReducer(state={postImageSource:"", postSelected:false, error:"", errbool:false, loading:false, succes:false}, action)
{
    switch(action.type)
    {
        case(RESET_POST_SELECTING):
            return Object.assign({}, state, {postImageSource : "", postSelected : false })
        case(POST_SET_IMAGE):
            return Object.assign({}, state, {postImageSource : action.postImageSource, postSelected : true })
        case(NEW_POST_REQUEST_SENT):
            return Object.assign({}, state, {loading : true, error:"", errbool:false, succes:false});
        case(NEW_POST_REQ_ERR):
            return Object.assign({}, state, {errbool : true, error : action.error, loading:false})
        case(NEW_POST_SUCCESS):
            return Object.assign({}, state, {succes:true, loading:false});
        default :
            return state;
    }
}


export default newPostApp = combineReducers({
    cameraReducer, 
    newPostReducer,
    galleryReducer,
    completePostReducer
});