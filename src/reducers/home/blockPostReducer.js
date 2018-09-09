import {BLOCK_POST_REQ_ERR, BLOCK_POST_REQ_SENT, BLOCK_POST_REQ_SUCCESS} from '../../actions/home/blockPost';
function blockPostReducer(state= {loading : false, error : "", errbool : false, success : false}, action)
{
    switch(action.type)
    {
        case(BLOCK_POST_REQ_SENT):
            return  Object.assign({}, state, {loading:true, errbool:false, success:false});
        case(BLOCK_POST_REQ_ERR):
            return Object.assign({}, state, {loading:false, errbool:true, error : action.error});
        case(BLOCK_POST_REQ_SENT):
            return Object.assign({}, state, {loading:false, success:true})
        default :
            return state
    }
}

export default blockPostReducer;