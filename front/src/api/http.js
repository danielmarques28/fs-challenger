import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + 'api/',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http;
