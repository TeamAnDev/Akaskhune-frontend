
import {axiosInstance} from '../../config/urls';
import {rest} from '../../config/urls';


export default function signupRequest(email, password)
{
    let data = {
        email,
        password
    }
    return axiosInstance.get(rest.signup, data);
}
    
