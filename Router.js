import Login from './src/containers/login/Login';
import Signup from './src/containers/signup/Signup';
import SignupCompleteProfile from './src/containers/signupCompleteProfile/SignupCompleteProfile';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import BottomTabRouter from './src/containers/baseContainer/BottomTabRouter';
import EditProfile from './src/containers/setting/editProfile/EditProfile';
import Setting from './src/containers/setting/Setting';
import ChangePassword from './src/containers/setting/changePassword/ChangePassword';
import NewPost from './src/containers/newPost/NewPost';
import NewPostComplete from './src/containers/newPost/NewPostComplete';
import InviteFriends from './src/containers/inviteFriends/inviteFriends';
import SinglePost from './src/containers/home/SinglePost/SinglePost';
import FollowersList from './src/containers/peopleList/FollowersList';
import FollowingsList from './src/containers/peopleList/FollowingsList';
import Board from './src/containers/board/Board';
import AuthLoadingScreen from './AuthLoadingScreen';
import NoConnectionScreen from './NoConnectionScreen';
import OwnPhotos from './src/containers/board/OwnPhotos';
import TagPosts from './src/containers/tagPosts/TagPosts';
import FPGetEmail from './src/containers/forgetPassword/FPGetEmail';
import Search from './src/containers/search/Search';
import UserProfile from './src/containers/profile/UserProfile';
import Profile from './src/containers/profile/Profile';
import Recommendation from './src/containers/recommendation/Recommendation';


const Auth = createStackNavigator({
    Signup,
    Login,
    SignupCompleteProfile,
    FPGetEmail,
}, {
  initialRouteName : "Login",
  headerMode: "none"
});
const App = createStackNavigator({
    
    UserProfile,
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
    Board,
    OwnPhotos,
    TagPosts,
    Search,
    Profile,
    Recommendation
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