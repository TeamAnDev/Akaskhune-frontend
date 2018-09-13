import requestFollow from '../../axiosRequests/follow/follow';
import requestUnfollow from '../../axiosRequests/follow/unfollow';
export const FOLLOW_REQ_SUCCESS = "FOLLOW_REQ_SUCCESS";
export const UNFOLLOW_REQ_SUCCESS = "UNFOLLOW_REQ_SUCCESS";

function followReqSuccess(requested) {
    return({
        type : FOLLOW_REQ_SUCCESS,
        requested
    })
}

function unfollowReqSuccess(requested) {
    return({
        type : UNFOLLOW_REQ_SUCCESS,
        requested
    })
}

export function followRequest(username) {
    return async (dispatch) => {
        await requestFollow(username)
        .then(function(response){
            dispatch(followReqSuccess(response.data.is_requested));
        }).catch(function(error){
            console.warn(error);
        })
    }
}

export function unfollowRequest(username) {
    return async (dispatch) => {
        await(requestUnfollow(username))
        .then(function(response) {
            dispatch(unfollowReqSuccess(response.data.is_requested));
        }).catch(function(error){
            console.warn(error);
        })
    }
}