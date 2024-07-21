import { client } from "./client";

export const getMatches = async () => {
    const response = await client.get('/matches', {
      params: {
        page: 0,
        size: 10,
        sort: 'createdAt,desc'
      }
    });
  
    return response.data;
  };