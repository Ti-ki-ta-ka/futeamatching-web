import { client, client2 } from "./client";

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
  const response = await client.post(`/matches/${matchId}/match-applications`);
  console.log(response.data)
  return response.data;
};

export const createMatch = async (createMatchRequest) => {
  const response = await client.post("/matches/create", createMatchRequest);

  if (response.status === 201) {
    console.log('매치 생성 성공 : ', response.data);
  } else {
    console.log('매치 생성 실패 : ', response.data);
  }
  return response.data
};

export const getMyTeamMatches = async (page, matchStatus) => {
  const response = await client2.get("/matches/my-team-matches", {
    params: {
      page: page,
      size: 10,
      matchStatus: matchStatus,
    },
  });

  console.log(response)
  return response.data;
};

export const deleteMatch = async (matchId) => {
  try {
    const response = await client2.delete(`/matches/${matchId}`);
    return response.data;
  } catch (error) {
    console.error('매치 삭제 중 오류 발생:', error);
    throw error;
  }
};