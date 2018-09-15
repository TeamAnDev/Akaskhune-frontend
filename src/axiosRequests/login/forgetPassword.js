import {rest, axiosInstance} from '../../config/urls';
function forgetpasswordAxios(email)
{
    let data = {
        email
    }
    return axiosInstance.post(rest.forgetPassword, data);
}
export default forgetpasswordAxios;