import requestFollow from '../../axiosRequests/follow/follow';
import requestUnfollow from '../../axiosRequests/follow/unfollow';
export const FOLLOW_REQ_SUCCESS = "FOLLOW_REQ_SUCCESS";
export const UNFOLLOW_REQ_SUCCESS = "UNFOLLOW_REQ_SUCCESS";

function followReqSuccess() {
    return({
        type : FOLLOW_REQ_SUCCESS
    })
}

function unfollowReqSuccess() {
    return({
        type : UNFOLLOW_REQ_SUCCESS
    })
}

export function followRequest(username) {
    return async (dispatch) => {
        await requestFollow(username)
        .then(function(response){
            dispatch(followReqSuccess());
        }).catch(function(error){
            console.warn(error);
        })
    }
}

export function unfollowRequest(username) {
    return async (dispatch) => {
        await(requestUnfollow(username))
        .then(function(response) {
            dispatch(unfollowReqSuccess);
        }).catch(function(error){
            console.warn(error);
        })
    }
}