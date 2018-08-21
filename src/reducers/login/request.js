import {LOGIN_REQUEST_SENT} from '../../actions/login/loginRequest';

function loginRequestReducer(state={loading:false}, action) {
    switch(action.type) {
        case LOGIN_REQUEST_SENT :
            return Object.assign({}, state, {loading:true});
        default :
            return state;    
    }
}

export default loginRequestReducer;
