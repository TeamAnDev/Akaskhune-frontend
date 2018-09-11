import addPostsToBoardAxios from '../../axiosRequests/board/addPosts';

export const ADD_POSTS_TO_BOARD_REQ_SENT = "ADD_POSTS_TO_BOARD_REQ_SENT";
export const ADD_POSTS_TO_BOARD_REQ_SUCCESS = "ADD_POSTS_TO_BOARD_REQ_SUCCESS";
export const ADD_POSTS_TO_BOARD_REQ_ERR = "ADD_POSTS_TO_BOARD_REQ_ERR";


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

export function addPostsToBoardRequest(posts, boardId) {
    return async (dispatch) => {
        dispatch(addPostToBoardReqSent());
        await addPostsToBoardAxios(posts, boardId)
        .then(function(response){
            dispatch(addPostToBoardReqSuccess());
        }).catch(function(error) {
            dispatch(addPostToBoardReqErr(error.response.data.error));
        })
    }
}