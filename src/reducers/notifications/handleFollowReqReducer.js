import {HANDLE_FOLLOW_REQ_ERROR, 
    HANDLE_FOLLOW_REQ_SENT, 
    HANDLE_FOLLOW_REQ_SUCCESS} from '../../actions/notifications/handleFollowReq';

function handleFollowReqReducer(
    state = {loading : false, success : false, errbool : false, error : ""} 
    , action){
    switch(action.type){
        case(HANDLE_FOLLOW_REQ_SENT):
            return Object.assign({}, state,  {loading : true, success : false, errbool : false, error : false});
        case(HANDLE_FOLLOW_REQ_ERROR):
            return Object.assign({}, state, {loading : false, errbool : true, error : action.error});
        case(HANDLE_FOLLOW_REQ_SUCCESS):
            return Object.assign({}, state, {loading : false , success : true});
        default : 
            return state;
    } 
}
export default handleFollowReqReducer;