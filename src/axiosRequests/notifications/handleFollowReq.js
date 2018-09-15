import {rest, axiosInstance} from '../../config/urls';
function handleFollowReqAxios(username, type)
{
    if(type === "accept")
        return axiosInstance.post(rest.accept(username));
    else if(type === "reject")
        return axiosInstance.delete(rest.reject(username));
    return ;
}
export default handleFollowReqAxios;