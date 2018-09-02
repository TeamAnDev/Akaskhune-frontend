import {LOGIN_REQUEST_SENT, LOGIN_SUCCESS, LOGIN_REQ_ERR} from '../../actions/login/loginRequest';

function loginRequestReducer(state={loading:false, loginSuccess:false, err:""}, action) {
    switch(action.type) {
        case LOGIN_REQUEST_SENT :
            return Object.assign({}, state, {loading:true, loginSuccess:false});
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {loading:false, loginSuccess:true});
        case LOGIN_REQ_ERR:
            return Object.assign({}, state, {err:action.error, loading:false});    
        default :
            return state;    
    }
}

export default loginRequestReducer;
