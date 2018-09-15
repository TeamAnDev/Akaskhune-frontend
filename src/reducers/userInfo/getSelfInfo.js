import {GETTING_SELF_INFO_SUCCES, GETTING_SELF_INIT, GETTING_SELF_INFO_ERR, GETTING_SELF_INFO_STARTED} from '../../actions/userInfo/userInfoRequest'
import {FOLLOW_REQ_SUCCESS, UNFOLLOW_REQ_SUCCESS} from '../../actions/follow/followRequest';
import {DELETE_BOARD_REQ_SUCCESS} from '../../actions/board/deleteBoardRequest';
function getSelfInfoReducer(state={loading:false, data:{}, error:"", succes:false}, action)
{
    switch(action.type){
        case(GETTING_SELF_INIT):
            return Object.assign({}, state, {data : {}})
        case(GETTING_SELF_INFO_STARTED):
            return Object.assign({}, state, {loading:true});
        case(GETTING_SELF_INFO_ERR):
            return Object.assign({}, state, {error:action.error, loading:false});
        case(GETTING_SELF_INFO_SUCCES):
            return Object.assign({}, state, {data:action.data, succes:true, loading:false});
        case(FOLLOW_REQ_SUCCESS):
            let updatedDataF = Object.assign({}, state.data);
            if(!action.requested)
                updatedDataF.follower_count = updatedData.follower_count + 1;
            return Object.assign({}, state, {data : updatedDataF});
        case(UNFOLLOW_REQ_SUCCESS):
            let updatedDataU = Object.assign({}, state.data);
            updatedDataU.follower_count = updatedData.following_count - 1;
            return Object.assign({}, state, {data : updatedDataU});
        case(DELETE_BOARD_REQ_SUCCESS) :
            let updatedDataBoard = Object.assign({}, state.data);
            updatedDataBoard.boards_count = updatedDataBoard.boards_count - 1;
            console.warn("wtf", updatedDataBoard);
            return Object.assign({}, state, {data : updatedDataBoard});
        default :
            return state;
    }
}

export default getSelfInfoReducer;