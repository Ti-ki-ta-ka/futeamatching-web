import { client, client2 } from "./client";

export const getRecruitments = async (page) => {
  const response = await client2.get('/recruitments', {
    params: {
      page: page,
      size: 5,
    },
  });
  return response.data;
};

export const postRecruitmentApplication = async(recruitmentId) => {
  console.log(`recruitmentId: ${recruitmentId}`)
  const response = await client2.post(`/recruitments/${recruitmentId}/recruitment-applications`)
  console.log(`response: ${response}`)
  return response
}

export const postRecruitment = async(PostRecruitmentRequest) => {
  const response = await client2.post("/leader/recruitments", PostRecruitmentRequest);

  if (response.status === 201) {
    console.log('팀 생성 성공 : ', response.data);
  } else {
    console.log('팀 생성 실패 : ', response.data);
  }
  return response
}

export const deleteRecruitment = async (recruitmentId) => {
  try {
    const response = await client2.delete(`/leader/recruitments/${recruitmentId}`);
    return response.data;
  } catch (error) {
    console.error('구인 공고 삭제 중 오류 발생:', error);
    throw error;
  }
};

export const getRecruitmentApplications = async (recruitmentId, page) => {
  try {
    const response = await client2.get(`/leader/recruitments/${recruitmentId}/recruitment-applications`, {
      params: {
        page: page,
        size: 5,
        sort:'string',
        responseStatus: null
      },
    });
    console.dir(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching recruitment applications:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getMyTeamRecruitments = async (page) => {
  try {
  const response = await client2.get(`/leader/recruitments`, {
          params: {
              page: page,
              size: 5
          },
      });
      console.log(response)
      return response.data;
  } catch (error) {
      console.error('Error fetching recruitment applications:', error);
      throw error;
  }
};

export const replyRecruitmentApplication = async (recruitmentId, applicationId, approveStatus) => {
  try {
      const response = await client2.patch(`/leader/recruitments/${recruitmentId}/recruitment-applications/${applicationId}`, {
          responseStatus: approveStatus // Pass as a plain string
      });
      return response.data;
  } catch (error) {
      console.log(error)
      throw error;
  }
};

