import { axiosInstance, rest } from "../../config/urls";

function requestDeleteBoard(id) {
    return axiosInstance.delete(rest.deleteBoard + id + '/');
}

export default requestDeleteBoard;