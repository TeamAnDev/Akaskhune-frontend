import {rest, axiosInstance} from '../../config/urls'
function singlePostAxios(id){
   console.warn(id);
    return axiosInstance.get(rest.singlePost + id.toString() + '/');
}
export default singlePostAxios;