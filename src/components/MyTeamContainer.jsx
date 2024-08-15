import React, { useEffect, useState } from 'react';
import { deleteTeam, getMyTeam } from '../api/team';
import MyTeam from './MyTeam';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';
import MyTeamButtonComponent from './MyTeamButtonComponent';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const MyTeamContainer = () => {
  const [team, setTeam] = useState(null);
  const navigate = useNavigate();

  const fetchMyTeam = async () => {
    try {
      const data = await getMyTeam();
      setTeam(data);
    } catch (error) {
      console.error('Error fetching team:', error);
    }
  };
  const handleDelete = async (teamId) => {
    try {
      await deleteTeam(teamId);
      alert('팀이 삭제되었습니다.');
      navigate('/noteampage')
    } catch (error) {
      alert('팀을 삭제할 수 있는 권한이 없습니다.');
    }
  }

  useEffect(() => {
      fetchMyTeam();  
  }, []);

  

  

  return (
    <div style={{padding: '0 400px' }}>
      <HeaderComponent />
      <MainButtonComponent />
      <MyTeamButtonComponent />
      <MyTeam team={team} /> 
      <div
      style={{
        width:'100%',
        display:'flex',
        justifyContent:'center'
      }}
      >
      <Button
      radius="md"
      mt="xl"
      size="xs"
      color="red"
      style={{
        width:'20%',
      }}
      onClick={() => handleDelete(team.id)}
      >
        팀 삭제
        </Button>
      </div>
    </div>
  );
};


export default MyTeamContainer;
