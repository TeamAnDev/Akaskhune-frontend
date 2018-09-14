import {combineReducers} from 'redux';
import notificationsRequestReducer from './notificationsRequestReducer';
import handleFollowReqReducer from './handleFollowReqReducer';
const notificationsApp = combineReducers({
    notificationsRequestReducer,
    handleFollowReqReducer,
})
export default notificationsApp;