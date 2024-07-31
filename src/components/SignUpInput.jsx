import { Button, TextInput, Text, Paper } from "@mantine/core";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const SignUpInput = ({ signUp,getTokens }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
  
    if (
      name.length < 2 ||
      name.length > 12 ||
      !/^[가-힣a-zA-Z0-9]+$/.test(name)
    ) {
      alert("닉네임은 2~12자의 한글, 영문, 숫자로 설정해주세요.");
      return;
    }
  
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
      alert("이메일은 영어 소문자와 숫자 및 @로 구성되어야합니다.");
      return;
    }
  
    if (
      password.length < 8 ||
      password.length > 15
      )
     {
      alert("비밀번호는 최소 8자 이상, 15자 이하여야만 합니다.");
      return;
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
        password
      )
    ) {
      alert("비밀번호는 알파벳 대소문자(a~z, A~Z), 숫자(0~9), 특수문자가 포함되어야 합니다.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      // 회원가입 요청
      const signUpData = await signUp({
        email,
        password,
        confirmPassword,
        name
      });
      alert("회원가입에 성공하였습니다. 자동 로그인 후 메인 페이지로 이동합니다.");

      // 회원가입 성공 시 로그인 요청
      const loginData = await getTokens({
        email,
        password
      });

      // 로그인 성공 시 추가적인 동작 (예: 토큰 저장)
      navigate('/main');  // 메인 페이지로 이동
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("이미 존재하는 이메일입니다.");
      }else{
        alert("회원가입이나 로그인에 실패하였습니다.")
      }
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
        <Button
          variant="outline"
          color="green"
          fullWidth
          style={{ marginBottom: '20px' }}
          onClick={() => navigate('/login')}
        >
          로그인으로 돌아가기
        </Button>
      </Paper>
    </form>
  );
};
export default SignUpInput;
