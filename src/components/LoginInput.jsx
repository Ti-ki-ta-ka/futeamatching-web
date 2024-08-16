import { Button, TextInput, Text } from "@mantine/core";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import kakao_login_medium_narrow from '../assets/kakao_login_medium_narrow.png';
import btnG_naver from '../assets/btnG_naver.png';
import TermsModal from "./TermsModal";

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

  useEffect(()=>{
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: "cAYdVptUCJxBlEfLbcdO", // Replace with your Naver client ID
      callbackUrl: "http://localhost:5173/oauth/naver", // Replace with your Naver callback URL
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 40 }
    });
    naverLogin.init();
  },[])

  return (
    <form
      onSubmit={handleLogin}
      style={{
        width: 480,
        margin: "auto",
        marginTop: 300,
        border:'1px solid green',
        padding:'50px'
      }}
    >
      <Text fw={500} ta="center">FuTeaMatching⚽</Text>
      <TextInput
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{marginTop:'1vh'}}
      />

      <TextInput
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
        style={{marginTop:'1vh'}}
      />

      <Button variant="filled" color="green" type="submit" fullWidth style={{ marginTop: '20px' }}>
        로그인
      </Button>

      <Button variant="outline" color="green" fullWidth onClick={() => navigate('/signup')} style={{ marginTop: '10px' }}>
        회원가입
      </Button>

      
      

      <div
      style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
      }}>
        <div
        style={{
          display:'flex'
        }}>
        <Text
        style={{
          fontSize:'0.6vw',
          margin:'2vh 0.2vw 0vh 0vw'
        }}>회원 가입 시  </Text>
        <Text
         style={{
          fontSize:'0.6vw',
          marginTop:'2vh',
          color:'green'
        }}>
        서비스 이용 약관
        </Text>
        <Text
         style={{
          fontSize:'0.6vw',
          marginTop:'2vh',
          margin:'2vh 0.2vw 0vh 0vw'
        }}>
        과
        </Text>
        <Text
         style={{
          fontSize:'0.6vw',
          marginTop:'2vh',
          color:'green'
        }}>
         개인정보 처리방침
        </Text>
        <Text
         style={{
          fontSize:'0.6vw',
          marginTop:'2vh'
        }}>
        에 동의하게 됩니다.
        </Text>
        </div>
        
              <div
  style={{
    display: 'flex',
    alignItems: 'center',
    marginTop: '5vh',
    color: '#6c757d', // Adjust text color if needed
  }}
>
  <hr
    style={{
      flex: 1,
      border: 'none',
      borderTop: '1px solid #6c757d', // Adjust line color if needed
      margin: '0 1rem',
    }}
  />
  <span>또는 다른 서비스 계정으로 로그인</span>
  <hr
    style={{
      flex: 1,
      border: 'none',
      borderTop: '1px solid #6c757d', // Adjust line color if needed
      margin: '0 1rem',
    }}
  />
</div>
        <Button
        id='naverIdLogin'
        onClick={handleNaverLogin}
        style={{
          backgroundColor:'white',
          marginTop:'1vh',
          display:'none'
        }}

          >
        </Button>

      <Button
      onClick={handleKakaoLogin}
      style={{
        backgroundImage: `url(${kakao_login_medium_narrow})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',  
        width: '45%',
        height: '4vh',
        marginTop:'1vh'
      }}
      >
    </Button>

      </div>
      <TermsModal/>
      
      
    </form>
  );
};

export default LoginInput;