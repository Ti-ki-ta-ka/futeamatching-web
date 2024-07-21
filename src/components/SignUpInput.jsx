import { Button, TextInput } from "@mantine/core";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const SignUpInput = ({ signUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const data = await signUp({
        email,
        password,
        confirmPassword,
        name
      });
    } catch (error) {
      console.error("SignUp failed", error);
    }
  };

  return (
    <form
      onSubmit={handleSignUp}
      style={{
        width: 480,
        margin: "auto",
        marginTop: 300
      }}
    >
      <TextInput
        label="Name"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

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
      <TextInput
        label="ConfirmPassword"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => setconfirmPassword(e.target.value)}
        type="password"
        required
      />

      <Button variant="outline" color="green" type="submit" fullWidth style={{ marginTop: '10px' }}>
        회원가입
      </Button>

    </form>
  );
};

export default SignUpInput;
