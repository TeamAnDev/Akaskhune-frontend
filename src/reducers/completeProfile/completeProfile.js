import {CP_ERROR, CP_AVATAR_SOURCE_SELECTED} from '../../actions/completeProfile/CompleteProfileActions';
import {combineReducers} from 'redux';
function completeProfileReducer(state={err:"",avatarSource:""}, action){
    switch(action.type){
        case (CP_ERROR):
            return Object.assign({}, state, {err : action.error});
        case(CP_AVATAR_SOURCE_SELECTED):
            return Object.assign({}, state, {avatarSource : action.avatarSource});
        default:
            return state;
    }

}
const completeProfileApp = combineReducers({
    completeProfileReducer,

});
export default completeProfileApp;