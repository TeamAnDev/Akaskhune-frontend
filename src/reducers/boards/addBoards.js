import {ADD_BOARD_REQ_ERR, ADD_BOARD_REQ_SENT, ADD_BOARD_REQ_SUCCESS} from '../../actions/board/addBoardRequest';

function addBoardReducer(state = {loading : false, success : false, errbool : false, 
                        error : "" , board :{}}, action)
{
    switch(action.type)
    {
        case(ADD_BOARD_REQ_SENT):
            return Object.assign({}, state, {loading : true, success : false, errbool : false, error : "" , board : {}});
        case(ADD_BOARD_REQ_ERR):
            return Object.assign({}, state, {error : action.error, errbool : true, loading : false});
        case(ADD_BOARD_REQ_SUCCESS):
            return Object.assign({}, state, {loading : false, success : true, board : action.board});
        default :
            return state;
    }
}

export default addBoardReducer;