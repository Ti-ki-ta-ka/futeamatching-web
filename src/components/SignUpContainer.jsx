import { useState } from "react";
import { signUp } from "../api/users";
import SignUpInput from "./SignUpInput.jsx";
import { useNavigate } from 'react-router-dom';

const SignUpContainer = () => {
  const navigate = useNavigate();

  const createUser = async (signUpRequest) => {
    try {
      const data = await signUp(signUpRequest);
      console.log(data) 
      navigate('/login');
    } catch (error) {
      console.error('Error create user:', error);
    }
  };

  return (
    <div>
      <SignUpInput signUp={createUser} />
    </div>
  );
};

export default SignUpContainer;
