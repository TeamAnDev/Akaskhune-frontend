
import {axiosInstance, rest} from '../../config/urls';

function imagesRequest() {
    return axiosInstance.get(rest.imagesSelf);
}

export default imagesRequest;