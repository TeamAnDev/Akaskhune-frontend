import {navigate} from '../../../NavigationService';
import ImagePicker from 'react-native-image-crop-picker';
import {setPost} from './postActions';
export const NEW_POST_IMAGE_SELECTED = "NEW_POST_IMAGE_SELECTED";
export function imageSelect(imageSource)
{
    return {
        type : NEW_POST_IMAGE_SELECTED,
        imageSource
    }
}

export const NEW_POST_IMAGE_UNSELECTED = "NEW_POST_IMAGE_UNSELECTED";
export function imageUnselect()
{
    return {
        type : NEW_POST_IMAGE_UNSELECTED,
    }
}


export function cropPhoto(imagePath){
    return (dispatch) => {
        ImagePicker.openCropper({
            path: imagePath,
            width: 800,
            height: 450,
            cropping: true
          }).then(image => {
            dispatch(setPost(image.path));
            
            navigate('NewPostComplete');
          }).catch(err => {
            dispatch(setError(err.error));
          });
     }
}
