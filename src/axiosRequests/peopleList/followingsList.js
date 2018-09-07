import {axiosInstance, rest} from '../../config/urls';

function followingsListRequest() {
    return axiosInstance.get(rest.followingsList);
}

export default followingsListRequest;