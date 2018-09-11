import tagPostsRequest from "../../axiosRequests/tagPosts/tagPosts";

export const TAGPOSTS_REQ_SENT = "TAGPOSTS_REQ_SENT";
export const TAGPOSTS_REQ_SUCCESS = "TAGPOSTS_REQ_SUCCESS";
export const TAGPOSTS_REQ_ERR = "TAGPOSTS_REQ_ERR";
export const TAG_NAME = "TAG_NAME";

function tagPostsReqSent() {
    return({
        type : TAGPOSTS_REQ_SENT
    })
}

function tagPostsReqSuccess(images, next) {
    return({
        type : TAGPOSTS_REQ_SUCCESS,
        images,
        next
    })
}

function tagPostReqErr(error) {
    return({
        type : TAGPOSTS_REQ_ERR,
        error
    })
}

export function tagName(tag) {
    return({
        type : TAG_NAME,
        tag
    })
}

export function requestTagPosts(tag) {
    return async (dispatch) => {
        dispatch(tagPostsReqSent());
        await tagPostsRequest(tag)
        .then(function(response){
            dispatch(tagPostsReqSuccess(response.data.results, response.data.next));
        }).catch(function(error){
            dispatch(tagPostReqErr(error.response.data.error));
        })
    }
}