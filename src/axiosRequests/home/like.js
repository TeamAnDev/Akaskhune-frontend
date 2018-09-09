import {axiosInstance, rest} from '../../config/urls'
function likeAxios(postId, isLiking){
    if(isLiking)
        return axiosInstance.post(rest.like(postId));
    return axiosInstance.delete(rest.like(postId));
}
export default likeAxios;
