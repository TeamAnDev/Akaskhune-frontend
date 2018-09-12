import {GETTING_USER_INFO_ERR,
        GETTING_USER_INFO_STARTED,
        GETTING_USER_INFO_SUCCES} from '../../actions/userInfo/userInfoRequest'


function getUserInfoReducer(state={loading:false, data:{}, error:"", succes:false}, action)
{
    switch(action.type){
        case(GETTING_USER_INFO_STARTED):
            return Object.assign({}, state, {loading:true, data : {}});
        case(GETTING_USER_INFO_ERR):
            return Object.assign({}, state, {error:action.error, loading:false});
        case(GETTING_USER_INFO_SUCCES):
            return Object.assign({}, state, {data:action.data, succes:true, loading:false});
        default :
            return state;
    }
}
export default getUserInfoReducer;
