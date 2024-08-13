import React, { useEffect, useState } from 'react';
import { getMyTeam } from '../api/team';
import MyTeam from './MyTeam';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';
import MyTeamButtonComponent from './MyTeamButtonComponent';

const MyTeamContainer = () => {
  const [team, setTeam] = useState(null);

  const fetchMyTeam = async () => {
    try {
      const data = await getMyTeam();
      setTeam(data);
    } catch (error) {
      console.error('Error fetching team:', error);
    }
  };

  useEffect(() => {
      fetchMyTeam();  
  }, []);

  

  return (
    <div style={{padding: '0 400px' }}>
      <HeaderComponent />
      <MainButtonComponent />
      <MyTeamButtonComponent />
      <div>
      <MyTeam team={team} /> 
      </div>
      
    </div>
  );
};


export default MyTeamContainer;
