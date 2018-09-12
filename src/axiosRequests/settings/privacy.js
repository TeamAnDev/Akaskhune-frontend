import {rest, axiosInstance} from '../../config/urls';

export function getPrivacyAxios()
{
    return axiosInstance.get(rest.privacy);
}
 
export function changePrivacyAxios()
{
    return axiosInstance.post(rest.privacy);
}