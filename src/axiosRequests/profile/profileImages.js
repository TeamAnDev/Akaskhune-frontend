
import {axiosInstance, rest} from '../../config/urls';

function imagesRequest() {
    return axiosInstance.get('users/1/');
}

export default imagesRequest;