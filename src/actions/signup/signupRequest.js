import signupAxiosRequest from '../../axiosRequests/signup/signup';
import { storeToken , retrieveToken, storeRefresh} from '../../config/token';
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
export function signup(email){
    return async (dispatch) => {
        dispatch(signupRequestSent());
        await signupAxiosRequest(email).then(function(response) {
            dispatch(signupSucces());
        }).catch(function(error){
            dispatch(signupError(error.response.data.error));
        })
    }    
}
