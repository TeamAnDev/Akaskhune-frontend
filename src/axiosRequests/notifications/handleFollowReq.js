import {rest, axiosInstance} from '../../config/urls';
function handleFollowReqAxios(username, type)
{
    let url = "";
    if(type === "accept")
        url = rest.accept(username);
    else if(type === "reject")
        url = rest.reject(username);
    return axiosInstance.post(url);
}
export default handleFollowReqAxios;