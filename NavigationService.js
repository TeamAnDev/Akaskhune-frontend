// NavigationService.js

import { NavigationActions ,StackActions, NavigationParams } from 'react-navigation';
import { retrieveToken } from './src/config/token';

let _navigator;

export function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
  // navigateToBaseIfLogined();
}
async function navigateToBaseIfLogined()
{
  let token = await retrieveToken();
  if(token === "" || token === undefined)
  {
    navigate('Auth');
  }
}

export function replace(routeName)
{
  _navigator.dispatch(
    StackActions.replace({
      routeName,
    })
    
  );
}

export function popToTop()
{
  _navigator.dispatch(
    StackActions.popToTop()
    
  );
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

export function push(routeName, params) {
  _navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    })
  );

}
// add other navigation functions that you need and export them

// export default {
//   navigate,
//   setTopLevelNavigator,
// };