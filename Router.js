import Login from './src/containers/login/Login';
import Signup from './src/containers/signup/Signup';
import SignupCompleteProfile from './src/containers/signupCompleteProfile/SignupCompleteProfile';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import Profile from './src/containers/profile/Profile';
import BottomTabRouter from './src/containers/baseContainer/BottomTabRouter';
import EditProfile from './src/containers/setting/editProfile/EditProfile';
import Setting from './src/containers/setting/Setting';
import ChangePassword from './src/containers/setting/changePassword/ChangePassword';
import NewPost from './src/containers/newPost/NewPost';
import NewPostComplete from './src/containers/newPost/NewPostComplete';
import InviteFriends from './src/containers/inviteFriends/inviteFriends';



const Auth = createStackNavigator({
    Signup,
    Login,
    SignupCompleteProfile,
}, {
  initialRouteName : "Login",
  headerMode: "none"
});
const App = createStackNavigator({
    
    Profile,
    Setting,
    ChangePassword,
    BottomTabRouter,
    EditProfile,
    InviteFriends,
    NewPost,
    NewPostComplete
  }, {
    initialRouteName: "BottomTabRouter",
    headerMode: "none"
  });

const Router = createSwitchNavigator({
  Auth,
  App
},
{
  initialRouteName : "App"
})
  // const prevGetStateForAction = Router.router.getStateForAction;
      
  // Router.router.getStateForAction = (action, state) => {
  // // Do not allow to go back to Signup
  // if (action.type === "Navigation/BACK" && state) {
  //     const newRoutes = state.routes.filter(r => r.routeName !== "Signup");
  //     const newIndex = newRoutes.length - 1;
  //     return prevGetStateForAction(action, { index: newIndex, routes: newRoutes });
  // } else if(action.type === "Navigation/BACK" && state) {
  //   const newRoutes = state.routes.filter(r => r.routeName !== "Signup");
  //   const newIndex = newRoutes.length - 1;
  //   return prevGetStateForAction(action, { index: newIndex, routes: newRoutes });
  // } 
  // return prevGetStateForAction(action, state);
  // };

  export default Router;