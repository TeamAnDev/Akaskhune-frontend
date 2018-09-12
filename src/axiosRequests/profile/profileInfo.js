import {axiosInstance, rest} from '../../config/urls';
import {retrieveToken} from '../../config/token'
function infoRequest(username) {
    let url = rest.userSelf;
    if(username)
    {
        url = rest.userSelf + username + '/';
    }
    return axiosInstance.get(url);
}

export default infoRequest;