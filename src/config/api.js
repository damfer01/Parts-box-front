import axios from 'axios';



const api = axios.create({
    baseURL: 'https://calm-shelf-90293-e32b057ee369.herokuapp.com/',
});

export default api;