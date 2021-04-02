import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://andela-teamwork.herokuapp.com/api'
});
// https://andela-teamwork.herokuapp.com/api
// http://localhost:5000/api
export default instance;