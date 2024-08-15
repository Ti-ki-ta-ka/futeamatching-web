import React from 'react';
import { Box, Text, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';

const SocialRestrictedPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '0 250px' }}>
    <HeaderComponent />
    <MainButtonComponent />
    <div style={{ color: 'black', textAlign: 'center', marginTop: '20vh', fontSize: '2vw' }}>
        카카오 소셜 로그인을 한 경우 정보 변경이 불가능합니다.
      </div>
    </div>
  );
};

export default SocialRestrictedPage;