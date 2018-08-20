import {combineReducers} from 'redux'
import loginApp from './login/login'
import signupApp from './signup/signup'
const AkaskhuneApp = combineReducers({
    loginApp,
    signupApp,
    
});

export default AkaskhuneApp;