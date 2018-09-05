import {FOLLOW_REQ_SUCCESS, UNFOLLOW_REQ_SUCCESS} from '../../actions/follow/followRequest';
import {combineReducers} from 'redux';

function followRequestReducer(state={followSuccess:false}, action) {
    switch(action.type) {
        case FOLLOW_REQ_SUCCESS :
            return Object.assign({}, state, {success:true});
        default :
            return state;    
    }
}

function unfollowRequestReducer(state={unfollowSuccess:false}, action) {
    switch(action.type) {
        case UNFOLLOW_REQ_SUCCESS :
            return Object.assign({}, state, {unfollowSuccess:true});
        default :
            return state;    
    }
}

const followApp = combineReducers({
    followRequestReducer, unfollowRequestReducer
});

export default followApp;