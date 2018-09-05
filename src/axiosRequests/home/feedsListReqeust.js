import {rest, axiosInstance} from '../../config/urls'
function feedsListAxios(restFeeds){
    return axiosInstance.get(restFeeds);
}
export default feedsListAxios;