import {FEED_LISTS_REQ_ERR, FEED_LISTS_REQ_SENT, FEED_LISTS_REQ_SUCCESS} from '../../actions/home/feedListsRequest';

function feedsListReducer(state={success:false, error:"", errbool:false, loading:false, feeds:[]}, action)
{
    switch(action.type)
    {
        case(FEED_LISTS_REQ_SENT):
            return Object.assign({}, state, {loading:true, success:false, errbool:false, error:""})
        case(FEED_LISTS_REQ_ERR):
            return Object.assign({}, state, {loading:false, errbool:true, error:action.error});
        case(FEED_LISTS_REQ_SUCCESS):
            return Object.assign({}, state, {loading:false, success:true, feeds : action.feeds});
        default:
            return state;
    }
}
export default feedsListReducer;