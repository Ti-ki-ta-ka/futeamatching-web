import React, { useEffect, useState } from 'react';
import { getMyTeamMembers } from '../api/team';
import MyTeamMember from './MyTeamMember';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';
import MyTeamButtonComponent from './MyTeamButtonComponent';

const MyTeamMemberContainer = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const fetchMyTeamMembers = async () => {
    try {
      const data = await getMyTeamMembers();
      console.log(data)
      setTeamMembers(data);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  useEffect(() => {
    fetchMyTeamMembers();  
  }, []);

  

  return (
    <div style={{padding: '0 400px' }}>
      <HeaderComponent />
      <MainButtonComponent />
      <MyTeamButtonComponent />
      <div>
      <MyTeamMember teamMembers={teamMembers} /> 
      </div>
      
    </div>
  );
};


export default MyTeamMemberContainer;
