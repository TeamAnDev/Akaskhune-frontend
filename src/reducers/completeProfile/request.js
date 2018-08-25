import errors from "../../config/errors";
import {CP_REQUEST, CP_REQ_ERROR, CP_SUCCES} from '../../actions/completeProfile/CompleteProfileRequest';
function completeProfileRequestReducer(state={loading:false, err:"", completeProfileSucces:false}, action){
    switch(action.type){
        case(CP_REQUEST):
            return Object.assign({}, state, {loading:true});
        case(CP_REQ_ERROR):
            return  Object.assign({}, state, {err:action.error, loading : false});
        case(CP_SUCCES):
            return Object.assign({}, state, {loading : false, err:"succes", completeProfileSucces:true});
        default :
            return state;
    }
}

export default completeProfileRequestReducer;