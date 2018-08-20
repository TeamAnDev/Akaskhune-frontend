import errors from "../../config/errors";
import {SIGNUP_REQUEST} from '../../actions/signup/signupRequest';
function signupRequestReducer(state={loading:false}, action){
    switch(action.type){
        case(SIGNUP_REQUEST):
            return Object.assign({}, state, {loading:true});
        default :
            return state;
    }
}

export default signupRequestReducer;