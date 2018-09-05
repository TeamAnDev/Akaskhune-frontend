import {FEED_LISTS_REQ_ERR, FEED_LISTS_REQ_SENT, FEED_LISTS_REQ_SUCCESS, FEED_LISTS_INITIAL} from '../../actions/home/feedListsRequest';
import { rest } from '../../config/urls';

function feedsListReducer(state={success:false, error:"", errbool:false, loading:false, feeds:[],
                                url:rest.feeds, endLoading : false}, action)
{
    switch(action.type)
    {
        case(FEED_LISTS_INITIAL):
            return Object.assign({}, state, {feeds : [], url:rest.feeds});
        case(FEED_LISTS_REQ_SENT):
            let loading = false;
            let endLoading = false;
            if(state.url === rest.feeds)
                loading = true;
            else
                endLoading = true;
            return Object.assign({}, state, {loading, endLoading, success:false, errbool:false, error:""})
        case(FEED_LISTS_REQ_ERR):
            return Object.assign({}, state, {loading:false, endLoading:false, errbool:true, error:action.error});
        case(FEED_LISTS_REQ_SUCCESS):
            let newFeeds = state.feeds.concat(action.feeds);
            return Object.assign({}, state, {loading:false, endLoading:false, success:true, feeds : newFeeds, url : action.nextUrl});
        default:
            return state;
    }
}
export default feedsListReducer;