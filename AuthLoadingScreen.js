import React from 'react';
import {
  View,
  Platform,
  Linking
} from 'react-native';
import {retrieveToken} from './src/config/token';
import { Spinner} from 'native-base';
import colors from './src/config/colors';
import {navigate} from './NavigationService';
export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
   
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await retrieveToken();
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  componentDidMount() { 
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.navigate(url);
      });
    } else {
        Linking.addEventListener('url', this.handleOpenURL);
      }
    }
    
  componentWillUnmount() { 
    Linking.removeEventListener('url', this.handleOpenURL);
  }
  handleOpenURL = (event) => { 
    this.navigate(event.url);
  }
  navigate = (url) => {
    const { navigate } = this.props.navigation;
    const route = url.replace(/.*?:\/\//g, '');
    const forgetToken = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];
    if (routeName === 'forgetPassword') {
      navigate('FPGetEmail', { forgetToken })
    };
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Spinner color={colors.accentColor}/>
      </View>
    );
  }
}