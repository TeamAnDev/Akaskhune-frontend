import {LOGIN_EMAIL_CHANGED , LOGIN_PASSWORD_CHANGED, LOGIN, LOGIN_GOOGLE, SIGNUP, SIGNUP_PAGE} from '../../actions/login/loginAction';
import {combineReducers} from 'redux';
import forgetPasswordReducer from './forgetPassword';
import errors from "../../config/errors";
import loginRequestReducer from './request'

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function emailCheckReducer(state=false, action) {
    switch(action.type) {
        case LOGIN_EMAIL_CHANGED :
            if(EMAIL_REGEX.test(action.email)) 
                return true;
            else
                return false;
        default :
            return state;            
    }
} 

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
function passwordCheckReducer(state=false , action) {
    switch(action.type) {
        case LOGIN_PASSWORD_CHANGED :
            if(PASSWORD_REGEX.test(action.password)) 
                return true;
            else
                return false;
        default :
            return state;            
    }
}

function loginReducer(state={email:"", password:"", login:false, token:"", err:""}, action)
{
    switch(action.type){
        case(LOGIN_EMAIL_CHANGED):
            return Object.assign({}, state, {email : action.email});
        case(LOGIN_PASSWORD_CHANGED):
            return Object.assign({}, state, {password : action.password});
        case(LOGIN):
            if(state.email!=="" && state.password!=="")
            {
                let response = {};
                if(response.token)
                    return Object.assign({}, state, {login:true, token:token});
                else if(response.err)
                    return Object.assign({}, state, {err:response.err});
                else 
                    return state;
            }
            else
                return Object.assign({}, state, {err:errors.fillInputsLogin});
        case(LOGIN_GOOGLE) :
            return state;
        case(SIGNUP_PAGE) : 
            return state;
        default:
            return state;
    }
}

const loginApp = combineReducers({
    loginReducer, 
    emailCheckReducer, 
    passwordCheckReducer, 
    loginRequestReducer,
    forgetPasswordReducer

});
export default loginApp;
