import {rest, axiosInstance} from '../../config/urls'


export default function getSelfInfoAxiosRequest() {
    return axiosInstance.get(rest.userInfo);
}