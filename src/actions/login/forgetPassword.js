export const FORGET_PASSWORD_REQ_SENT = 'FORGET_PASSWORD_REQ_SENT';
export const FORGET_PASSWORD_REQ_ERR  = 'FORGET_PASSWORD_REQ_ERR';
export const FORGET_PASSWORD_REQ_SUCCESS = 'FORGET_PASSWORD_REQ_SUCCESS';
function forgetPassReqSent()
{
    return {
        type : FORGET_PASSWORD_REQ_SENT
    }
}
function forgetPassReqErr(error) 
{
    return {
        type : FORGET_PASSWORD_REQ_ERR,
        error
    }
}
function forgetPassReqSuccess()
{
    return  {
        type : FORGET_PASSWORD_REQ_SUCCESS,
    }
}

export function forgetPassword(email) {
    return async (dispatch) => {
        dispatch(forgetPassReqSent());
        await forgetPasswordAxios(email)
        .then (async function(response){
            dispatch(forgetPassReqSuccess());
        }).catch (function(error) { 
            dispatch(forgetPassReqErr(error.response.data.error));
        })
    }
}