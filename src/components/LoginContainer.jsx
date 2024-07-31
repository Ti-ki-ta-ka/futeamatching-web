import { useState } from "react";
import { login } from "../api/users";
import LoginInput from "./LoginInput";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const LoginContainer = () => {
  const { login: loginContext } = useAuth();
  const navigate = useNavigate();

  const getTokens = async (loginRequest) => {
    try {
      const data = await login(loginRequest);
      loginContext(); 
      navigate('/main');
      return data
    } catch (error) {
      console.error('Error getting tokens:', error);
    }
  };

  return (
    <div>
      <LoginInput getTokens={getTokens} />
    </div>
  );
};

export default LoginContainer;
