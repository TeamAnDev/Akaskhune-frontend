import {axiosInstance, rest} from '../../config/urls';

function popularTagsRequest() {
    return axiosInstance.get(rest.popularTags);
}

export default popularTagsRequest;