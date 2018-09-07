import {axiosInstance} from '../../config/urls'
function commentsOfPostAxios(restComments){
    return axiosInstance.get(restComments);
}
export default commentsOfPostAxios;