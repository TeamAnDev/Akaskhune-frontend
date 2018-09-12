import { changePrivacyAxios, getPrivacyAxios } from "../../axiosRequests/settings/privacy";



export const GET_PRIVACY_SUCCESS  = "GET_PRIVACY_SUCCESS";
function getPrivacySuccess(is_private)
{
    return {
        type : GET_PRIVACY_SUCCESS,
        is_private
    }
}

export function getPrivacy() {
    return async (dispatch) => {
        await getPrivacyAxios()
        .then(function(response){
            dispatch(getPrivacySuccess(response.data.is_private));
        }).catch(function(error){
            console.warn(error);
        })
    }
}

export const CHANGE_PRIVACY_SUCCESS  = "CHANGE_PRIVACY_SUCCESS";
function changePrivacySuccess()
{
    return {
        type : CHANGE_PRIVACY_SUCCESS,
    }
}

export function changePrivacy() {
    return async (dispatch) => {
        await changePrivacyAxios()
        .then(function(response){
            dispatch(changePrivacySuccess());
        }).catch(function(error){
            console.warn(error);
        })
    }
}

export const PRIVACY_INIT = "PRIVACY_INIT";
export function privacyInit(){
    return {
        type : PRIVACY_INIT,
    }
}