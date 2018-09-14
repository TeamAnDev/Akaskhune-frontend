import { TAGPOSTS_REQ_SENT, TAGPOSTS_REQ_SUCCESS, TAGPOSTS_REQ_ERR, TAG_NAME } from "../../actions/tagPosts/tagPostsRequest";
import {combineReducers} from 'redux';

function tagPostsRequestReducer(state={loading:false, success:false, images:[], error:'', next:'', name:''}, action){
    switch(action.type) {
        case TAGPOSTS_REQ_SENT :
            return Object.assign({}, state, {loading:true, images:[]});
        case TAGPOSTS_REQ_SUCCESS :
            return Object.assign({}, state, {loading:false, success:true, images:action.images, next:action.next});
        case TAGPOSTS_REQ_ERR :
            return Object.assign({}, state, {loading:false, success:false, error:action.error});
        case TAG_NAME :
            return Object.assign({}, state, {name: action.tag})
        default :
            return state;
    }
}

export default tagPostsApp = combineReducers({
    tagPostsRequestReducer
})