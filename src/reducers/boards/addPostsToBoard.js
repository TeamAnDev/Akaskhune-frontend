import {ADD_POSTS_TO_BOARD_REQ_ERR ,
        ADD_POSTS_TO_BOARD_REQ_SENT, 
        ADD_POSTS_TO_BOARD_REQ_SUCCESS} from '../../actions/board/addPostsToBoard';

function addPostsToBoardReducer(state = {loading : false, success : false, errbool : false, error : ""}, action) {
    switch(action.type)
    {
        case(ADD_POSTS_TO_BOARD_REQ_SENT):
            return Object.assign({}, state, {loading : true, success : false, errbool : false, error : ""});
        case(ADD_POSTS_TO_BOARD_REQ_ERR):
            return Object.assign({}, state, {error : action.error, errbool : true, loading : false});
        case(ADD_POSTS_TO_BOARD_REQ_SUCCESS):
            return Object.assign({}, state, {loading : false, success : true});
        default : 
            return state;

    }
}
export default addPostsToBoardReducer;