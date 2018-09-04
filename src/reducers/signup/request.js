import errors from "../../config/errors";
import {storeToken} from '../../config/token';
import {SIGNUP_REQUEST, SIGNUP_REQ_ERROR, SIGNUP_SUCCES} from '../../actions/signup/signupRequest';
function signupRequestReducer(state={loading:false, err:"", signupSucces:false}, action){
    switch(action.type){
        case(SIGNUP_REQUEST):
            return Object.assign({}, state, {loading:true, signupSucces:false});
        case(SIGNUP_REQ_ERROR):
            return  Object.assign({}, state, {err:action.error, loading : false});
        case(SIGNUP_SUCCES):
            // action.navigation.navigate('SignupCompleteProfile')
            return Object.assign({}, state, {loading : false, signupSucces:true});
        default :
            return state;
    }
}

export default signupRequestReducer;