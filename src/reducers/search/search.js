import {CHANGE_KEYWORD} from "../../actions/search/searchAction";

export function changeKeywordReducer(state={keyword : ''}, action) {
    switch(action.type) {
        case CHANGE_KEYWORD :
            return Object.assign({}, state, {keyword:action.keyword});
        default :
            return state;    
    }
}
