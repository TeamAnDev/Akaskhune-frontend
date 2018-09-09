import {ALLBOARDS_REQ_SENT, ALLBOARDS_REQ_SUCCESS, ALLBOARDS_REQ_ERR} from "../../actions/board/boardRequest";
import {combineReducers} from 'redux';

function allBoardsRequestReducer(state={loading:false, success:false, error:'',count:0 , boards:[], next:''},action) {
    switch(action.type) {
        case ALLBOARDS_REQ_SENT :
            return Object.assign({}, state, {loading:true});
        case ALLBOARDS_REQ_SUCCESS :
            return Object.assign({}, state, {loading:false, success:true, count:action.count, boards:action.boards, next:action.next});
        case ALLBOARDS_REQ_ERR :
            return Object.assign({}, state, {loading:false, success:false, error:action.error});
        default :
            return state;
    }
}

export default boardsApp = combineReducers({
    allBoardsRequestReducer
})