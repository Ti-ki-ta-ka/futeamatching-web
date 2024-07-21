import { Button, TextInput, Text, Paper } from "@mantine/core";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const SignUpInput = ({ signUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
        marginTop: 100
      }}
    >
      <Text fw={500} ta="center">FuTeaMatching⚽</Text>
      <Paper shadow="xs" padding="md" withBorder style={{ marginTop: '10px', padding: '20px' }}>
        <TextInput
          label="Name"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />

        <TextInput
          label="Email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />
        <TextInput
          label="Password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          style={{ marginBottom: '20px' }}
        />
        <TextInput
          label="Confirm Password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          required
          style={{ marginBottom: '30px' }}
        />

        <Button
          variant="outline"
          color="green"
          type="submit"
          fullWidth
          style={{ marginBottom: '20px' }}
        >
          회원가입
        </Button>
      </Paper>
    </form>
  );
};
export default SignUpInput;
