import getSelfInfoAxiosRequest from "../../axiosRequests/userInfo/getSelfInfo";

export const GETTING_SELF_INFO_STARTED = "GETTING_SELF_INFO_STARTED";
export const GETTING_SELF_INFO_ERR = "GETTING_SELF_INFO_ERR";
export const GETTING_SELF_INFO_SUCCES = "GETTING_SELF_INFO_SUCCES";
export const GETTING_SELF_INIT = "GETTING_SELF_INIT";

export function getSelfInfoInit() {
    return {
        type : GETTING_SELF_INIT,
    }
}
function getInfoStarted(){
    return({
        type : GETTING_SELF_INFO_STARTED,

    })
}
function getInfoError(error){
    return({
        type : GETTING_SELF_INFO_ERR,
        error
    })
}
function getInfoSucces(data, username){
    return({
        type : GETTING_SELF_INFO_SUCCES,
        data,
        username
    })
}
export function getSelfInfo(username){
    return async (dispatch) => {
        dispatch(getInfoStarted());
        await getSelfInfoAxiosRequest(username).then(function(response) {
            dispatch(getInfoSucces(response.data, username));
        }).catch(function(error){
            dispatch(getInfoError(error.response.data.error));
        })
    }    
}

export const GETTING_USER_INFO_STARTED = "GETTING_USER_INFO_STARTED";
export const GETTING_USER_INFO_ERR = "GETTING_USER_INFO_ERR";
export const GETTING_USER_INFO_SUCCES = "GETTING_USER_INFO_SUCCES";
function getUserStarted(){
    return({
        type : GETTING_USER_INFO_STARTED,

    })
}
function getUserError(error){
    return({
        type : GETTING_USER_INFO_ERR,
        error
    })
}
function getUserSucces(data, username){
    return({
        type : GETTING_USER_INFO_SUCCES,
        data,
        username
    })
}
export function getUserInfo(username){
    return async (dispatch) => {
        dispatch(getUserStarted());
        await getSelfInfoAxiosRequest(username).then(function(response) {
            dispatch(getUserSucces(response.data, username));
        }).catch(function(error){
            dispatch(getUserError(error.response.data.error));
        })
    }    
}
