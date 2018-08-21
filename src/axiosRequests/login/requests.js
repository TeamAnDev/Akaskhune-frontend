import {rest, axiosInstance} from './urls'


export function requestLogin(email, password) {
    axiosInstance.post(
        rest.login,
        {email, password}
    ).then(function(response) {
        return response.json()
    }).catch(function(error) {
        console.log(error)
    })
}