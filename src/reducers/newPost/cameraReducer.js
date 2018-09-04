import {POST_CAMERA_OPENING_ERR, POST_CAMERA_OPENING_START} from '../../actions/newPost/cameraSelectActions';
export function cameraReducer(state = {error:"", errbool : false}, action)
{
    switch(action.type)
    {
        case(POST_CAMERA_OPENING_START):
            return Object.assign({}, state, {errbool : false, error : ""});
        case(POST_CAMERA_OPENING_ERR):
            return Object.assign({}, state, {error : action.error, errbool : true});
        default : 
            return state;
    }
}

