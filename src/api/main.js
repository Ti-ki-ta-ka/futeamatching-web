import { client } from "./client";

export const getMatches = async (page) => {
  const response = await client.get('/matches', {
    params: {
      page: page,
      size: 5,
      sort: 'createdAt,desc',
    },
  });

  return response.data;
};