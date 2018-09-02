import {CHANGE_FILTER_CONTACTS} from '../../actions/inviteFriends/inviteFriendsAction';
import {combineReducers} from 'redux';

function changeFilterReducer(state={filter:""}, action) {
    switch(action.type) {
        case CHANGE_FILTER_CONTACTS:
            return Object.assign({}, state, {filter: action.filter});
        default :
            return state;
    }
}

const inviteFriendsApp = combineReducers({
    changeFilterReducer
});

export default inviteFriendsApp;

