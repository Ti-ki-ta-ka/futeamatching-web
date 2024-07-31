import { client } from "./client";

export const postTeam = async(createTeamRequest) => {
    const response = await client.post("/teams", createTeamRequest);
  
    if (response.status === 201) {
      console.log('팀 생성 성공 : ', response.data);
    } else {
      console.log('팀 생성 실패 : ', response.data);
    }
    return response.data
  }

  export const getTeams = async (query,page) => {
    const sortBy = query || 'createdAt';
    const response = await client.get('/teams', {
      params: {
        region: null,
        page: page >= 0 ? page : 0,
        size: 5,
        sort_by: sortBy,
        sort_direction: 'desc'
      },
    });
  
    return response.data;
  };

  export const searchTeams = async (query, page) => {
    try {
      const response = await client.get(`/teams/searches`, {
        params: {
          name: query,
          page,
          size: 5,
          sort_by: 'createdAt',
          sort_direction: 'desc',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error searching teams:', error);
      throw error;
    }
  };
  

  export const getTeam = async (teamId) => {
    const response = await client.get(`/teams/${teamId}`);
    
    return response.data;
  };