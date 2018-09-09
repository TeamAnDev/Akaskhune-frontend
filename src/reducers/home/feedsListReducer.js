import {FEED_LISTS_REQ_ERR, FEED_LISTS_REQ_SENT, FEED_LISTS_REQ_SUCCESS, FEED_LISTS_INITIAL, DELETE_USER_POST_FROM_FEEDS} from '../../actions/home/feedListsRequest';
import {ADD_COMMENT_TO_STATE_FEEDS} from '../../actions/home/comments';
import {DELETE_BLOCK_POST_FROM_FEED} from '../../actions/home/blockPost';
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
        case(ADD_COMMENT_TO_STATE_FEEDS):
            if(action.index !== undefined)
            {
                let nFeeds = [].concat(state.feeds);
                nFeeds[action.index].comments_count  = nFeeds[action.index].comments_count + 1;
                return Object.assign({}, state, {feeds:nFeeds});
            }
            return state;
        case(DELETE_USER_POST_FROM_FEEDS):
            let withDeletedFeeds = [];
            for(let i = 0, size = state.feeds.length; i < size ; i++){
                let feed = state.feeds[i];
                if(feed.username !== action.username)
                {
                    withDeletedFeeds.push(feed)
                }
            }
            return Object.assign({}, state, {feeds : withDeletedFeeds});
        case(DELETE_BLOCK_POST_FROM_FEED):
            let withDeletedFeed = [];
            for(let i = 0, size = state.feeds.length; i < size ; i++){
                let feed = state.feeds[i];
                if(feed.id !== action.postId)
                {
                    withDeletedFeed.push(feed)
                }
            }
            return Object.assign({}, state, {feeds : withDeletedFeed});
        default:
            return state;
    }
}
export default feedsListReducer;