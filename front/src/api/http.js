import axios from 'axios';
import history from '../history';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + 'api/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

http.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (token)
    config.headers['Authorization'] = `Bearer ${token}`;

  return config;
});

http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    history.push('/login');
    return error;
  }
  return Promise.reject(error);
});

export default http;
