import requestFollow from '../../axiosRequests/follow/follow';

export const FOLLOW_REQ_SUCCESS = "FOLLOW_REQ_SUCCESS";

function followReqSuccess() {
    return({
        type : FOLLOW_REQ_SUCCESS
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