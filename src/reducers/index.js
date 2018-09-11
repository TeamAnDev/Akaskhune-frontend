import {combineReducers} from 'redux'
import loginApp from './login/login'
import signupApp from './signup/signup'
import completeProfileApp from './completeProfile/completeProfile';
import userInfoApp from './userInfo/userInfo';
import changePasswordApp from './changePassword/changePassword';
import profileApp from './profile/profile';
import fileApp from './file/file';
import newPostApp from './newPost/newPost';
import inviteFriendsApp from './inviteFriends/inviteFriends';
import followApp from './follow/request';
import homeApp from './home/home';
import followersApp from './peopleList/followersRequest';
import followingsApp from './peopleList/followingsRequest';
import boardsApp from './boards/request';
import singleBoardApp from './singleBoard/request';
import notificationsApp from './notifications/notifications';


const AkaskhuneApp = combineReducers({
    loginApp,
    signupApp,
    completeProfileApp,
    userInfoApp,
    changePasswordApp,
    profileApp,
    fileApp,
    newPostApp,
    inviteFriendsApp,
    followApp,
    homeApp,
    followersApp,
    followingsApp,
    boardsApp,
    singleBoardApp,
    notificationsApp
});

export default AkaskhuneApp;