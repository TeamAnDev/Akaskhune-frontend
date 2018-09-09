import {axiosInstance, rest} from '../../config/urls';

function requestSingleBoard(id) {
    return axiosInstance.get(rest.singleBoard + id + "/");
}

export default requestSingleBoard;