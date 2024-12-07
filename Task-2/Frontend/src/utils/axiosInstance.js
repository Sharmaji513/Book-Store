import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Backend URL
  withCredentials: true,
});

export default axiosInstance;
