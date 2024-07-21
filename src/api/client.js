import axios from "axios";

export const client = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
      "Access-Control-Allow-Origin": "*", // CORS
    },
  });