import { client, client2 } from "./client";

export const getMatches = async (page, date, regions) => {
  const params = {
    page: page,
    size: 5,
    sort: 'createdAt,desc',
    matchDate: date,
  };
  console.log(date);

  if (regions.length > 0) {
    params.regions = regions.join(',');
  }

  const response = await client2.get('/matches', { params });
  return response.data;
};

export const postMatches = async (matchId) => {
  const response = await client.post(`/matches/${matchId}/match-applications`);
  console.log(response.data)
  return response.data;
};

export const createMatch = async (createMatchRequest) => {
  const response = await client.post("/matches/create", createMatchRequest);
  return response
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

export const searchMatches = async (query,page) => {
  try{
    const response = await client2.get("/matches/searches", {
      params:{
        keyword: query,
        page: page,
        size: 5,
        sort: 'CREATED_AT',
    }
    });
    return response.data;
  } catch(error){
    console.error('Error searching matches:',error)
    throw error
  }
};

