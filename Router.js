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
import SinglePost from './src/containers/home/SinglePost/SinglePost';
<<<<<<< HEAD
import FollowersList from './src/containers/peopleList/FollowersList';
import FollowingsList from './src/containers/peopleList/FollowingsList';
import Board from './src/containers/board/Board';
=======
import AuthLoadingScreen from './AuthLoadingScreen';
import NoConnectionScreen from './NoConnectionScreen';

>>>>>>> 26cdf407590970bf47d51d12632ae1ca415fe8e0

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
    NewPostComplete,
    SinglePost,
    FollowersList,
    FollowingsList,
    Board
  }, {
    initialRouteName: "BottomTabRouter",
    headerMode: "none"
  });

const Router = createSwitchNavigator({
  Auth,
  App,
  AuthLoadingScreen,
  NoConnectionScreen
},
{
  initialRouteName : "AuthLoadingScreen"
})
 export default Router;