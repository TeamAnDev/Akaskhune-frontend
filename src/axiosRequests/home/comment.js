import {axiosInstance, rest} from '../../config/urls'
function commentAxios(postId, comment, replyId){
    let data ;
    console.warn(replyId);
    if(replyId)
    {
        data = {
            text : comment, 
            reply_id : replyId
        }
    }
    else 
    {
        data = {
            text : comment
        }
    }
    return axiosInstance.post(rest.commentCreate(postId.toString()), data);
}
export default commentAxios;
