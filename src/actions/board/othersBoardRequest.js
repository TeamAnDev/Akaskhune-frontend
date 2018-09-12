import requestAllBoards from "../../axiosRequests/board/allBoards";
export const ALLBOARDS_OTHER_REQ_SENT = "ALLBOARDS_OTHER_REQ_SENT";
export const ALLBOARDS_OTHER_REQ_SUCCESS = "ALLBOARDS_OTHER_REQ_SUCCESS";
export const ALLBOARDS_OTHER_REQ_ERR = "ALLBOARDS_OTHER_REQ_ERR";
export const ALLBOARDS_OTHER_INIT = "ALLBOARDS_OTHER_INIT";
export function initOthersAllBoards(){
    return {
        type : ALLBOARDS_OTHER_INIT,
    }
}

function othersAllBoardsReqSent() {
    return ({
        type: ALLBOARDS_OTHER_REQ_SENT
    })
}

function othersAllBoardsReqSuccess(count, next, boards) {
    return ({
        type : ALLBOARDS_OTHER_REQ_SUCCESS,
        count,
        next,
        boards
    })
}

function othersAllBoardsReqErr(error) {
    return ({
        type : ALLBOARDS_OTHER_OTHER_REQ_ERR,
        error
    })
}

export function othersAllBoardsRequest(url) {
    return async (dispatch) => {
        if(url !== null)
        {
            dispatch(othersAllBoardsReqSent());
            await requestAllBoards(url)
            .then(function(response){
               
                dispatch(othersAllBoardsReqSuccess(response.data.count, response.data.next, response.data.results));
            }).catch(function(error) {
                
                dispatch(othersAllBoardsReqErr(error.response.data.error));
            })
        }
    }
}
