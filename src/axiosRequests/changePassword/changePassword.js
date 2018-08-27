import {axiosInstance, rest} from '../../config/urls';

export default function changePasswordAxiosReq(oldPassword, newPassword) {
    let data = {
        oldPassword,
        newPassword
    }

    return axiosInstance.post(rest.changePassword, data);
}