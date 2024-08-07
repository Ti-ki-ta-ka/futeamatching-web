import { Button, TextInput } from "@mantine/core";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const LoginInput = ({ getTokens }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const data = await getTokens({
        email,
        password
      });
      alert(`오늘도 ${data.userName}님의 매치를 응원합니다! `)
    } catch (error) {
      alert("잘못된 회원정보입니다. 아이디와 비밀번호를 확인해주세요.")
      console.error("Login failed", error);
    }
  };

  const handleKakaoLogin = () => {
    if (!window.Kakao.isInitialized()) {
      console.error("Kakao SDK is not initialized");
      return;
    }

    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log(authObj);
        localStorage.setItem('accessToken', authObj.access_token);
        localStorage.setItem('refreshToken', authObj.refresh_token);
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: (res) => {
            console.log(res);
            localStorage.setItem('kakaoUser', JSON.stringify(res));
          },
          fail: (error) => {
            console.error("Failed to get user information", error);
          }
        });
      },
      fail: (err) => {
        console.error("Kakao login failed", err);
      },
    });
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{
        width: 480,
        margin: "auto",
        marginTop: 300
      }}
    >
      <TextInput
        label="Email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextInput
        label="Password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
      />

      <Button variant="filled" color="green" type="submit" fullWidth style={{ marginTop: '20px' }}>
        로그인
      </Button>

      <Button variant="outline" color="green" fullWidth onClick={() => navigate('/signup')} style={{ marginTop: '10px' }}>
        회원가입
      </Button>

      <Button variant="filled" color="green" fullWidth onClick={() => navigate('/signup')} style={{ marginTop: '10px' }}>
        네이버 로그인
      </Button>

      

      <Button variant="filled"
       color="rgba(255, 219, 59, 1)"
       fullWidth
       onClick={handleKakaoLogin} 
       style={{ marginTop: '10px' }}
       >
       
      <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
    alt="카카오 로그인 버튼" />
      </Button>
    </form>
  );
};

export default LoginInput;
