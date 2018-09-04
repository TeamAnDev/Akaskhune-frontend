import {axiosInstance, rest} from '../../config/urls';

function requestContacts(contacts) {
    let data = {contacts};

    return axiosInstance.post(rest.contacts, data);
}

export default requestContacts;