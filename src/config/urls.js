import axios from 'axios'

export const rest = {
    login : '/login',
    signup : '/signup'
}

export const axiosInstance = axios.create({
    baseURL: 'http://192.168.11.199:8080',
    timeout:10000,
    headers:{
        'Content-Type': 'application/json',
    }
})