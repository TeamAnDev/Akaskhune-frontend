import {rest, axiosInstance} from './urls'

function requestLogin(email, password) {
    axiosInstance.post(
        rest.login,
        {email, password}
    ).then(function(response) {
        console.log(response)
    }).catch(function(error) {
        console.log(error)
    })
}