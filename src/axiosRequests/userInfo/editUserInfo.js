import {rest, axiosInstance} from '../../config/urls'


export default function editUserInfoAxiosRequest(fullname, bio) {
    return axiosInstance.post(rest.userInfo);
}