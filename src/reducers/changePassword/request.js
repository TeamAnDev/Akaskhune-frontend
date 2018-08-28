import {CHANGE_PASSWORD_REQ, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_ERROR} from '../../actions/changePassword/changePasswordRequest';

function changePasswordRequestReducer(state={loading:false, err:"", toastMessage:"", success:false}, action) {
    switch(action.type) {
        case CHANGE_PASSWORD_REQ :
            return Object.assign({}, state, {loading:true});
        case CHANGE_PASSWORD_ERROR :
            return Object.assign({}, state, {loading: false, toastMessage:"", err:action.error, success:false});
        case CHANGE_PASSWORD_SUCCESS :
            return Object.assign({}, state, {loading:false, toastMessage:action.message, err:"", success:true})    
        default :
            return state;
    }
}

export default changePasswordRequestReducer;