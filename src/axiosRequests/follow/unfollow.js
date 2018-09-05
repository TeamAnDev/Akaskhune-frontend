import {axiosInstance, rest} from '../../config/urls';

function requestUnfollow(username) {
    let endPoint = rest.unfollow + username + "/";
    return axiosInstance.post(endPoint);
}

export default requestUnfollow;