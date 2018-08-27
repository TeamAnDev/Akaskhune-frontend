import {combineReducers} from 'redux'
import loginApp from './login/login'
import signupApp from './signup/signup'
import completeProfileApp from './completeProfile/completeProfile';
import changePasswordApp from './changePassword/changePassword';
const AkaskhuneApp = combineReducers({
    loginApp,
    signupApp,
    completeProfileApp,
    changePasswordApp
});

export default AkaskhuneApp;