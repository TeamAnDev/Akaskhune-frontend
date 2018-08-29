import {axiosInstance, rest} from './urls';
import {storeToken, retrieveToken} from '../config/token';
let isRefreshing = false;
let isGettingToken = false;
async function refreshAccessToken() {
  const value = await AsyncStorage.getItem('refresh');
  if(value !== null)
  {
    axiosInstance.post(rest.refresh, {refresh:value}).then(function(response){
      // axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
      
      return response.data.token;
    }).catch(function(err){
      
    })
  }
}

// axiosInstance.interceptors.response.use(response => {

//   return response;
// }, error => {
//   console.warn('getting token');
//   const { config, response: { status } } = error;
//   const originalRequest = config;
//   if (status === 401) {
//     if (!isRefreshing) {
//       isRefreshing = true;
//       refreshAccessToken()
//         .then(newToken => {
//           isRefreshing = false;
//           originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
//           storeToken(newToken);
//         });
//     }
//   else if(status === 404){
//     if(!isGettingToken) {
     
//       isGettingToken =  true;
//       retrieveToken().then((token) => {
//         originalRequest.headers['Authorization'] = 'Bearer ' + token;
//         isGettingToken = false;} )
//       .catch();
//     }
//   }
//   return axiosInstance(originalRequest);
//   } else {
//     return Promise.reject(error);
//   }
// });

