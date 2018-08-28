import {combineReducers} from 'redux';
import getSelfInfoReducer from './getSelfInfo';
import editUserInfoReducer from './editUserInfo';


const userInfoApp = combineReducers({
    getSelfInfoReducer,
    editUserInfoReducer,
});
export default userInfoApp;
