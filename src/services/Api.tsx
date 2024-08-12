const axios = require('axios');

const apiLink = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL.toString() : '';
const api = axios.create({
    baseURL: apiLink
});

export { apiLink, api };