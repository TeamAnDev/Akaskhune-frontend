import { DELETE_BOARD_REQ_SUCCESS } from "../../actions/board/deleteBoardRequest";

function deleteBoardRequestReducer(state={deleteSuccess : false}, action) {
    switch(action.type) {
        case DELETE_BOARD_REQ_SUCCESS:
            return Object.assign({}, state, {deleteSuccess : true});
        default :
            return state;
    }
}

export default deleteBoardRequestReducer;