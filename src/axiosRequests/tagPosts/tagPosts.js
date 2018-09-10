import { axiosInstance, rest } from "../../config/urls";

function tagPostsRequest(tag) {
    return axiosInstance.get(rest.singlePost + tag + "/")
}

export default tagPostsRequest;