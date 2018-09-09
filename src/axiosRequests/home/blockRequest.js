import {rest, axiosInstance} from '../../config/urls'
function blockAxios(postId){
    return axiosInstance.post(rest.block(postId));
}
export default blockAxios;