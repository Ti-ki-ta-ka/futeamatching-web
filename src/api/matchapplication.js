import { client, client2 } from "./client";

export const getMyApplications = async () => {
  const response = await client.get("/matches/match-applications/my-applications");

  if (response.status === 200) {
    console.log('매치 신청 내역 가져오기 성공 : ', response.data);
  } else {
    console.log(' 매치 신청 내역 가져오기 실패 : ', response.data);
  }
  return response.data;
};

export const getMyMatchApplications = async (matchId, page, approveStatus) => {
  try {
    const response = await client2.get(`/matches/${matchId}/match-applications`, {
      params: {
        page: page,
        size: 10,
        approveStatus: approveStatus,
      },
    });

    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching match applications:', error);
    throw error;
  }
};

export const replyMatchApplication = async (matchId, applicationId, request) => {
    try {
        const response = await client2.patch(`/matches/${matchId}/match-applications/${applicationId}`, request);
        return response.data;
    } catch (error) {
        console.error('응답하기 요청 실패:', error);
        throw error;
    }
};
