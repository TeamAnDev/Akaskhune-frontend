import {
    ACTIVITIES_INIT,
    ACTIVITIES_REQ_ERR, 
    ACTIVITIES_REQ_SENT, 
    ACTIVITIES_REQ_SUCCESS
} from '../../actions/notifications/activities';
import { rest } from '../../config/urls';

function activitiesRequestReducer(
    state = {loading : true, success : false, errbool : false, error : false, activities : [], url : rest.activities},
    action)
{
    switch(action.type)
    {
        case (ACTIVITIES_INIT):
            return Object.assign({}, state, {activities : [], url : rest.activities});
        case (ACTIVITIES_REQ_SENT):
            return Object.assign({}, state, {loading : true, success : false, errbool : false, error : false});
        case (ACTIVITIES_REQ_ERR):
            return Object.assign({}, state, {loading : false, errbool : true, error : action.error});
        case (ACTIVITIES_REQ_SUCCESS):
            let newActivities = state.activities.concat(action.activities);
            return Object.assign({}, state, {loading : false, success : true, activities : newActivities,  url : action.nextUrl});
        default :
            return state;
    }
}
export default activitiesRequestReducer;