import {rest, axiosInstance} from '../../config/urls'


export default function requestLogin(email, password) {
    let data = {
        email,
        password
    }

    return axiosInstance.post(rest.login, data);
}