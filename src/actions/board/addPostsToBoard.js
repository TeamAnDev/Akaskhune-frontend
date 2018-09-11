import addPostsToBoardAxios from '../../axiosRequests/board/addPosts';

export const ADD_POSTS_TO_BOARD_REQ_SENT = "ADD_POSTS_TO_BOARD_REQ_SENT";
export const ADD_POSTS_TO_BOARD_REQ_SUCCESS = "ADD_POSTS_TO_BOARD_REQ_SUCCESS";
export const ADD_POSTS_TO_BOARD_REQ_ERR = "ADD_POSTS_TO_BOARD_REQ_ERR";
export const EMPTY_OWN_POSTS = "EMPTY_OWN_POSTS";
export const SELECT_OWN_POST = "SELECT_OWN_POST";
export const DESELECT_OWN_POST = "DESELECT_OWN_POST";

function addPostToBoardReqSent() {
    return ({
        type: ADD_POSTS_TO_BOARD_REQ_SENT
    })
}

function addPostToBoardReqSuccess() {
    return ({
        type : ADD_POSTS_TO_BOARD_REQ_SUCCESS,
    })
}

function addPostToBoardReqErr(error) {
    return ({
        type : ADD_POSTS_TO_BOARD_REQ_ERR,
        error
    })
}

export function emptyOwnPosts() {
    return({
        type : EMPTY_OWN_POSTS
    })
}

export function selectOwnPost(id) {
    return({
        type : SELECT_OWN_POST,
        id
    })
}

export function deselectOwnPost(id) {
    return({
        type : DESELECT_OWN_POST,
        id
    })
}

export function addPostsToBoardRequest(name, boardId) {
    return async (dispatch) => {
        dispatch(addPostToBoardReqSent());
        await addPostsToBoardAxios(name, boardId)
        .then(function(response){
            dispatch(addPostToBoardReqSuccess());
        }).catch(function(error) {
            dispatch(addPostToBoardReqErr(error.response.data.error));
        })
    }
}