import {combineReducers} from 'redux';
import {FILE_UPLOAD_ERR, FILE_UPLOAD_SUCCES, FILE_UPLOADING} from '../../actions/file/fileUploadReq';
function fileReducer(state = {loading:false, success:false, errbool : false, err:""}, action)
{
    switch(action.type){
        case(FILE_UPLOADING):
            return Object.assign({}, state, {loading:true});
        case(FILE_UPLOAD_ERR):
            return Object.assign({}, state, {loading:true});
        default :
            return state;
    }
}

const fileApp = combineReducers({fileReducer});
export default fileApp;