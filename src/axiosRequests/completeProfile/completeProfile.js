
import {axiosInstance} from '../../config/urls';
import {axios} from 'axios';
import {rest} from '../../config/urls';


export default function completeProfileAxiosRequest(username, fullname, bio, avatar)
{
    let data = {
        username,
        fullname, 
        bio, 
        avatar
    }
    return axiosInstance.put(rest.completeProfile, data);
}
    
