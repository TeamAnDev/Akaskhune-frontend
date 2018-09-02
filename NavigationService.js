// NavigationService.js

import { NavigationActions ,StackActions } from 'react-navigation';
import { retrieveToken } from './src/config/token';

let _navigator;

export function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
  navigateToBaseIfLogined();
}
async function navigateToBaseIfLogined()
{
  let token = await retrieveToken();
  if(token === "" || token === undefined)
  {
    navigate('Login');
  }
}


export function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
    
  );

}
export function goBack(){
  _navigator.dispatch(
    NavigationActions.back()
  );
}
// add other navigation functions that you need and export them

// export default {
//   navigate,
//   setTopLevelNavigator,
// };