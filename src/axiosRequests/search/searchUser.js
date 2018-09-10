import {axiosInstance, rest} from '../../config/urls';

function searchUserRequest(keyword) {
    let data = {keyword};
    return axiosInstance.post(rest.searchUser, data);
}

export default searchUserRequest;