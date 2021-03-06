import {combineReducers} from 'redux';
import {NEW_PASSWORD_CHANGED, OLD_PASSWORD_CHANGED, CONFIRM_PASSWORD_CHANGED, CHANGE_PASSWORD_INIT} from '../../actions/changePassword/changePasswordAction'
import changePasswordRequestReducer from './request';
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
function passwordCheckReducer(state={newPassword:"" ,oldPassword:"", confirmPassword:"", oldValid:false, newValid:false, confirmValid:false}, action) {
    switch(action.type) {
        case CHANGE_PASSWORD_INIT:
            return Object.assign({}, state, {newPassword:"" ,oldPassword:"", confirmPassword:"", oldValid:false, newValid:false, confirmValid:false});
        case NEW_PASSWORD_CHANGED :
            if(action.newPassword !== state.oldPassword && PASSWORD_REGEX.test(action.newPassword))
                return Object.assign({}, state, {newPassword: action.newPassword, newValid:true});
            return Object.assign({}, state, {newPassword: action.newPassword, newValid:false});
        case OLD_PASSWORD_CHANGED :
            if(PASSWORD_REGEX.test(action.oldPassword))
                return Object.assign({}, state, {oldPassword: action.oldPassword, oldValid:true});
           return Object.assign({}, state, {oldPassword: action.oldPassword, oldValid:false});
        case CONFIRM_PASSWORD_CHANGED : 
            if(action.confirmPassword === state.newPassword && PASSWORD_REGEX.test(action.confirmPassword))
                return Object.assign({}, state, {confirmPassword: action.confirmPassword, confirmValid:true})
             return Object.assign({}, state, {confirmPassword: action.confirmPassword, confirmValid:false})
        default:
            return state;        
    }
}

function changePasswordReducer(state={oldPassword:"", newPassword:"", confirmPassword:""}, action) {
    switch(action.type) {
        case NEW_PASSWORD_CHANGED :
            return Object.assign({}, state, {newPassword: action.newPassword});
        case OLD_PASSWORD_CHANGED :
            return Object.assign({}, state, {oldPassword: action.oldPassword});
        case CONFIRM_PASSWORD_CHANGED : 
            return Object.assign({}, state, {confirmPassword: action.confirmPassword})
        default:
            return state;        
    }
}

const changePasswordApp = combineReducers({
    changePasswordReducer,
    passwordCheckReducer,
    changePasswordRequestReducer
});

export default changePasswordApp;