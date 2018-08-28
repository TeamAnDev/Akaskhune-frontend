import ImagePicker from 'react-native-image-crop-picker';
import {uploadFile} from './fileUploadReq';
export const PHOTO_PICKER_PEPARE = "PHOTO_PICKER_PREPARE";
export function pickerPrepare(){
    return {
        type : PHOTO_PICKER_PEPARE,
    }
}
let options = {
    title: 'عکس پروفایل را انتخاب کنید',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };
export function pickPhoto(){
    return (dispatch) => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
          }).then(image => {
            dispatch(uploadFile(image.path));
            dispatch(setAvatar(image.path));
          }).catch(err => {
            console.warn(err);
            dispatch(setError(err.error));
          });
    }
}
export function takePhoto(){
    return (dispatch) => {
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true
          }).then(image => {
            dispatch(uploadFile(image.path));
            dispatch(setAvatar(image.path));
          }).catch(err => {
            console.warn(err);
            dispatch(setError(err.error));
          });
     }
}
export const PP_ERROR = 'PP_ERROR';
export const PP_AVATAR_SOURCE_SELECTED = "PP_AVATAR_SOURCE_SELECTED";
export function setError(error)
{
    return {
        type : PP_ERROR,
        error
    }
}
export function setAvatar(avatarSource){
    return {
        type : PP_AVATAR_SOURCE_SELECTED,
        avatarSource
    }
}