import {combineReducers} from 'redux'
import loginApp from './login/login'
import signupApp from './signup/signup'
import completeProfileApp from './completeProfile/completeProfile';
const AkaskhuneApp = combineReducers({
    loginApp,
    signupApp,
    completeProfileApp,
});

export default AkaskhuneApp;