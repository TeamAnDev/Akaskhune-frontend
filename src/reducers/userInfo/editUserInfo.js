import {SETTING_SELF_INFO_SUCCES, SETTING_SELF_INFO_ERR, SETTING_SELF_INFO_STARTED} from '../../actions/userInfo/editUserInfoRequest'
import {SETTING_PREV_USER_INFO} from '../../actions/userInfo/editUserInfoRequest'
import {BIO_CHANGED, FULLNAME_CHANGED} from '../../actions/userInfo/editUserInfoRequest';
function editUserInfoReducer(
    state={loading:false, bio : "", fullname : "", error : "", errbool:false, succes : false}, action)
{
    switch(action.type){
        case(SETTING_PREV_USER_INFO):
            return Object.assign({}, state, {bio:action.bio, fullname:action.fullname});
        case(BIO_CHANGED):
            return Object.assign({}, state, {bio:action.bio});
        case(FULLNAME_CHANGED):
            return Object.assign({}, state, {fullname : action.fullname});
        case(SETTING_SELF_INFO_STARTED):
            return Object.assign({}, state, {loading:true, errbool:false, succes:false});
        case(SETTING_SELF_INFO_ERR):
            return Object.assign({}, state, {error:action.error, errbool:true, loading:false});
        case(SETTING_SELF_INFO_SUCCES):
            return Object.assign({}, state, {succes:true, loading:false});
        default :
            return state;
    }
}

export default editUserInfoReducer;