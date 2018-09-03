import axios from 'axios'
import {AsyncStorage} from 'react-native';
import {retrieveToken, retrieveRefresh} from '../config/token';
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
    imagesSelf : '/user/post/recent/',
    contacts : '/friends/contacts/'
    
}

export let axiosInstance = axios.create({
    baseURL: 'http://192.168.11.199:8085/',
    timeout:10000,
    headers:{
        'Content-Type': 'application/json',
    }
})

//TokenSending
axiosInstance.interceptors.request.use(async function (config) {
    let token = await retrieveToken()
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

//Refreshing 
async function refreshAccessToken() {
    const value = await retrieveRefresh();
    axiosInstance.post(rest.refresh, {refresh:value}).then(async function(response){
        await storeToken(response.data.token);
        return response.data.token;
    }).catch(function(err){   
    })
}
axiosInstance.interceptors.response.use(response => {
  return response;
},async function (error){
  const { config, response: { status } } = error;
  const originalRequest = config;
  if (status === 401 ) {
    let newToken = await refreshAccessToken();
    originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
  return axiosInstance(originalRequest);
  } else {
    return Promise.reject(error);
  }
});