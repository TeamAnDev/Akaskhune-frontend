export const POST_SET_IMAGE = "POST_SET_IMAGE";
export function setPost(postImageSource)
{
    return {
        type : POST_SET_IMAGE,
        postImageSource
    }
}

export const RESET_POST_SELECTING = "RESET_POST_SELECTING";
export function resetSelectingPost()
{
    return {
        type : RESET_POST_SELECTING
    }
}
