import {AsyncStorage} from 'react-native';
export const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem('token', 'token');
    } catch (error) {
      console.warn(error);
    }
  }
export const retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        return value;
      }
     } catch (error) {
         console.warn(error)
     }
  }
