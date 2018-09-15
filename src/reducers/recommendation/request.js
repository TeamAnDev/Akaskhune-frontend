import { RECOM_REQ_SENT, RECOM_REQ_SUCCESS, RECOM_REQ_ERR } from "../../actions/recommendation/recommendationRequest";
import {combineReducers} from 'redux';

function recomRequestReducer(state={loading: false, success:false, error:'', recommendations:[]}, action) {
    switch(action.type) {
        case RECOM_REQ_SENT :
            return Object.assign({}, state, {loading:true});
        case RECOM_REQ_SUCCESS :
            return Object.assign({}, state, {loading:false, success:true, recommendations:action.recommendations});
        case RECOM_REQ_ERR :
            return Object.assign({}, state, {loading:false, success:false, error:action.error});
        default : 
            return state;
    }
}

export default recommendationApp = combineReducers({
    recomRequestReducer
})