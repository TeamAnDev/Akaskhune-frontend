import completeProfileAxiosRequest from '../../axiosRequests/completeProfile/completeProfile';
import axios from 'axios';
import {axiosInstance} from '../../config/urls';
import {rest} from '../../config/urls';
import { storeToken , storeRefresh } from '../../config/token';
export const CP_REQUEST = "CP_REQUEST";

function completeProfileRequestSent ()
{
    return {
        type : CP_REQUEST
    }
    
}
export const CP_SUCCES = "CP_SUCCES";
function completeProfileSucces ()
{
    return {
        type : CP_SUCCES,
    }
    
}
export const CP_REQ_ERROR = "CP_REQ_ERROR";
function completeProfileError (error)
{
    return {
        type : CP_REQ_ERROR,
        error
    }
}
export function completeProfile(username, fullname, bio, avatar, password, email){
    return async (dispatch) => {
        dispatch(completeProfileRequestSent());
        await completeProfileAxiosRequest(username, fullname, bio, avatar, password, email).then(function(response) {
            storeToken(response.data.token.access);
            storeRefresh(response.data.token.refresh);
            dispatch(completeProfileSucces());
        }).catch(function(error){
            
            dispatch(completeProfileError(error.response.data));
        })
    }    
}
