import {axiosInstance, rest} from '../../config/urls';

function requestInvite(email) {
    let data = {email};
    return axiosInstance.post(rest.invite, data);
}

export default requestInvite;