import axios from 'axios'
import {AsyncStorage} from 'react-native';
import {retrieveToken, retrieveRefresh, storeToken} from '../config/token';
export const rest = {
    login : '/auth/login/',
    signupValidation : '/auth/signup/validation/',
    completeProfile : '/auth/signup/',
    userInfo : '/user/',
    userEdit : '/user/',
    changePassword : '/user/password/',
    file : '/file/avatar/',
    refresh : '/auth/refresh/',
    userSelf : '/user/',
    imagesSelf : '/user/post/recent/',
    contacts : '/friends/contacts/',
    follow : '/friends/follow/',
    newPost : '/post/',
    unfollow : '/friends/unfollow/',
    feeds : '/user/feed/',
    followersList : '/user/followers/',
    followingsList : '/user/followings/'
    
}

export let axiosInstance = axios.create({
    baseURL: 'http://rc.nasser.ir/api/v1',
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
async function refreshAccessToken(value) {  
    try
    {
      let response = await axiosInstance.post(rest.refresh, {refresh:value});
      await storeToken(response.data.access);
      return response.data.access;
    }
    catch (error)
    {
      return Promise.reject(err);
    }
}
axiosInstance.interceptors.response.use(response => {
  return response;
},async function (error){
  const { config, response: { status } } = error;
  const originalRequest = config;
  let refreshToken = await retrieveRefresh();
  if (status === 401 && refreshToken !== "") {
    try{
      let newToken = await refreshAccessToken(refreshToken);
      originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
      return axiosInstance(originalRequest);
    }
    catch (err){
      return Promise.reject(err);
    }
  } else {
    return Promise.reject(error);
  }
});