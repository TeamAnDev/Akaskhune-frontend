import requestAllBoards from "../../axiosRequests/board/allBoards";
import requestSingleBoard from '../../axiosRequests/board/singleBoard';
export const ALLBOARDS_REQ_SENT = "ALLBOARDS_REQ_SENT";
export const ALLBOARDS_REQ_SUCCESS = "ALLBOARDS_REQ_SUCCESS";
export const ALLBOARDS_REQ_ERR = "ALLBOARDS_REQ_ERR";
export const SINGLEBOARD_REQ_SENT = "SINGLEBOARD_REQ_SENT";
export const SINGLEBOARD_REQ_SUCCESS = "SINGLEBOARD_REQ_SUCCESS";
export const SINGLEBOARD_ID = "SINGLEBOARD_ID";
export const ALLBOARDS_INIT = "ALLBOARDS_INIT";

export function initAllBoards(){
    return {
        type : ALLBOARDS_INIT,
    }
}

function allBoardsReqSent() {
    return ({
        type: ALLBOARDS_REQ_SENT
    })
}

function allBoardsReqSuccess(count, next, boards) {
    return ({
        type : ALLBOARDS_REQ_SUCCESS,
        count,
        next,
        boards
    })
}

function allBoardsReqErr(error) {
    return ({
        type : ALLBOARDS_REQ_ERR,
        error
    })
}

function singleBoardReqSent() {
    return({
        type : SINGLEBOARD_REQ_SENT
    })
}

function singleBoardReqSuccess(id ,count, images, next, name) {
    return({
        type : SINGLEBOARD_REQ_SUCCESS,
        id,
        count,
        images,
        next,
        name
    })
} 

function singleBoardReqErr(error) {
    return({
        type : SINGLEBOARD_REQ_ERR,
        error
    })
}

export function singleBoardId(id) {
    return({
        type : SINGLEBOARD_ID,
        id
    })
}

export function allBoardsRequest(url) {
    return async (dispatch) => {
        if(url !== null)
        {
            dispatch(allBoardsReqSent());
            await requestAllBoards(url)
            .then(function(response){
                console.warn("ok" , response.data)
                dispatch(allBoardsReqSuccess(response.data.count, response.data.next, response.data.results));
            }).catch(function(error) {
                dispatch(allBoardsReqErr(error.response.data.error));
            })
        }
    }
}

export function singleBoardRequest(id) {
    return async (dispatch) => {
        dispatch(singleBoardReqSent());
        await requestSingleBoard(id)
        .then(function(response){
            dispatch(singleBoardReqSuccess(id, response.data.count, response.data.results, response.data.next, response.data.name));
        }).catch(function(error){
            dispatch(singleBoardReqErr(error.response.data.error));
        })
    }
}