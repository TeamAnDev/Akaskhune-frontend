import {axiosInstance, rest} from '../../config/urls'; 

function requestAllBoards(url) {
    return axiosInstance.get(url);
}

export default requestAllBoards;