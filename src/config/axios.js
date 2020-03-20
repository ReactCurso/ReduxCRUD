import axios from 'axios'
const axiosClient = axios.create({
    baseURL: 'http://172.18.0.1:4000'
})
export default axiosClient;