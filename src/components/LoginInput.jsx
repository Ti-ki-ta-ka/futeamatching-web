import { Button, TextInput } from "@mantine/core";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

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
    window.location.href = `http://localhost:8080/api/v2/oauth/kakako`;
  };

  const handleNaverLogin = () => {
    window.location.href = `http://localhost:8080/api/v2/oauth/naver`;
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

      <Button variant="filled" color="green" fullWidth onClick={handleNaverLogin} style={{ marginTop: '10px' }}>
        네이버 로그인
      </Button>

      <Button
                onClick={handleKakaoLogin}
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  fontSize: "1rem",
                  backgroundColor: "#eeeeee",
                  color: "#000000",
                  "&:hover": { backgroundColor: "gold" },
                }}>
              
                카카오 로그인
              </Button>
    </form>
  );
};

export default LoginInput;