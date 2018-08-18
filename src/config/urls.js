import axios from 'axios'

export const rest = {
    login : '/login',
}

export const axiosInstance = axios.create({
    baseURL: ''
})