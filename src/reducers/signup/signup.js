import {combineReducers} from 'redux';
import errors from "../../config/errors";
import { SIGNUP_EMAIL_CHANGED, SIGNUP_PASSWORD_CHANGED, SIGNUP_PASSWORD_CONFIRM_CHANGED, SIGNUP_SINGNUP_BUTTON_PRESSED } from '../../actions/signup/signupActions';

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