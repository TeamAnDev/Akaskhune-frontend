import {rest, axiosInstance} from '../../config/urls';
function addPostsToBoardAxios(posts, boardId)
{
    let data = {
        posts
    }
   
    return axiosInstance.post(rest.addPostsToBoard(boardId), data);
}
export default addPostsToBoardAxios;