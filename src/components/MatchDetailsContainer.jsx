import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Text } from '@mantine/core';
import HeaderComponent from "./HeaderComponent.jsx";
import MatchDetails from './MatchDetails.jsx';
import { postMatches } from "../api/main";


const MatchDetailsContainer = () => {
  const location = useLocation();
  const match = location.state;
  const navigate = useNavigate();

  if (!match) {
    return <Text>Match details not found.</Text>;
  }

  const applyMatch = async (matchId) => {
    try {
      const data = await postMatches(matchId);
      navigate('/main');
      alert(`축하드립니다 매치가 성공적으로 신청되었습니다!
        
        매치가 성사되기를 바랍니다!
    
        매치 정보
        매치 날짜 : ${data.matchPost.matchDate}
        상대 활동 지역 : ${data.matchPost.region}
        매치 상세 지역 : ${data.matchPost.location}
        
        `);
    } catch (error) {
      alert(`매치 신청에 실패했습니다. 나중에 다시 시도해주세요
        (팀이 없거나 동일한 날의 2개이상의 매치신청
        혹은 본인 팀의 매치에 신청한건 아닌지 확인해주세요!)`); 
    }
  };

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent />
      <MatchDetails match={match} postMatch={applyMatch}/>
    </div>
  );
};

export default MatchDetailsContainer;