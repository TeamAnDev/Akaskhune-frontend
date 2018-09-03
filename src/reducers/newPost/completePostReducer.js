import {POST_CAPTION_CHANGE, POST_TAGS_CHANGE} from '../../actions/newPost/completePostActions';

export function completePostReducer(state={caption:"", tags:[]}, action)
{
    switch(action.type)
    {
        case(POST_CAPTION_CHANGE):
            return Object.assign({}, state, {caption : action.caption});
        case(POST_TAGS_CHANGE):
            return Object.assign({}, state, {tags : action.tags});
        default:
            return state;
    }
}