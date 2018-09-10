import serachUserRequest from "../../axiosRequests/search/searchUser";

export const SEARCH_USER_REQ_SENT = "SEARCH_USER_REQ_SENT";
export const SEARCH_USER_REQ_SUCCESS = "SEARCH_USER_REQ_SUCCESS";
export const SEARCH_USER_REQ_ERR = "SEARCH_USER_REQ_ERR";

function searchUserReqSent() {
    return({
        type : SEARCH_USER_REQ_SENT
    })
}

function searchUserReqSuccess(users, next) {
    return({
        type : SEARCH_USER_REQ_SUCCESS,
        users,
        next
    })
} 

function searchUserReqErr(error) {
    return({
        type : SEARCH_USER_REQ_ERR,
        error
    })
}

export function requestSearchUser(keyword) {
    return async (dispatch) => {
        dispatch(searchUserReqSent());
        await serachUserRequest(keyword)
        .then(function(response){
            console.warn(response.data);
            dispatch(searchUserReqSuccess(response.data.results, response.data.next));
        }).catch(function(error){
            dispatch(searchUserReqErr(error.response.data.error));
        })
    }
}

