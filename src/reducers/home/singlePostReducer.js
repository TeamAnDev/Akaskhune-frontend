import {SINGLE_POST_REQ_ERR, SINGLE_POST_REQ_SENT, SINGLE_POST_REQ_SUCCESS} from '../../actions/home/singlePostRequest';
import { rest } from '../../config/urls';

function singlePostReducer(state={success:false, error:"", errbool:false, loading:false, post : {}}, action)
{
    switch(action.type)
    {
       
        case(SINGLE_POST_REQ_SENT):
            return Object.assign({}, state, {loading:true, success:false, errbool:false, error:""})
        case(SINGLE_POST_REQ_ERR):
            return Object.assign({}, state, {loading:false, errbool:true, error:action.error});
        case(SINGLE_POST_REQ_SUCCESS):
            return Object.assign({}, state, {loading:false, success:true, post : action.post});
        default:
            return state;
    }
}
export default singlePostReducer;