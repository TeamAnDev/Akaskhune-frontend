import {combineReducers} from 'redux';
import getSelfInfoReducer from './getSelfInfo';
import getUserInfoReducer from './getUserInfo';
import editUserInfoReducer from './editUserInfo';


const userInfoApp = combineReducers({
    getSelfInfoReducer,
    editUserInfoReducer,
    getUserInfoReducer,
});
export default userInfoApp;
