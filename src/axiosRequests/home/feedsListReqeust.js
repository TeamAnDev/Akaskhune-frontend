import {rest, axiosInstance} from '../../config/urls'
function feedsListAxios(){
    return axiosInstance.get(rest.feeds);
}
export default feedsListAxios;