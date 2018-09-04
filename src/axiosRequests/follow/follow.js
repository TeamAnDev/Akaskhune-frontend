import {axiosInstance, rest} from '../../config/urls';

function requestFollow(username) {
    let endPoint = rest.follow + username + "/";
    return axiosInstance.post(endPoint);
}

export default requestFollow;