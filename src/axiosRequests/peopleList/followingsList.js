import {axiosInstance, rest} from '../../config/urls';

function followingsListRequest(username) {
    let url = rest.followingsList;
    if(username)
    {
        url = rest.othersFollowingsList(username)
    }
    return axiosInstance.get(url);
}

export default followingsListRequest;