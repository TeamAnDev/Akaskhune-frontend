import {CP_BIO_CHANGED,CP_NAME_AND_FAMILY_CHANGED,CP_USER_NAME_CHANGED} from '../../actions/completeProfile/CompleteProfileFormActions';
import {combineReducers} from 'redux';
import completeProfileRequestReducer from './request';
function completeProfileReducer(state={ bio:"", username:"", nameAndFamily:"", usernameValidation:false}, action){
    switch(action.type){
        case(CP_BIO_CHANGED):
            return Object.assign({}, state, {bio:action.bio});
        case(CP_USER_NAME_CHANGED):
            if(action.username == "")
                return Object.assign({}, state, {username:action.username, usernameValidation:false});
            return Object.assign({}, state, {username:action.username, usernameValidation:true});
        case(CP_NAME_AND_FAMILY_CHANGED):
            return Object.assign({}, state, {nameAndFamily : action.nameAndFamily});
        default:
            return state;
    }

}
const completeProfileApp = combineReducers({
    completeProfileReducer,
    completeProfileRequestReducer

});
export default completeProfileApp;