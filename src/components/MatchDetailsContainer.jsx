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
      console.log("Match application successful", data);
    } catch (error) {
      console.error("Apply match failed", error);
      alert(error.response?.data?.message); 
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