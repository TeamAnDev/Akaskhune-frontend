import {combineReducers} from 'redux';
import notificationsRequestReducer from './notificationsRequestReducer';
import handleFollowReqReducer from './handleFollowReqReducer';
import activitiesRequestReducer from './activitiesReducer';
const notificationsApp = combineReducers({
    notificationsRequestReducer,
    handleFollowReqReducer,
    activitiesRequestReducer,
})
export default notificationsApp;