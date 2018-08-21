
import {axiosInstance} from '../../config/urls';
import {axios} from 'axios';
import {rest} from '../../config/urls';


export default function signupAxiosRequest(email, password)
{
    let data = {
        email,
        password
    }
    return axiosInstance.post(rest.signup, data);
}
    
