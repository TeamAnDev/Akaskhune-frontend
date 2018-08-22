var ImagePicker = require('react-native-image-picker');

export const CP_PHOTO_PICKER_SELECTED = "CP_PHOTO_PICKER_SELECTED";
let options = {
    title: 'عکس پروفایل را انتخاب کنید',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };
export function pickPhoto(){
    return (dispatch) => {
        ImagePicker.showImagePicker(options, (response) => {
            console.warn('Response = ', response);
            if (response.error !== "") {
              dispatch(setError(response.error));
            }
            else {
              let source = { uri: response.uri };
              dispatch(setAvatar(source));
            }
          });
    }
}

export const CP_ERROR = 'CP_ERROR';
export const CP_AVATAR_SOURCE_SELECTED = "CP_AVATAR_SOURCE_SELECTED";
export function setError(error)
{
    return {
        type : CP_ERROR,
        error
    }
}
export function setAvatar(avatarSource){
    return {
        type : CP_AVATAR_SOURCE_SELECTED,
        avatarSource
    }
}