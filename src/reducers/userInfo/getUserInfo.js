import {GETTING_USER_INFO_ERR,
        GETTING_USER_INFO_STARTED,
        GETTING_USER_INFO_SUCCES} from '../../actions/userInfo/userInfoRequest'


function getUserInfoReducer(state={loading:false, data:{}, error:"", succes:false}, action)
{
    switch(action.type){
        case(GETTING_USER_INFO_STARTED):
            let userInit = Object.assign({}, state.data);
            userInit[action.username] = {};
            return Object.assign({}, state, {loading:true, data : userInit});
        case(GETTING_USER_INFO_ERR):
            return Object.assign({}, state, {error:action.error, loading:false});
        case(GETTING_USER_INFO_SUCCES):
            let userInfoSuccess = Object.assign({}, state.data);
            userInfoSuccess[action.username] = action.data ;
            return Object.assign({}, state, {data:userInfoSuccess, succes:true, loading:false});
        default :
            return state;
    }
}
export default getUserInfoReducer;
