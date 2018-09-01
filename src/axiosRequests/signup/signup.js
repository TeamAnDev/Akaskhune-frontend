
import {axiosInstance} from '../../config/urls';
import {rest} from '../../config/urls';


export default function signupAxiosRequest(email)
{
    let data = {
        email,
    }
    return axiosInstance.post(rest.signupValidation, data);
}
    
