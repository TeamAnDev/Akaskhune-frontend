import {GETTING_SELF_INFO_SUCCES, GETTING_SELF_INFO_ERR, GETTING_SELF_INFO_STARTED} from '../../actions/userInfo/userInfoRequest'
import {FOLLOW_REQ_SUCCESS, UNFOLLOW_REQ_SUCCESS} from '../../actions/follow/followRequest';
function getSelfInfoReducer(state={loading:false, data:{}, error:"", succes:false}, action)
{
    switch(action.type){
        case(GETTING_SELF_INFO_STARTED):
            return Object.assign({}, state, {loading:true, data : {}});
        case(GETTING_SELF_INFO_ERR):
            return Object.assign({}, state, {error:action.error, loading:false});
        case(GETTING_SELF_INFO_SUCCES):
            return Object.assign({}, state, {data:action.data, succes:true, loading:false});
        case(FOLLOW_REQ_SUCCESS):
            let updatedDataF = Object.assign({}, data);
            if(!action.requested)
                updatedDataF.follower_count = updatedData.follower_count + 1;
            return Object.assign({}, state, {data : updatedDataF});
        case(UNFOLLOW_REQ_SUCCESS):
            let updatedDataU = Object.assign({}, data);
            updatedDataU.follower_count = updatedData.following_count - 1;
            return Object.assign({}, state, {data : updatedDataU});
        default :
            return state;
    }
}

export default getSelfInfoReducer;