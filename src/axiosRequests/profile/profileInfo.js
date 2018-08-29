import {axiosInstance, rest} from '../../config/urls';
import {retrieveToken} from '../../config/token'
function infoRequest() {

    console.warn("token is " + axiosInstance.defaults.headers.common['Authorization']);
    return axiosInstance.get(rest.userSelf);
}

export default infoRequest;