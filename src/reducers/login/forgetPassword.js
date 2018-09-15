import {FORGET_PASSWORD_REQ_ERR, FORGET_PASSWORD_REQ_SENT, FORGET_PASSWORD_REQ_SUCCESS} from '../../actions/login/forgetPassword';

function forgetPasswordReducer(state = {loading : false, success : false, errbool : false, error : ""}, action)
{
    switch(action.type)
    {
        case(FORGET_PASSWORD_REQ_SENT):
            return Object.assign({loading : true, errbool : false, success : false});
        case(FORGET_PASSWORD_REQ_ERR):
            return Object.assign({loading : false, errbool : true, error : action.error});
        case(FORGET_PASSWORD_REQ_SUCCESS):
            return Object.assign({loading : false, success : true});
        default :
            return state 
    }
}
export default forgetPasswordReducer;