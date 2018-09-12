import {FOLLOWERS_REQ_SENT, FOLLOWERS_REQ_SUCCESS, FOLLOWERS_REQ_ERR} from '../../actions/peopleList/followersListRequest';
import {combineReducers} from 'redux';

function followersRequestReducer(state={loading:false, followers:[], error:"", success:false}, action) {
    switch(action.type) {
        case FOLLOWERS_REQ_SENT :
            return Object.assign({}, state, {loading:true, success : false, error : "" , followers : []});
        case FOLLOWERS_REQ_SUCCESS :
            return Object.assign({}, state, {loading:false, followers:action.followers, success:true});
        case FOLLOWERS_REQ_ERR :
            return Object.assign({}, state, {loading:false, error:action.error, success:false});
        default :
            return state;            
    }
}

export default followersApp = combineReducers({
    followersRequestReducer
})
