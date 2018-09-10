import {axiosInstance, rest} from '../../config/urls'; 

function addBoardAxios(name) {
    let data;
    data = {
        name 
    }
    return axiosInstance.post(rest.addBoards, data);
}

export default addBoardAxios;