import {GETTING_SELF_INFO_SUCCES, GETTING_SELF_INFO_ERR, GETTING_SELF_INFO_STARTED} from '../../actions/userInfo/userInfoRequest'

function getSelfInfoReducer(state={loading:false, data:{}, error:"", succes:false}, action)
{
    switch(action.type){
        case(GETTING_SELF_INFO_STARTED):
            return Object.assign({}, state, {loading:true, data : {}});
        case(GETTING_SELF_INFO_ERR):
            return Object.assign({}, state, {error:action.error, loading:false});
        case(GETTING_SELF_INFO_SUCCES):
            return Object.assign({}, state, {data:action.data, succes:true, loading:false});
        default :
            return state;
    }
}

export default getSelfInfoReducer;