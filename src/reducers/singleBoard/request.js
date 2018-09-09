import {SINGLEBOARD_REQ_SENT, SINGLEBOARD_REQ_SUCCESS, SINGLEBOARD_REQ_ERR, SINGLEBOARD_ID} from '../../actions/board/boardRequest'
import {combineReducers} from 'redux';

function singleBoardRequestReducer(state={loading:false, count:0 , success:false, error:'', images:[], next:'', id:0},action) {
    switch(action.type) {
        case SINGLEBOARD_REQ_SENT :
            return Object.assign({}, state, {loading:true});
        case SINGLEBOARD_REQ_SUCCESS :
            return Object.assign({}, state, {loading:false, count:action.count ,success:true, images:action.images, next:action.next});
        case SINGLEBOARD_REQ_ERR :
            return Object.assign({}, state, {loading:false, success:false, error:action.error});
        case SINGLEBOARD_ID :
            return Object.assign({}, state, {id: action.id})
        default :
            return state;
    }
}

export default singleBoardApp = combineReducers({
    singleBoardRequestReducer
})