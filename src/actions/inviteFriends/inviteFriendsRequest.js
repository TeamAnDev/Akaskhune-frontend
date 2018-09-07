import requestConacts from '../../axiosRequests/inviteFriends/inviteFriends';

export const CONTACTS_REQ_SENT = "CONTACTS_REQ_SENT";
export const CONTACTS_REQ_SUCCESS = "CONTACTS_REQ_SUCCESS";
export const CONTACTS_REQ_ERR = "CONTACTS_REQ_ERR";

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


