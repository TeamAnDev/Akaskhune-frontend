import {axiosInstance, rest} from '../../config/urls';

function searchTagRequest(keyword) {
    let data = {keyword};
    return axiosInstance.post(rest.searchTag, data);
}

export default searchTagRequest;