import {CONTACTS_REQ_SENT, CONTACTS_REQ_ERR, CONTACTS_REQ_SUCCESS} from '../../actions/inviteFriends/inviteFriendsRequest';

function contactsRequestReducer(state={contacts:[], loading:false, err:"", success:false}, action) {
    switch(action.type) {
        case CONTACTS_REQ_SENT:
            return Object.assign({}, state, {success:false, loading:true});
        case CONTACTS_REQ_SUCCESS:
            return Object.assign({}, state, {success:true ,contacts:action.contacts, loading:false});
        case CONTACTS_REQ_ERR:
            return Object.assign({}, state, {success:false ,err:action.error, loading:false});
        default:
            return state;
    }
}

export default contactsRequestReducer;