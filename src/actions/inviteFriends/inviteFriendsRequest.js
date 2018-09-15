import requestConacts from '../../axiosRequests/inviteFriends/inviteFriends';
import requestInvite from '../../axiosRequests/inviteFriends/invite';
export const CONTACTS_REQ_SENT = "CONTACTS_REQ_SENT";
export const CONTACTS_REQ_SUCCESS = "CONTACTS_REQ_SUCCESS";
export const CONTACTS_REQ_ERR = "CONTACTS_REQ_ERR";
export const INVITE_CONTACT_SUCCESS = "INVITE_CONTACT_SUCCESS";

function contactsReqSent() {
    return({
        type: CONTACTS_REQ_SENT
    });
}

function contactsReqSuccess(contacts) {
    return({
        type: CONTACTS_REQ_SUCCESS,
        contacts
    })
}

function contactsReqErr(error) {
    return({
        type: CONTACTS_REQ_ERR,
        error
    })
}

function inviteReqSuccess() {
    return({
        type : INVITE_CONTACT_SUCCESS
    })
}

export function inviteRequest(email) {
    return async (dispatch) => {
        await requestInvite(email)
        .then(function(response){
            dispatch(inviteReqSuccess());
        })
    }
}


export function contactsRequest(contacts) {
    return async (dispatch) => {
        dispatch(contactsReqSent());
        await requestConacts(contacts)
        .then(function(response){
            dispatch(contactsReqSuccess(response.data.contacts));
        }).catch(function(error){
            dispatch(contactsReqErr(error.response.data.error));
        })
    }
}


