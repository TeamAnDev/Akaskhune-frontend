import { VISIBLE_SHARE, INVISIBLE_SHARE } from "../../actions/home/share";

function sharePostReducer(state={visible : true}, action) {
    switch(action.type) {
        case VISIBLE_SHARE :
            return Object.assign({}, state, {visible : true});
        case INVISIBLE_SHARE :
            return Object.assign({}, state, {visible : false});
        default :
            return state;
    }
}

export default sharePostReducer;