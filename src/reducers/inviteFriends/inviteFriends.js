import {CHANGE_FILTER_CONTACTS} from '../../actions/inviteFriends/inviteFriendsAction';
import contactsRequestReducer from './request'
import {combineReducers} from 'redux';
import inviteContactRequestReducer from './inviteContact';

function changeFilterReducer(state={filter:""}, action) {
    switch(action.type) {
        case CHANGE_FILTER_CONTACTS:
            return Object.assign({}, state, {filter: action.filter});
        default :
            return state;
    }
}

const inviteFriendsApp = combineReducers({
    changeFilterReducer, contactsRequestReducer, inviteContactRequestReducer
});

export default inviteFriendsApp;

