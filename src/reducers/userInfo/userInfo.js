import {combineReducers} from 'redux';
import getSelfInfoReducer from './getSelfInfo';
import editUserInfoReducer from './editUserInfo';
import avatarSelectReducer from "./avatarSelect";

const userInfoApp = combineReducers({
    getSelfInfoReducer,
    editUserInfoReducer,
    avatarSelectReducer,
});
export default userInfoApp;
