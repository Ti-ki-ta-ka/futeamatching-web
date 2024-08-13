import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { naverSocialLogin } from "../api/users";
import { useAuth } from "../AuthContext";

const OAuthNaverPage = () => {
    let count = 0;
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();

    
    useEffect(() => {
      if(count === 0){
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code"); 
    if (code) {
        naverSocialLogin(code);
        setIsAuthenticated(true);
        alert("로그인에 성공하였습니다. 메인페이지로 이동합니다");
        navigate("/main");
      } else {
        alert("회원가입에 실패하였습니다.");
        navigate("/login");
      }
      count += 1
      }
        }, [navigate,setIsAuthenticated]);


  return (
    <div>
      로그인 시도중...
    </div>
  );
};

export default OAuthNaverPage;
