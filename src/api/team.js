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