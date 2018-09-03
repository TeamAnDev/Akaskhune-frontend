export const POST_TAGS_CHANGE = "POST_TAGS_CHANGE";
export function changeTags(tags)
{
    return {
        type : POST_TAGS_CHANGE,
        tags
    }
}

export const POST_CAPTION_CHANGE = "POST_CAPTION_CHANGE";
export function changeCaption(caption)
{
    return {
        type : POST_CAPTION_CHANGE,
        caption
    }
}