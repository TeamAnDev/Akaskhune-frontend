import {axiosInstance, rest} from '../../config/urls';

function followersListRequest(username) {
    let url = rest.followersList;
    if(username)
    {
        url = rest.othersFollowersList(username)
    }

    return axiosInstance.get(url);
}

export default followersListRequest;