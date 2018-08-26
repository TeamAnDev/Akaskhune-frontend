import Login from './src/containers/login/Login';
import Signup from './src/containers/signup/Signup';
import SignupCompleteProfile from './src/containers/signupCompleteProfile/SignupCompleteProfile';
import {createStackNavigator} from 'react-navigation';
import Profile from './src/containers/profile/Profile';
import Setting from './src/containers/setting/Setting';
import ChangePassword from './src/containers/changePassword/ChangePassword';

const Router = createStackNavigator({
    Signup,
    Login,
    SignupCompleteProfile,
    Profile,
    Setting,
    ChangePassword
  }, {
    initialRouteName: "Profile",
    headerMode: "none"
  })
  const prevGetStateForAction = Router.router.getStateForAction;
      
  Router.router.getStateForAction = (action, state) => {
  // Do not allow to go back to Signup
  if (action.type === "Navigation/BACK" && state) {
      const newRoutes = state.routes.filter(r => r.routeName !== "Signup");
      const newIndex = newRoutes.length - 1;
      return prevGetStateForAction(action, { index: newIndex, routes: newRoutes });
  }
  return prevGetStateForAction(action, state);
  };

  export default Router;