import { OWNPHOTOS_REQ_SENT, OWNPHOTOS_REQ_SUCCESS, OWNPHOTOS_REQ_ERR } from "../../actions/board/ownPhotos";
import {combineReducers} from 'redux';

function ownPhotosRequestReducer(state={loading:false, success:false, error:'', images:[], next:''}, action) {
    switch(action.type) {
        case OWNPHOTOS_REQ_SENT :
            return Object.assign({}, state, {loading:true});
        case OWNPHOTOS_REQ_SUCCESS : 
            return Object.assign({}, state, {loading:false, success:true, images:action.images, next:action.next});
        case OWNPHOTOS_REQ_ERR :
            return Object.assign({}, state, {loading:false, success:false, error:action.error});
        default : 
            return state;
    }
}

export default ownPhotosApp = combineReducers({
    ownPhotosRequestReducer
})

