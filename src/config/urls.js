import axios from 'axios'
import {navigate} from '../../NavigationService';
import {retrieveToken, retrieveRefresh, storeToken, storeRefresh} from '../config/token';

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
    imagesOthers : (username) => '/user/' + username + '/post/recent/',
    contacts : '/friends/contacts/',
    follow : '/friends/follow/',
    newPost : '/post/',
    unfollow : '/friends/unfollow/',
    feeds : '/user/feed/',
    followersList : '/user/followers/',
    followingsList : '/user/followings/',
    othersFollowingsList : (username) => '/user/' + username + '/followings/',
    othersFollowersList : (username) => '/user/' + username + '/followers/',
    singlePost : '/post/',
    commentList : (postId) => '/post/' + postId.toString() + '/comments/list/',
    commentCreate : (postId) => '/post/' + postId.toString() + '/comments/create/',
    allBoards : '/board/get/',
    othersAllBoards : (username) => '/board/get/' + username.toString() + '/',
    singleBoard : '/board/post/',
    addBoards : '/board/add/',
    addPostsToBoard : (boardId) => '/board/' + boardId.toString() + '/post/',
    like : (postId) => '/post/' + postId.toString() + '/likes/',
    block : (postId) => '/user/feed/blacklist/' + postId.toString() + '/',
    notifications : '/notification/',
    searchUser : '/search/user/',
    searchTag : '/search/tag/',
    popularTags : '/search/tag/get/',
    invite : '/friends/invite/',
    deleteBoard : '/board/delete/',
    forgetPassword : '/user/password/reset/',
    popularTags : '/search/tag/get/',
    privacy : '/user/status/',
    ownPhotosForBoard : '/board/post/other/',
    accept : (username) => '/friends/follow/accept/' + username + '/',
    reject : (username) => '/friends/follow/reject/' + username + '/',
    recommendation : '/recommendation/'
    
}

export let axiosInstance = axios.create({
    baseURL: 'http://185.162.235.243:8080/api/v1',
    timeout:20000,
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
let maxRequestForRefresh = 5;
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
  if(error.response === undefined) // Server not responding
  {
    navigate('NoConnectionScreen')
    return Promise.reject({response:{ data : ""}});
  }
  const { config, response: { status } } = error;
  const originalRequest = config;
  let refreshToken = await retrieveRefresh();
  if (status === 401 && refreshToken !== "" && maxRequestForRefresh > 0) {
    try{
      maxRequestForRefresh -= 1 ;
      let newToken = await refreshAccessToken(refreshToken);
      originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
      return axiosInstance(originalRequest);
    }
    catch (err){
      return Promise.reject(err);
    }
  }
  else if(maxRequestForRefresh < 1)
  {
    storeToken("");
    storeRefresh("");
    navigate('AuthLoadingScreen');
  }else {
    return Promise.reject(error);
  }
});
