import {setPost,  resetSelectingPost} from './postActions';
import ImagePicker from 'react-native-image-crop-picker';
import showSucces from '../../components/Toasts/showSucces';

export const POST_CAMERA_OPENING_ERR = "POST_CAMERA_OPENING_ERR";
export function serError(error)
{
    return {
        type : POST_CAMERA_OPENING_ERR,
        error
    }
}

export const POST_CAMERA_OPENING_START = "POST_CAMERA_OPENING_START";
export function setCameraOpend()
{
    return {
        type : POST_CAMERA_OPENING_START
    }
}

export function takePhoto(){
    return (dispatch) => {
        dispatch(resetSelectingPost());
        ImagePicker.openCamera({
            width: 800,
            height: 450,
            cropping: true
          }).then(image => {
            dispatch(setPost(image.path));
          }).catch(err => {
            dispatch(setError(err.error));
          });
     }
}
