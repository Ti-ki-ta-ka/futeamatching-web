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

export const createMatch = async(createMatchRequest) => {
  const response = await client.post("/matches/create", {
    ...createMatchRequest,
    teamId: 22 
  });

  if (response.status === 201) {
    console.log('매치 생성 성공 : ', response.data);
  } else {
    console.log('매치 생성 실패 : ', response.data);
  }
  return response.data
}