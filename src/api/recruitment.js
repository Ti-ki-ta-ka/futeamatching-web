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
  const response = await client2.post(`/recruitments/${recruitmentId}/recruitment-applications`)
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