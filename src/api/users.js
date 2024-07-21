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
