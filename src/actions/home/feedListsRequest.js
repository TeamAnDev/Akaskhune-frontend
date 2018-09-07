import feedsListAxios from "../../axiosRequests/home/feedsListReqeust";

export const FEED_LISTS_INITIAL = "FEED_LISTS_INITIAL"
export function feedsListInitial()
{
    return({
        type : FEED_LISTS_INITIAL,
    })
}

export const FEED_LISTS_REQ_SENT = "FEED_LISTS_REQ_SENT";
export const FEED_LISTS_REQ_SUCCESS = "FEED_LISTS_REQ_SUCCESS";
export const FEED_LISTS_REQ_ERR = "FEED_LISTS_REQ_ERR";


function feedsListReqSent() {
    return({
        type: FEED_LISTS_REQ_SENT
    });
}

function feedsListReqSuccess(feeds, nextUrl) {
    return({
        type: FEED_LISTS_REQ_SUCCESS,
        feeds,
        nextUrl
    })
}

function feedsListReqErr(error) {
    return({
        type: FEED_LISTS_REQ_ERR,
        error
    })
}

export function feedsListRequest(feedsUrl) {
    return async (dispatch) => {
        if(feedsUrl !== null)
        {
            dispatch(feedsListReqSent());
            await feedsListAxios(feedsUrl)
            .then(function(response){
                dispatch(feedsListReqSuccess(response.data.results, response.data.next));
            }).catch(function(error){
                dispatch(feedsListReqErr(error));
            })
        }
    }
}


