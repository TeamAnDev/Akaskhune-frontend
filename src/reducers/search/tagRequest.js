import {SEARCH_TAG_REQ_SENT, SEARCH_TAG_REQ_SUCCESS, SEARCH_TAG_REQ_ERR} from "../../actions/search/searchRequest";

export function searchTagRequestReducer(state={tags:[], next:'', loading:false, success:false, error:''}, action) {
    switch(action.type) {
        case SEARCH_TAG_REQ_SENT :
            return Object.assign({}, state, {loading : true});
        case SEARCH_TAG_REQ_SUCCESS :
            return Object.assign({}, state, {loading:false, success:true, tags:action.tags, next:action.next});
        case SEARCH_TAG_REQ_ERR :
            return Object.assign({}, state, {loading:false, success:false, error:action.error});
        default :
            return state;        
    }
}