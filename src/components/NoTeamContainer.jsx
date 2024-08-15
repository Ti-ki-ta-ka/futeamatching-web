import React from 'react';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';

const NoTeamContainer = () => {

  return (
    <div style={{ padding: '0 250px' }}>
    <HeaderComponent />
    <MainButtonComponent />
    <div style={{ color: 'black', textAlign: 'center', marginTop: '20vh', fontSize: '2vw' }}>
        아직 팀이 없으시네요! 팀을 생성해보는건 어떨까요?
      </div>
    </div>
      
  )

};

export default NoTeamContainer;