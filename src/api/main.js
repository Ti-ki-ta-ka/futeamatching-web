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

export const postMatches = async (matchId) => {
  const response = await client.post(`/matches/${matchId}/match-applications`, {
    teamId: 22 
  });

  return response.data;
};