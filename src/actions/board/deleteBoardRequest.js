import requestDeleteBoard from '../../axiosRequests/board/deleteBoard';
import {allBoardsRequest, initAllBoards} from './boardRequest';
import {rest} from '../../config/urls';
export const DELETE_BOARD_REQ_SUCCESS = "DELETE_BOARD_REQ_SUCCESS";

function deleteBoardReqSuccess() {
    return({
        type : DELETE_BOARD_REQ_SUCCESS
    })
}

export function deleteBoardRequest(id) {
    return async (dispatch) => {
        await requestDeleteBoard(id)
        .then(function(response){
            dispatch(deleteBoardReqSuccess());
            dispatch(initAllBoards());
            dispatch(allBoardsRequest(rest.allBoards));
        })
    }
}