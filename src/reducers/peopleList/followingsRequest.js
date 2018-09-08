import {FOLLOWINGS_REQ_SENT,FOLLOWINGS_REQ_SUCCESS, FOLLOWINGS_REQ_ERR} from '../../actions/peopleList/followingsListRequest';
import {combineReducers} from 'redux';

function followingsRequestReducer(state={loading:false, followings:[], error:"", success:false}, action) {
    switch(action.type) {
        case FOLLOWINGS_REQ_SENT :
            return Object.assign({}, state, {loading:true});
        case FOLLOWINGS_REQ_SUCCESS :
            return Object.assign({}, state, {loading:false, followings:action.followings, success:true});
        case FOLLOWINGS_REQ_ERR :
            return Object.assign({}, state, {loading:false, error:action.error,success:false});
        default :
            return state;            
    }
}

export default followingsApp = combineReducers({
    followingsRequestReducer
})
