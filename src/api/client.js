import axios from "axios";

export const client = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    "Access-Control-Allow-Origin": "*", // CORS
  },
});

export const client2 = axios.create({
  baseURL: 'http://localhost:8080/api/v2',
  headers: {
    "Access-Control-Allow-Origin": "*", // CORS
  },

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

client2.interceptors.request.use(
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