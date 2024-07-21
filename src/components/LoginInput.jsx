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
    } catch (error) {
      console.error("Login failed", error);
    }
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

      <Button variant="filled" color="rgba(255, 219, 59, 1)" fullWidth onClick={() => navigate('/signup')} style={{ marginTop: '10px' }}>
        카카오 로그인
      </Button>
    </form>
  );
};

export default LoginInput;
