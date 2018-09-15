import { axiosInstance, rest } from "../../config/urls";

function recommendationRequest() {
    return axiosInstance.get(rest.recommendation);
}

export default recommendationRequest;