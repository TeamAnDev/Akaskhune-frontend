import searchUserRequest from "../../axiosRequests/search/searchUser";
import searchTagRequest from '../../axiosRequests/search/searchTag';

export const SEARCH_USER_REQ_SENT = "SEARCH_USER_REQ_SENT";
export const SEARCH_USER_REQ_SUCCESS = "SEARCH_USER_REQ_SUCCESS";
export const SEARCH_USER_REQ_ERR = "SEARCH_USER_REQ_ERR";
export const SEARCH_TAG_REQ_SENT = "SEARCH_TAG_REQ_SENT";
export const SEARCH_TAG_REQ_SUCCESS = "SEARCH_TAG_REQ_SUCCESS";
export const SEARCH_TAG_REQ_ERR = "SEARCH_TAG_REQ_ERR";


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

function searchTagReqSent() {
    return({
        type : SEARCH_TAG_REQ_SENT
    })
}

function searchTagReqSuccess(tags, next) {
    return({
        type : SEARCH_TAG_REQ_SUCCESS,
        tags,
        next
    })
} 

function searchTagReqErr(error) {
    return({
        type : SEARCH_TAG_REQ_ERR,
        error
    })
}

export function requestSearchUser(keyword) {
    return async (dispatch) => {
        dispatch(searchUserReqSent());
        await searchUserRequest(keyword)
        .then(function(response){
            console.warn(response.data);
            dispatch(searchUserReqSuccess(response.data.results, response.data.next));
        }).catch(function(error){
            dispatch(searchUserReqErr(error.response.data.error));
        })
    }
}

export function requestSearchTag(keyword) {
    return async (dispatch) => {
        dispatch(searchTagReqSent());
        await searchTagRequest(keyword)
        .then(function(response){
            // console.warn(response.data);
            dispatch(searchTagReqSuccess(response.data.results, response.data.next));
        }).catch(function(error){
            dispatch(searchTagReqErr(error.response.data.error));
        })
    }
}

