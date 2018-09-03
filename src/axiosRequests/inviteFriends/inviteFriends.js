import {axiosInstance, rest} from '../../config/urls';

function requestContacts(contacts) {
    let data = {contacts};

    axiosInstance.post(rest.contacts);
}

export default requestContacts;