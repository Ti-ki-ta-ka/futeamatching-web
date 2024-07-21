import { useState } from "react";
import { login } from "../api/users";
import LoginInput from "./LoginInput";
import { useNavigate } from 'react-router-dom';

const LoginContainer = () => {
  const [tokens, setTokens] = useState([])
  const navigate = useNavigate();

  const getTokens = async (loginRequest) => {
    try {
      const data = await login(loginRequest);
      console.log(data)
      setTokens(data); 
      navigate('/main');
    } catch (error) {
      console.error('Error get tokens:', error);
    }
  };

  return (
    <div>
      <LoginInput getTokens={getTokens} />
    </div>
  );
};

export default LoginContainer;
