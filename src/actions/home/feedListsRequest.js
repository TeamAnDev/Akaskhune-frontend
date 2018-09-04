import feedsListAxios from "../../axiosRequests/home/feedsListReqeust";

export const FEED_LISTS_REQ_SENT = "FEED_LISTS_REQ_SENT";
export const FEED_LISTS_REQ_SUCCESS = "FEED_LISTS_REQ_SUCCESS";
export const FEED_LISTS_REQ_ERR = "FEED_LISTS_REQ_ERR";

function feedsListReqSent() {
    return({
        type: FEED_LISTS_REQ_SENT
    });
}

function feedsListReqSuccess(feeds) {
    return({
        type: FEED_LISTS_REQ_SUCCESS,
        feeds
    })
}

function feedsListReqErr(error) {
    return({
        type: FEED_LISTS_REQ_ERR,
        error
    })
}

export function feedsListRequest() {
    return async (dispatch) => {
        dispatch(feedsListReqSent());
        await feedsListAxios()
        .then(function(response){
            dispatch(feedsListReqSuccess(response.data));
        }).catch(function(error){
            dispatch(feedsListReqErr(error.response.data.error));
        })
    }
}


