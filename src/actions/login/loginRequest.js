import requestLogin from '../../axiosRequests/login/login'
import {storeToken, storeRefresh} from '../../config/token';

export const LOGIN_REQUEST_SENT = 'LOGIN_REQUEST_SENT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REQ_ERR = 'LOGIN_REQ_ERROR';

function loginReqSent() {
    return {
        type : LOGIN_REQUEST_SENT
    }
}

function loginSuccess() {
    return {
        type : LOGIN_SUCCESS,
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
        dispatch(loginReqSent());
        await requestLogin(email, password)
        .then (function(response){
            storeToken(response.data.access);
            storeRefresh(response.data.refresh);
            dispatch(loginSuccess());
        }).catch (function(error) {
            console.warn(error.response.data.error);
            
            dispatch(loginError(error.response.data.error));
        })
    }
}