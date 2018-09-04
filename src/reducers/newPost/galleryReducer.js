import {NEW_POST_IMAGE_SELECTED, NEW_POST_IMAGE_UNSELECTED} from '../../actions/newPost/gallerySelectActions';

export function galleryReducer(state={gallerySelected : false, imageSource : ""}, action)
{
    switch(action.type)
    {
        case(NEW_POST_IMAGE_SELECTED):
            return Object.assign({}, state, {gallerySelected:true, imageSource : action.imageSource})
        case(NEW_POST_IMAGE_UNSELECTED):
            return Object.assign({}, state, {gallerySelected:false, imageSource : ""})
        default :
            return state;
        
    }
}