import {AsyncStorage} from 'react-native';
import {axiosInstance} from './urls';
export const storeToken = async (token) => {
    try {
      console.warn("storing token");
      await AsyncStorage.setItem('access', token)
      console.warn("token stored");
    } catch (error) {
      console.warn(error);
    }
  }
export const retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('access');
      if (value !== null) {
        console.warn("getting token");
        return value;
      }
     } catch (error) {
      console.warn("getting token had error");
         console.warn(error)
     }
  }

  export const storeRefresh = async (token) => {
    try {
      await AsyncStorage.setItem('refresh', token)
    } catch (error) {
      console.warn(error);
    }
  }
export const retrieveRefresh = async () => {
    try {
      const value = await AsyncStorage.getItem('refresh');
      if (value !== null) {
        return value;
      }
     } catch (error) {
         console.warn(error)
     }
  }

  