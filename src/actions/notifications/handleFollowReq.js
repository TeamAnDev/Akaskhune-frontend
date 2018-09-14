
import handleFollowReqAxios from '../../axiosRequests/notifications/handleFollowReq';
import {notificationsInit, getNotifications} from './requestActions';
import {rest} from '../../config/urls';
export const HANDLE_FOLLOW_REQ_SENT = "HANDLE_FOLLOW_REQ_SENT";
export const HANDLE_FOLLOW_REQ_SUCCESS = "HANDLE_FOLLOW_REQ_SUCCESS";
export const HANDLE_FOLLOW_REQ_ERROR = "HANDLE_FOLLOW_REQ_ERROR";
function followReqSent()
{
    return {
        type : HANDLE_FOLLOW_REQ_SENT
    }
}
function followReqSuccess()
{
    return {
        type : HANDLE_FOLLOW_REQ_SUCCESS
    }
}
function followReqError(error)
{
    return {
        type : HANDLE_FOLLOW_REQ_ERROR,
        error
    }
}

export function handleFollowReq(username, type)
{
    return async (dispatch) => {
        dispatch(followReqSent());
        await handleFollowReqAxios(username, type)
        .then (function(response){
            dispatch(followReqSuccess());
            dispatch(notificationsInit());
            dispatch(getNotifications(rest.notifications))
        }).catch (function(error) {
            dispatch(followReqError(error));
        })
    }
}