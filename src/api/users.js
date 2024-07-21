import { client } from "./client";

export const login = async (loginRequest) => {
  const response = await client.post("/users/log-in", loginRequest);
  if (response.status === 200) {
    const { accessToken, refreshToken } = response.data;
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
