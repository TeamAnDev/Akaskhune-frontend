import * as signupReq from '../../axiosRequests/signup/signup';
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
function signupRequestSent ()
{
    return {
        type : SIGNUP_REQUEST
    }
    
}
export const SIGNUP_SUCCES = "SIGNUP_SUCCES";
function signupSucces (token)
{
    return {
        type : SIGNUP_SUCCES,
        token
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
        try{
            dispatch(signupRequestSent());
            let token = "";
            await signupReq(email, password).then(function(response) {
                token = response.data.token;
            })
            dispatch(signupSucces(token));
        }
        catch(error)
        {  
            let err = "error!"
            console.warn(error);
            dispatch(signupError(err));
    
        }
    }    
}
