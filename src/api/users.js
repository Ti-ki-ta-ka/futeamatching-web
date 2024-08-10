import { client, client2 } from "./client";

export const login = async (loginRequest) => {
  const response = await client.post("/users/log-in", loginRequest);
  if (response.status === 200) {
    const { accessToken, refreshToken,userName } = response.data;
    console.log('Login successful:', response.data);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  } else {
    console.error('Login failed');
  }
  return response.data;
};

export const signUp = async(signUpRequest) => {
  const response = await client.post("/users/sign-up", signUpRequest);

  if (response.status === 201) {
    console.log('회원가입 성공 : ', response.data);
  } else {
    console.log('회원가입 실패 : ', response.data);
  }
  return response.data
}

export const modifyProfileName = async(modifyProfileRequest) => {
  const response = await client.put("/users/profile/name", modifyProfileRequest);

  if (response.status === 200) {
    console.log('프로필 수정 성공 : ', response.data);
  } else {
    console.log('프로필 수정 실패 : ', response.data);
  }
  return response.data
}

export const modifyProfilePassword = async(modifyPasswordRequest) => {
  const response = await client.put("/users/profile/password", modifyPasswordRequest);

  if (response.status === 200) {
    console.log('비밀번호 변경 성공 : ', response.data);
  } else {
    console.log('비밀번호 변경 실패 : ', response.data);
  }
  return response.data
}

export const kakaoSocialLogin = async (code) => {
  try {
    const response = await client2.get(`/login/oauth2/code/kakao?code=${code}`);
    localStorage.setItem("accessToken", response.data);
  } catch (error) {
    console.error("Kakao Social Login failed:", error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || error.message };
  }
};