import {
    NOTIFICATIONS_INIT,
    NOTIFICATIONS_REQ_ERR, 
    NOTIFICATIONS_REQ_SENT, 
    NOTIFICATIONS_REQ_SUCCESS
} from '../../actions/notifications/requestActions';
import { rest } from '../../config/urls';

function notificationsRequestReducer(
    state = {loading : true, success : false, errbool : false, error : false, notifications : [], url : rest.notifications},
    action)
{
    switch(action.type)
    {
        case (NOTIFICATIONS_INIT):
            return Object.assign({}, state, {notifications : [], url : rest.notifications});
        case (NOTIFICATIONS_REQ_SENT):
            return Object.assign({}, state, {loading : true, success : false, errbool : false, error : false});
        case (NOTIFICATIONS_REQ_ERR):
            return Object.assign({}, state, {loading : false, errbool : true, error : action.error});
        case (NOTIFICATIONS_REQ_SUCCESS):
            let newNotifications = state.notifications.concat(action.notifications);
            return Object.assign({}, state, {loading : false, success : true, notifications : newNotifications, url : action.nextUrl});
        default :
            return state;
    }
}
export default notificationsRequestReducer;