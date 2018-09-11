import {combineReducers} from 'redux';
import notificationsRequestReducer from './notificationsRequestReducer';

const notificationsApp = combineReducers({
    notificationsRequestReducer,

})
export default notificationsApp;