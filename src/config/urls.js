import axios from 'axios'

export const rest = {
    login : '/login',
    signup : '/signup'
}

// axios.defaults.baseURL = 'http://192.168.11.214:8080';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

export const axiosInstance = axios.create({
<<<<<<< HEAD
    baseURL: 'http://192.168.11.199:8080',
=======
    baseURL: 'http://192.168.11.214:8080',
>>>>>>> 6af7455051c976fab9851f24d3dd60b0bee04f5a
    timeout:10000,
    headers:{
        'Content-Type': 'application/json',
    }
})

