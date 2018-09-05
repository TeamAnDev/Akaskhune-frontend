
import {axiosInstance, rest} from '../../config/urls';

function imagesRequest(imagesUrl) {
    console.warn(imagesUrl);
    return axiosInstance.get(imagesUrl);
}

export default imagesRequest;