import {axiosInstance, rest} from '../../config/urls';

function requestAllBoards() {
    return axiosInstance.get(rest.allBoards);
}

export default requestAllBoards;