import {FOLLOW_REQ_SUCCESS} from '../../actions/follow/followRequest';
import {combineReducers} from 'redux';

function followRequestReducer(state={success:false}, action) {
    switch(action.type) {
        case FOLLOW_REQ_SUCCESS :
            return Object.assign({}, state, {success:true});
        default :
            return state;    
    }
}

const followApp = combineReducers({
    followRequestReducer
});

export default followApp;