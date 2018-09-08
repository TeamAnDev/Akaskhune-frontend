import {axiosInstance, rest} from '../../config/urls'
function likeAxios(){
    return axiosInstance.post(rest.like);
}
export default likeAxios;
