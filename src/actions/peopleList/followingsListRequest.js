import followingsListRequest from '../../axiosRequests/peopleList/followingsList';

export const FOLLOWINGS_REQ_SENT = "FOLLOWINGS_REQ_SENT";
export const FOLLOWINGS_REQ_SUCCESS = "FOLLOWINGS_REQ_SUCCESS";
export const FOLLOWINGS_REQ_ERR = "FOLLOWINGS_REQ_ERR";

function followingsReqSent() {
    return ({
        type : FOLLOWINGS_REQ_SENT
    })
}

function followingsReqSuccess(followings) {
    return({
        type : FOLLOWINGS_REQ_SUCCESS,
        followings
    })
}

function followingsReqError(error) {
    return({
        type: FOLLOWINGS_REQ_ERR,
        error
    })
}

export function requestFollowingsList(username) {
    return async (dispatch) => {
        dispatch(followingsReqSent());
        await followingsListRequest(username)
        .then(function(response) {
            dispatch(followingsReqSuccess(response.data.followings));
        }).catch(function(error){
            dispatch(followingsReqError(error));
        })     
    }
}