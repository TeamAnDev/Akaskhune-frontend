import { POPULARTAGS_REQ_SENT, POPULARTAGS_REQ_SUCCESS, POPULARTAGS_REQ_ERR } from "../../actions/search/popularTagsRequest";
import { combineReducers } from 'redux';

function popularTagsRequestReducer(state={loading:false, success:false, error:'', tags:[], next:''}, action) {
    switch(action.type) {
        case POPULARTAGS_REQ_SENT :
            return Object.assign({}, state, {loading:true});
        case POPULARTAGS_REQ_SUCCESS :
            return Object.assign({}, state, {loading:false, success:true, tags:action.tags, next:action.next});
        case POPULARTAGS_REQ_ERR :
            return Object.assign({}, state, {loading:false, success:false, error:action.error});
        default :
            return state;
    }
}

export default popularTagsApp = combineReducers({
    popularTagsRequestReducer
})
