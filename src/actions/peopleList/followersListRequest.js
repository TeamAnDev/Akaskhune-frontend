import followersListRequest from '../../axiosRequests/peopleList/followersList';

export const FOLLOWERS_REQ_SENT = "FOLLOWERS_REQ_SENT";
export const FOLLOWERS_REQ_SUCCESS = "FOLLOWERS_REQ_SUCCESS";
export const FOLLOWERS_REQ_ERR = "FOLLOWERS_REQ_ERR";

function followersReqSent() {
    return ({
        type : FOLLOWERS_REQ_SENT
    })
}

function followersReqSuccess(followers) {
    return({
        type : FOLLOWERS_REQ_SUCCESS,
        followers
    })
}

function followersReqError(error) {
    return({
        type: FOLLOWERS_REQ_ERR,
        error
    })
}

export function requestFollowersList(username) {
    return async (dispatch) => {
        dispatch(followersReqSent());
        await followersListRequest(username)
        .then(function(response) {
            dispatch(followersReqSuccess(response.data.followers));
        }).catch(function(error){
            console.warn(error);
            dispatch(followersReqError(error));
        })     
    }
}