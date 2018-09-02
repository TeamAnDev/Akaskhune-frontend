import {combineReducers} from 'redux';
import {cameraReducer} from './cameraReducer';
import {POST_SET_IMAGE} from '../../actions/newPost/postActions';
function newPostReducer(state={postImageSource:"", postSelected:false}, action)
{
    switch(action.type)
    {
        case(POST_SET_IMAGE):
            return Object.assign({}, state, {postImageSource : action.postImageSource, postSelected : true })
        default :
            return state;
    }
}


export default newPostApp = combineReducers({
    cameraReducer, 
    newPostReducer
});