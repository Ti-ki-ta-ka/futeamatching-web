import React, { useEffect, useState } from 'react';
import { getTeam } from '../api/team';
import TeamDetail from './TeamDetail';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';

const TeamDetailContainer = ({ teamId }) => {
  const [team, setTeam] = useState(null);

  const fetchTeam = async () => {
    try {
      const data = await getTeam(teamId);
      setTeam(data);
    } catch (error) {
      console.error('Error fetching team:', error);
    }
  };

  useEffect(() => {
    if (teamId) {
      fetchTeam();
    }
  }, [teamId]);

  

  return (
    <div style={{padding: '0 400px' }}>
      <HeaderComponent />
      <MainButtonComponent />
      <div>
      <TeamDetail team={team} /> 
      </div>
      
    </div>
  );
};


export default TeamDetailContainer;
