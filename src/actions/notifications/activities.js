
import activitiesAxios from '../../axiosRequests/notifications/activities';
export const ACTIVITIES_INIT = "ACTIVITIES_INIT";
export const ACTIVITIES_REQ_SENT = 'ACTIVITIES_REQ_SENT';
export const ACTIVITIES_REQ_SUCCESS = 'ACTIVITIES_REQ_SUCCESS';
export const ACTIVITIES_REQ_ERR = 'ACTIVITIES_REQ_ERROR';

export function activitiesInit(){
    return {
        type : ACTIVITIES_INIT,
    }
}
function activitiesReqSent() {
    return {
        type : ACTIVITIES_REQ_SENT
    }
}
function activitiesSuccess(activities, nextUrl) {
    return {
        type : ACTIVITIES_REQ_SUCCESS,
        activities,
        nextUrl
    }
}
function activitiesError(error) {
    return {
        type : ACTIVITIES_REQ_ERR,
        error
    }
}

export function getActivities(url) {
    return async (dispatch) => {
        if(url !== null){
            dispatch(activitiesReqSent());
            await activitiesAxios(url)
            .then (function(response){
                console.warn(response.data);
                dispatch(activitiesSuccess(response.data.results, response.data.next));
            }).catch (function(error) {
                dispatch(activitiesError(error.response.data.error));
            })
        }
    }
}