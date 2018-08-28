import {combineReducers} from 'redux'
import loginApp from './login/login'
import signupApp from './signup/signup'
import completeProfileApp from './completeProfile/completeProfile';
import changePasswordApp from './changePassword/changePassword';
import profileApp from './profile/profile';
const AkaskhuneApp = combineReducers({
    loginApp,
    signupApp,
    completeProfileApp,
    changePasswordApp,
    profileApp
});

export default AkaskhuneApp;