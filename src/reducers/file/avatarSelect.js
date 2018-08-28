import {PP_AVATAR_SOURCE_SELECTED, PP_ERROR, PHOTO_PICKER_PEPARE} from '../../actions/file/AvatarSelect';
function avatarSelectReducer(state={avatarSource:"", error:""}, action)
{
    switch(action.type){
        case(PHOTO_PICKER_PEPARE):
            return ({avatarSource:"", error:""});
        case(PP_AVATAR_SOURCE_SELECTED):
            return Object.assign({}, state,{avatarSource:action.avatarSource});
        case(PP_ERROR):
            return Object.assign({}, state,{error:action.error});
        default :
            return state;
    }
}
export default avatarSelectReducer;


