import requestLogin from '../../axiosRequests/login/login'


export const LOGIN_REQUEST_SENT = 'LOGIN_REQUEST_SENT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REQ_ERR = 'LOGIN_REQ_ERROR';

function loginReqSent() {
    return {
        type : LOGIN_REQUEST_SENT
    }
}

function loginSuccess(token) {
    return {
        type : LOGIN_SUCCESS,
        token
    }
}

function loginError(error) {
    return {
        type : LOGIN_REQ_ERR,
        error
    }
}

export function login(email, password) {
    return async (dispatch) => {
        try {
            dispatch(loginReqSent());
            let token = "";
            await requestLogin(email, password)
            .then (function(response){
                token = response.data.token;
            })
            dispatch(loginSuccess());
        }
        catch (error) {
            let errorMesage = "login error!";
            console.warn(error);
            dispatch(loginError(errorMesage))
        }
    }
}