import {EP_AVATAR_SOURCE_SELECTED, EP_ERROR} from '../../actions/userInfo/avatarSelect'
function avatarSelectReducer(state={avatarSource:"", error:""}, action)
{
    switch(action.type){
        case(EP_AVATAR_SOURCE_SELECTED):
            return Object.assign({}, state, {avatarSource:action.avatarSource})
        case(EP_ERROR):
            return Object.assign({}, state, {error:action.error})
        default :
            return state;
    }
}

export default avatarSelectReducer;