import axios from "axios";

export const client = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  
});


client.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken'); 
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);