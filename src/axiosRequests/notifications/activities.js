import {rest, axiosInstance} from '../../config/urls';

function activitiesAxios(url)
{
    return axiosInstance.get(url);
}
export default activitiesAxios;