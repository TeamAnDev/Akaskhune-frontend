import {axiosInstance, rest} from '../../config/urls';
function notificationsAxios(url)
{
    return axiosInstance.get(url);
}
export default notificationsAxios;