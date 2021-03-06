import {combineReducers} from 'redux';
import signupRequestReducer from './request'; 
import errors from "../../config/errors";
import { SIGNUP_EMAIL_CHANGED, SIGNUP_PASSWORD_CHANGED, SIGNUP_PASSWORD_CONFIRM_CHANGED, SIGNUP_SINGNUP_BUTTON_PRESSED } from '../../actions/signup/signupActions';
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function emailCheckReducer(state=false, action)
{
    switch(action.type){
        case(SIGNUP_EMAIL_CHANGED):
            if (EMAIL_REGEX .test(action.email) == true)
                return true;
            else
                return false;
        default:
            return state;
    }
}

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
function passwordCheckReducer(state={password:"", passwordConfirm:"", passvalid : false,valid:false}, action)
{
    switch(action.type){
        case(SIGNUP_PASSWORD_CHANGED):
            if(PASSWORD_REGEX.test(action.password))
                return Object.assign({}, state, {password:action.password, passvalid:true});
            return Object.assign({}, state, {password:action.password, passvalid:false});
        case(SIGNUP_PASSWORD_CONFIRM_CHANGED):
            if(state.password   === action.passwordConfirm && PASSWORD_REGEX.test(action.passwordConfirm))
                    return Object.assign({}, state,  {passwordConfirm:action.passwordConfirm, valid:true});
            return Object.assign({}, state, {passwordConfirm:action.passwordConfirm, valid:false});
        default:
            return state;
        
    }
}
function signupReducer(state={email:"", password:"", passwordConfirm:"", signup:false, token:"", loading:false, err:""}, action)
{
    switch(action.type){
        case(SIGNUP_EMAIL_CHANGED):

            return Object.assign({}, state, {email:action.email});
        case(SIGNUP_PASSWORD_CHANGED):
            return Object.assign({}, state, {password:action.password});
        case(SIGNUP_PASSWORD_CONFIRM_CHANGED):
            return Object.assign({}, state, {passwordConfirm:action.passwordConfirm});
        case(SIGNUP_SINGNUP_BUTTON_PRESSED):
            if(state.password !== state.passwordConfirm)
                return Object.assign({}, state, {err:errors.passwordMatch})
            else
                return state;
        default:
            return state;
    }

}
const signupApp =  combineReducers({
    signupReducer,
    emailCheckReducer,
    passwordCheckReducer,
    signupRequestReducer
});
export default signupApp;