import axios from 'axios'
import {AsyncStorage} from 'react-native';
import {retrieveToken} from '../config/token';
export const rest = {
    login : '/auth/login/',
    signupValidation : '/auth/signup/validation/',
    completeProfile : '/auth/signup/',
    userInfo : '/user/',
    userEdit : '/user/',
    changePassword : '/user/password/',
    file : '/file/avatar/',
    refresh : '/refresh',
    userSelf : '/user/',
    imagesSelf : '/user/post/recent/'
    
}

// axios.defaults.baseURL = 'http://192.168.11.214:8080';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

export let axiosInstance = axios.create({
    baseURL: 'http://192.168.11.138:8000/api/v1',
    timeout:10000,
    headers:{
        'Content-Type': 'application/json',
    }
})
axiosInstance.interceptors.request.use(async function (config) {
    // Do something before request is sent
    let token = await retrieveToken()
    config.headers['Authorization'] = 'Bearer ' + token;
    // .catch(function(error) {
    //     console.warn("my error is");
    //     console.warn(error);
    // });
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
// AsyncStorage.getItem('access').then((vlaue) => axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' +  vlaue)
