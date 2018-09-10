import {ALLBOARDS_REQ_SENT, ALLBOARDS_INIT, ALLBOARDS_REQ_SUCCESS, ALLBOARDS_REQ_ERR} from "../../actions/board/boardRequest";
import {combineReducers} from 'redux';
import { rest } from "../../config/urls";
import addPostsToBoardReducer from './addPostsToBoard';
import addBoardReducer from './addBoards';

function allBoardsRequestReducer(state={loading:false, success:false, error:'',count:0 , boards:[], next:''},action) {
    switch(action.type) {
        case ALLBOARDS_INIT :
            return Object.assign({}, state, {boards : [], next : rest.allBoards});
        case ALLBOARDS_REQ_SENT :
            return Object.assign({}, state, {loading:true, error : '', success : false});
        case ALLBOARDS_REQ_SUCCESS :
            let newBoards = state.boards.concat(action.boards)
            return Object.assign({}, state, {loading:false, success:true, count:action.count, boards:newBoards, next:action.next});
        case ALLBOARDS_REQ_ERR :
            return Object.assign({}, state, {loading:false, success:false, error:action.error});
        default :
            return state;
    }
}

export default boardsApp = combineReducers({
    allBoardsRequestReducer,
    addPostsToBoardReducer, 
    addBoardReducer
})