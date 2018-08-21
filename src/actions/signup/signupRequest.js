import signupAxiosRequest from '../../axiosRequests/signup/signup';
import axios from 'axios';
import {axiosInstance} from '../../config/urls';
import {rest} from '../../config/urls';
import { storeToken , retrieveToken} from '../../config/token';
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";

function signupRequestSent ()
{
    return {
        type : SIGNUP_REQUEST
    }
    
}
export const SIGNUP_SUCCES = "SIGNUP_SUCCES";
function signupSucces ()
{
    return {
        type : SIGNUP_SUCCES,
    }
    
}
export const SIGNUP_REQ_ERROR = "SIGNUP_REQ_ERROR";
function signupError (error)
{
    return {
        type : SIGNUP_REQ_ERROR,
        error
    }
}
export function signup(email, password){
    return async (dispatch) => {
        dispatch(signupRequestSent());
        await signupAxiosRequest(email, password).then(function(response) {
            storeToken(response.data.token).then(() => dispatch(signupSucces()));
        }).catch(function(error){
            dispatch(signupError(error.response.data.message));
        })
    }    
}
