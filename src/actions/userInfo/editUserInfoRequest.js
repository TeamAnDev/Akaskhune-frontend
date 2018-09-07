import editUserInfoAxiosRequest from "../../axiosRequests/userInfo/editUserInfo";
import {requestInfo} from '../profile/profileRequest';
export const SETTING_SELF_INFO_STARTED = "SETTING_SELF_INFO_STARTED";
export const SETTING_SELF_INFO_ERR = "SETTING_SELF_INFO_ERR";
export const SETTING_SELF_INFO_SUCCES = "SETTING_SELF_INFO_SUCCES";
function setInfoStarted(){
    return({
        type : SETTING_SELF_INFO_STARTED,

    })
}
function setInfoError(error){
    return({
        type : SETTING_SELF_INFO_ERR,
        error
    })
}
function setInfoSucces(){
    return({
        type : SETTING_SELF_INFO_SUCCES,
    })
}

export function editUserInfo(fullname, bio, avatar){
    return async (dispatch) => {
        dispatch(setInfoStarted());
        await editUserInfoAxiosRequest(fullname, bio, avatar).then(function(response) {
            console.warn(response)
            dispatch(requestInfo());
            dispatch(setInfoSucces());
        }).catch(function(error){
            dispatch(setInfoError(error.response.data.error))
        })
    }    
}

export const SETTING_PREV_USER_INFO = "SETTING_PREV_USER_INFO";
export function setPrevDetails(fullname, bio)
{
    return({
        type : SETTING_PREV_USER_INFO,
        bio,
        fullname
    })
}

export const BIO_CHANGED = "EDIT_PROFILE_BIO_CHANGED";
export const FULLNAME_CHANGED = "EDIT_PROFILE_FULLNAME_CHANGED";
export function changeBio(bio)
{
    return({
        type : BIO_CHANGED,
        bio
    })
}
export function changeFullname(fullname)
{
    return({
        type : FULLNAME_CHANGED,
        fullname
    })
}