import {INVITE_CONTACT_SUCCESS} from '../../actions/inviteFriends/inviteFriendsRequest';

function inviteContactRequestReducer(state={inviteSuccess : false}, action) {
    switch(action.type) {
        case INVITE_CONTACT_SUCCESS :
            return Object.assign({}, state, {inviteSuccess : true});
        default :
            return state;    
    } 
}

export default inviteContactRequestReducer;