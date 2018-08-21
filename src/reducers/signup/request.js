import errors from "../../config/errors";
import {storeToken} from '../../config/token';
import {SIGNUP_REQUEST, SIGNUP_REQ_ERROR, SIGNUP_SUCCES} from '../../actions/signup/signupRequest';
function signupRequestReducer(state={loading:false, err:""}, action){
    switch(action.type){
        case(SIGNUP_REQUEST):
            return Object.assign({}, state, {loading:true});
        case(SIGNUP_REQ_ERROR):
            return  Object.assign({}, state, {err:action.error, loading : false});
        case(SIGNUP_SUCCES):
            return Object.assign({}, state, {loading : false});
        default :
            return state;
    }
}

export default signupRequestReducer;