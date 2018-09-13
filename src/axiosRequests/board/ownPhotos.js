import { axiosInstance, rest } from "../../config/urls";

function requestOwnPhotos(id) {
    return axiosInstance.get(rest.ownPhotosForBoard + id + '/');
}

export default requestOwnPhotos;