import ImagePicker from 'react-native-image-crop-picker';

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
            cropping: true
          }).then(image => {
            // console.warn(image);
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
            // console.warn(image);
            dispatch(setAvatar(image.path));
          }).catch(err => {
            console.warn(err);
            dispatch(setError(err.error));
          });
     }
}
export const EP_ERROR = 'EP_AVATAR_ERROR';
export const EP_AVATAR_SOURCE_SELECTED = "EP_AVATAR_SOURCE_SELECTED";
export function setError(error)
{
    return {
        type : EP_ERROR,
        error
    }
}
export function setAvatar(avatarSource){
    return {
        type : EP_AVATAR_SOURCE_SELECTED,
        avatarSource
    }
}