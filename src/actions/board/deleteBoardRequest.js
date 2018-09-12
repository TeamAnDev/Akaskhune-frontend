import requestDeleteBoard from '../../axiosRequests/board/deleteBoard';

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
        })
    }
}