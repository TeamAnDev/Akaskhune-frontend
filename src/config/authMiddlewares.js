import {axiosInstance, rest} from './urls';
import {storeToken, retrieveToken} from '../config/token';
let isRefreshing = false;
let isGettingToken = false;
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
  const value = await AsyncStorage.getItem('refresh');
  if(value !== null)
  {
    axiosInstance.post(rest.refresh, {refresh:value}).then(async function(response){
      await storeToken(response.data.token);
      return response.data.token;
    }).catch(function(err){   
    })
  }
}

// axiosInstance.interceptors.response.use(response => {

//   return response;
// },async function (error){
//   const { config, response: { status } } = error;
//   const originalRequest = config;
//   if (status === 401) {
//     await refreshAccessToken()
//     if (!isRefreshing) {
//       isRefreshing = true;
//       refreshAccessToken()
//         .then(newToken => {
//           isRefreshing = false;
//           originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
//           storeToken(newToken);
//         });
//     }
//   return axiosInstance(originalRequest);
//   } else {
//     return Promise.reject(error);
//   }
// });

