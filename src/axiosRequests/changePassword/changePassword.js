import {axiosInstance, rest} from '../../config/urls';

export default function changePasswordAxiosReq(oldPassword, newPassword) {
    let data = {
        pass_old : oldPassword,
        password : newPassword
        
    }

    return axiosInstance.put(rest.changePassword, data);
}