import getSelfInfoAxiosRequest from "../../axiosRequests/userInfo/getSelfInfo";

export const GETTING_SELF_INFO_STARTED = "GETTING_SELF_INFO_STARTED";
export const GETTING_SELF_INFO_ERR = "GETTING_SELF_INFO_ERR";
export const GETTING_SELF_INFO_SUCCES = "GETTING_SELF_INFO_SUCCES";
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
function getInfoSucces(data){
    return({
        type : GETTING_SELF_INFO_SUCCES,
        data
    })
}
export function getSelfInfo(){
    return async (dispatch) => {
        dispatch(getInfoStarted());
        await getSelfInfoAxiosRequest().then(function(response) {
            dispatch(getInfoSucces(response.data));
        }).catch(function(error){
            dispatch(getInfoError(error.response.data.error));
        })
    }    
}