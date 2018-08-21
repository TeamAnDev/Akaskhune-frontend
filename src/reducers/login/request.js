import {LOGIN_REQUEST} from '../../actions/login/loginRequest';

function loginRequestReducer(state={loading:false}, action) {
    switch(action.type) {
        case LOGIN_REQUEST :
            return Object.assign({}, state, {loading:true});
        default :
            return state;    
    }
}

export default loginRequestReducer;
