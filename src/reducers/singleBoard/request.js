import {SINGLEBOARD_REQ_SENT, SINGLEBOARD_REQ_SUCCESS, SINGLEBOARD_REQ_ERR, SINGLEBOARD_ID} from '../../actions/board/boardRequest'
import {combineReducers} from 'redux';
import deleteBoardRequestReducer from './deleteBoard';

function singleBoardRequestReducer(state={loading:false, count:{} , success:false, error:'', images:{}, next:'', id:0},action) {
    switch(action.type) {
        case SINGLEBOARD_REQ_SENT :
            return Object.assign({}, state, {loading:true});
        case SINGLEBOARD_REQ_SUCCESS :
            let dictImages = Object.assign({}, state.images);
            dictImages[action.id] = action.images;
            let dictCount = Object.assign({}, state.count);
            dictCount[action.id] = action.count;
            return Object.assign({}, state, {loading:false, count:dictCount ,success:true, images:dictImages, next:action.next});
        case SINGLEBOARD_REQ_ERR :
            return Object.assign({}, state, {loading:false, success:false, error:action.error});
        case SINGLEBOARD_ID :
            return Object.assign({}, state, {id: action.id})
        default :
            return state;
    }
}

export default singleBoardApp = combineReducers({
    singleBoardRequestReducer, deleteBoardRequestReducer
})