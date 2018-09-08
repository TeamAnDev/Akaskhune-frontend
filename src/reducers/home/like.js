import {LIKE_REQ_ERR, LIKE_REQ_SENT, LIKE_REQ_SUCCESS} from '../../actions/home/like';

function likeReducer(state={loading : false, success : false, errbool:false, error:""}, action)
{
    switch(action.type)
    {
        case(LIKE_REQ_SENT):
            return Object.assign({}, state, {loading : true, errbool : false, error : "" , success : false});
        case(LIKE_REQ_ERR):
            return Object.assign({}, state, {errbool : true, error : action.error, loading : false});
        case(LIKE_REQ_SUCCESS):
            return Object.assign({}, state, {loading : false, success : true});
        default :
            return state;
    }
}
export default likeReducer;