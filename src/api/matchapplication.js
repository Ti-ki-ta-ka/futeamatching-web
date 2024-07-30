import { client } from "./client";

export const getMyApplications = async() => {
    const response = await client.get("/matches/match-applications/my-applications");
  
    if (response.status === 200) {
      console.log('매치 신청 내역 가져오기 성공 : ', response.data);
    } else {
      console.log(' 매치 신청 내역 가져오기 실패 : ', response.data);
    }
    return response.data
  }