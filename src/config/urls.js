import axios from 'axios'

export const rest = {
    login : '/login',
    signup : '/signup'
}

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout:10000,
    headers:{
        'Content-Type': 'application/json',
    }
})