import changePasswordAxiosReq from '../../axiosRequests/changePassword/changePassword';

export const CHANGE_PASSWORD_REQ = "CHANGE_PASSWORD_REQ";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_ERROR = "CHANGE_PASSWORD_ERROR";

export function changePasswordReqSent() {
    return({
        type : CHANGE_PASSWORD_REQ
    })
}

export function changePasswordSuccess(message) {
    return({
        type : CHANGE_PASSWORD_SUCCESS,
        message
    })
}

export function changePasswordError(error) {
    return({
        type : CHANGE_PASSWORD_ERROR,
        error
    })
}

export function changePassword(oldPassword, newPassword) {
    return async (dispatch) => {
        dispatch(changePasswordReqSent());
        await changePasswordAxiosReq(oldPassword, newPassword).then(function(response){
            dispatch(changePasswordSuccess(response.data.message));
        }).catch(function(error) {
            console.warn(error);
            dispatch(changePasswordError(error.response.data.error));
        })
    }
}