import {axiosInstance, rest} from '../../config/urls';

function followersListRequest() {
    return axiosInstance.get(rest.followersList);
}

export default followersListRequest;