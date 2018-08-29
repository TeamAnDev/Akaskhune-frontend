
import {axiosInstance} from '../../config/urls';
import {axios} from 'axios';
import {rest} from '../../config/urls';


export default function completeProfileAxiosRequest(username, fullname, bio, avatar, password, email)
{
    let data = {
        username,
        fullname, 
        bio, 
        avatar,
        password,
        email
    }
    return axiosInstance.post(rest.completeProfile, data);
}
    
