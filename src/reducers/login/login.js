import {EMAIL_CHANGED , PASSWORD_CHANGED, LOGIN, LOGIN_GOOGLE, SIGNUP} from '../../actions/login/loginAction';
import {combineReducers} from 'redux';
import errors from "../../config/errors";
function loginReducer(state={email:"", password:"", login:false, token:"", err:""}, action)
{
    switch(action.type){
        case(EMAIL_CHANGED):
            return Object.assign({}, state, {email : action.email});
        case(PASSWORD_CHANGED):
            return Object.assign({}, state, {password : action.password});
        case(LOGIN):
            if(state.email!=="" && state.password!=="")
            {
                let response = undefined;
                if(response.token)
                    return Object.assign({}, state, {login:true, token:token});
                else if(response.err)
                    return Object.assign({}, state, {err:response.err});
            }
            else
                return Object.assign({}, state, {err:errors.fillInputsLogin});
        case(LOGIN_GOOGLE) :
            return state;
        case(SIGNUP) :  
            return state;
        default:
            return state;
    }
}

const loginApp = combineReducers({
    loginReducer
});
export default loginApp;
