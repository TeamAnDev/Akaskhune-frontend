import errors from "../../config/errors";
import {SIGNUP_REQUEST, SIGNUP_REQ_ERROR, SIGNUP_SUCCES} from '../../actions/signup/signupRequest';
function signupRequestReducer(state={loading:false, err:"", token:""}, action){
    switch(action.type){
        case(SIGNUP_REQUEST):
            return Object.assign({}, state, {loading:true});
        case(SIGNUP_REQ_ERROR):
            return  Object.assign({}, state, {err:action.error, loading : false});
        case(SIGNUP_SUCCES):
            return Object.assign({}, state, {token:action.token, loading : false});
        default :
            return state;
    }
}

export default signupRequestReducer;