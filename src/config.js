import axios from 'axios'
const instance = axios.create({
    baseURL: "localhost:8080/v1/api/profs"
})

export default instance;