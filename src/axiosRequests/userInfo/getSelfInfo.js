import {rest, axiosInstance} from '../../config/urls'


export default function getSelfInfoAxiosRequest(username) {
    let url = rest.userInfo;
    if(username)
    {
        url = rest.userInfo + username + '/';
    }
    return axiosInstance.get(url);
}