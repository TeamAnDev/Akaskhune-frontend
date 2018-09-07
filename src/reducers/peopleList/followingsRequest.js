import {FOLLOWINGS_REQ_SENT,FOLLOWINGS_REQ_SUCCESS,FOLLOWERS_REQ_ERR, FOLLOWINGS_REQ_ERR} from '../../actions/peopleList/followingsListRequest';
import {combineReducers} from 'redux';

function followingsRequestReducer(state={loading:false, followings:[], error:""}, action) {
    switch(action.type) {
        case FOLLOWINGS_REQ_SENT :
            return Object.assign({}, state, {loading:true});
        case FOLLOWINGS_REQ_SUCCESS :
            return Object.assign({}, state, {loading:false, followings:action.followings});
        case FOLLOWINGS_REQ_ERR :
            return Object.assign({}, state, {loading:false, error:action.error});
        default :
            return state;            
    }
}

export default followingsApp = combineReducers({
    followingsRequestReducer
})
