export const POST_SET_IMAGE = "POST_SET_IMAGE";
export function setPost(postImageSource)
{
    return {
        type : POST_SET_IMAGE,
        postImageSource
    }
}
