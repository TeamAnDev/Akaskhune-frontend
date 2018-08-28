import {combineReducers} from 'redux';
import avatarSelectReducer from './avatarSelect';
import {FILE_UPLOAD_ERR, FILE_UPLOAD_SUCCES, FILE_UPLOADING, FILE_UPLOAD_PREPARE} from '../../actions/file/fileUploadReq';
function fileReducer(state = {loading:false, success:false, errbool : false, error:"", url:""}, action)
{
    switch(action.type){
        case(FILE_UPLOAD_PREPARE):
            return ({loading:false, success:false, errbool : false, error:"", url:""});
        case(FILE_UPLOADING):
            return Object.assign({}, state, {loading:true});
        case(FILE_UPLOAD_ERR):
            return Object.assign({}, state, {loading:false, errbool:true, error:action.error});
        case(FILE_UPLOAD_SUCCES):
            return Object.assign({}, state, {loading:false, success:true, url : action.url});
        default :
            return state;
    }
}

const fileApp = combineReducers({
    fileReducer,
    avatarSelectReducer
 });
export default fileApp;