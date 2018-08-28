import {axiosInstance, rest} from '../../config/urls';

function infoRequest() {
    return axiosInstance.get('users/1/');
}

export default infoRequest;