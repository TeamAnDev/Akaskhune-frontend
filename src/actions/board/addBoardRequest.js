import addBoardAxios from '../../axiosRequests/board/addBoard';
import {addPostsToBoardRequest} from './addPostsToBoard';
export const ADD_BOARD_REQ_SENT = "ADD_BOARD_REQ_SENT";
export const ADD_BOARD_REQ_SUCCESS = "ADD_BOARD_REQ_SUCCESS";
export const ADD_BOARD_REQ_ERR = "ADD_BOARD_REQ_ERR";


function addBoardReqSent() {
    return ({
        type: ADD_BOARD_REQ_SENT
    })
}

function addBoardReqSuccess(board) {
    return ({
        type : ADD_BOARD_REQ_SUCCESS,
        board
    })
}

function addBoardReqErr(error) {
    return ({
        type : ADD_BOARD_REQ_ERR,
        error
    })
}

export function addBoardRequest(name, postId) {
    return async (dispatch) => {
        dispatch(addBoardReqSent());
        await addBoardAxios(name)
        .then(function(response){
            dispatch(addBoardReqSuccess(response.data));
            posts = [postId];
            dispatch(addPostsToBoardRequest(posts, response.data.id));
        }).catch(function(error) {
            dispatch(addBoardReqErr(error.response.data.error));
        })
    }
}