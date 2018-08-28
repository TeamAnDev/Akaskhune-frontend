import axios from 'axios'

export const rest = {
    login : '/auth/login/',
    signup : '/signup',
    completeProfile : '/completeProfile',
    userInfo : '/userInfo/',
    userEdit : '/user/',
    changePassword : '/changePassword/',
    file : '/file',
    
}

// axios.defaults.baseURL = 'http://192.168.11.214:8080';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

export const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.38:80',
    timeout:10000,
    headers:{
        'Content-Type': 'application/json',
    }
})

