import {AsyncStorage} from 'react-native';
export const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem('access', token)
    } catch (error) {
      console.warn(error);
    }
  }
export const retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('access');
      if (value !== null) {
        return value;
      }
     } catch (error) {
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

  