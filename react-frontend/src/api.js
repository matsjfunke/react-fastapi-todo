/*
api.js creates an Axios instance named api with a base URL of http://localhost:8000,
which can be imported / used throughout the frontend app 
to send HTTP requests to the specified server.
*/
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000',
})

export default api;
