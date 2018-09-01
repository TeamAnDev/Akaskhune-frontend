import {rest, axiosInstance} from '../../config/urls'


export default function editUserInfoAxiosRequest(fullname, bio, avatar) {
    let data ;
    if(avatar === undefined || avatar === "")
    {
        data = {
            fullname,
            bio
        }
    }
    else{
        data = {
            fullname,
            bio,
            avatar
        }
    }
  
    return axiosInstance.put(rest.userEdit, data);
}