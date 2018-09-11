import {ADD_POSTS_TO_BOARD_REQ_ERR ,
        ADD_POSTS_TO_BOARD_REQ_SENT, 
        ADD_POSTS_TO_BOARD_REQ_SUCCESS,
        SELECT_OWN_POST, DESELECT_OWN_POST, EMPTY_OWN_POSTS} from '../../actions/board/addPostsToBoard';

function addPostsToBoardReducer(state = {loading : false, success : false, errbool : false, error : "", posts:[]}, action) {
    switch(action.type)
    {
        case(ADD_POSTS_TO_BOARD_REQ_SENT):
            return Object.assign({}, state, {loading : true, success : false, errbool : false, error : ""});
        case(ADD_POSTS_TO_BOARD_REQ_ERR):
            return Object.assign({}, state, {error : action.error, errbool : true, loading : false});
        case(ADD_POSTS_TO_BOARD_REQ_SUCCESS):
            return Object.assign({}, state, {loading : false, success : true});
        case(EMPTY_OWN_POSTS) : 
            let emptyPosts = [];
            return Object.assign({}, state, {posts: emptyPosts})
        case(SELECT_OWN_POST) :
            let newPosts1 = state.posts.concat([action.id]);
            return Object.assign({}, state, {posts: newPosts1});
        case(DESELECT_OWN_POST) :
            let newPosts2 = [];
            for (let i = 0; i < state.posts.length; i++) {
                if(state.posts[i] !== action.id) {
                    newPosts2.push(state.posts[i]);
                }
            }
            return Object.assign({}, state, {posts: newPosts2});
        default : 
            return state;

    }
}
export default addPostsToBoardReducer;