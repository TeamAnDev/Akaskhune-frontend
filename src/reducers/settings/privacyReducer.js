import {CHANGE_PRIVACY_SUCCESS, GET_PRIVACY_SUCCESS, PRIVACY_INIT} from '../../actions/settings/privacyActions';

function privacyReducer (state = {privacy : false, getSuccess : false, changeSuccess : false}, actions)
{
    switch(actions.type)
    {
        case(PRIVACY_INIT) :
            return Object.assign({}, state, {privacy : false, getSuccess : false, changeSuccess : false });
        case(CHANGE_PRIVACY_SUCCESS):
            return Object.assign({}, {privacy : !state.privacy, changeSuccess : true});
        case(GET_PRIVACY_SUCCESS):
            return Object.assign({}, state, {privacy : actions.is_private, getSuccess : true});
        default :
            return state;
    }
}

export default privacyReducer;