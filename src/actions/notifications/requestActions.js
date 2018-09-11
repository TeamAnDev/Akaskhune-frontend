import notificationsAxios from '../../axiosRequests/notifications/notifications';

export const NOTIFICATIONS_INIT = "NOTIFICATIONS_INIT";
export const NOTIFICATIONS_REQ_SENT = 'NOTIFICATIONS_REQ_SENT';
export const NOTIFICATIONS_REQ_SUCCESS = 'NOTIFICATIONS_REQ_SUCCESS';
export const NOTIFICATIONS_REQ_ERR = 'NOTIFICATIONS_REQ_ERROR';

export function notificationsInit(){
    return {
        type : NOTIFICATIONS_INIT,
    }
}
function notificationsReqSent() {
    return {
        type : NOTIFICATIONS_REQ_SENT
    }
}
function notificationsSuccess(notifications, nextUrl) {
    return {
        type : NOTIFICATIONS_REQ_SUCCESS,
        notifications,
        nextUrl
    }
}
function notificationsError(error) {
    return {
        type : NOTIFICATIONS_REQ_ERR,
        error
    }
}

export function getNotifications(url) {
    console.warn("heh")
    return async (dispatch) => {
        if(url !== null){
            dispatch(notificationsReqSent());
            await notificationsAxios(url)
            .then (function(response){
                dispatch(notificationsSuccess(response.data.results, response.data.next));
            }).catch (function(error) {
                dispatch(notificationsError(error.response.data.error));
            })
        }
    }
}