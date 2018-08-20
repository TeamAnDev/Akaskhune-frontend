import {LOGIN_EMAIL_CHANGED , LOGIN_PASSWORD_CHANGED, LOGIN, LOGIN_GOOGLE, SIGNUP, SIGNUP_PAGE} from '../../actions/login/loginAction';
import {combineReducers} from 'redux';
import errors from "../../config/errors";
import axios from 'axios';
function loginReducer(state={email:"", password:"", login:false, token:"", err:""}, action)
{
    switch(action.type){
        case(LOGIN_EMAIL_CHANGED):
            return Object.assign({}, state, {email : action.email});
        case(LOGIN_PASSWORD_CHANGED):
            return Object.assign({}, state, {password : action.password});
        case(LOGIN):
            console.warn("reducer -> login")
            if(state.email!=="" && state.password!=="")
            {
                let response = {};
                axios.get('http://localhost:3000/login')
                    .then(response => console.warn(response))
                    .catch(err => console.warn(err));
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
            console.warn("reducer -> loginGoogle")
            return state;
        case(SIGNUP_PAGE) : 
            console.warn("reducer -> signup")
            return state;
        default:
            return state;
    }
}

const loginApp = combineReducers({
    loginReducer
});
export default loginApp;
