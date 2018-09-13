import {SEARCH_USER_REQ_SENT, SEARCH_USER_REQ_SUCCESS, SEARCH_USER_REQ_ERR, INIT_SEARCH_USER} from "../../actions/search/searchRequest";
import {combineReducers} from 'redux';
import {changeKeywordReducer} from './search'
import {searchTagRequestReducer} from './tagRequest'

function searchUserRequestReducer(state={users:[], next:'', loading:false, success:false, error:''}, action) {
    switch(action.type) {
        case SEARCH_USER_REQ_SENT :
            return Object.assign({}, state, {loading : true});
        case SEARCH_USER_REQ_SUCCESS :
            return Object.assign({}, state, {loading:false, success:true, users:action.users, next:action.next});
        case SEARCH_USER_REQ_ERR :
            return Object.assign({}, state, {loading:false, success:false, error:action.error});
        case INIT_SEARCH_USER :
            let initUsers = [];
            return Object.assign({}, state, {users : initUsers});
        default :
            return state;        
    }
}

export default searchUserApp = combineReducers({
    searchUserRequestReducer, changeKeywordReducer, searchTagRequestReducer
})