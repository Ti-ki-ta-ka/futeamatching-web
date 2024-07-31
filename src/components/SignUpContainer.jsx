import { useState } from "react";
import { login } from "../api/users";
import { signUp } from "../api/users";
import SignUpInput from "./SignUpInput.jsx";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const SignUpContainer = () => {
  const { login: loginContext } = useAuth();
  const navigate = useNavigate();

  const createUser = async (signUpRequest) => {
    try {
      const data = await signUp(signUpRequest);
      console.log(data) 
      navigate('/login');
    } catch (error) {
      console.error('Error create user:', error);
      throw error
    }
  };

  const getTokens = async (loginRequest) => {
    try {
      const data = await login(loginRequest);
      loginContext(); 
      navigate('/main');
    } catch (error) {
      console.error('Error getting tokens:', error);
      throw error
    }
  };

  return (
    <div>
      <SignUpInput signUp={createUser} getTokens={getTokens} />
    </div>
  );
};

export default SignUpContainer;
