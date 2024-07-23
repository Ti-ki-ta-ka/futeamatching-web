import React, { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { getTeams } from '../api/team';
import TeamList from './TeamList';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';

const TeamListContainer = () => {
  const [teams, setTeams] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTeams = async (page) => {
    try {
      const data = await getTeams(page - 1); 
      setTeams(data.content);
      setTotalPages(data.totalPages); 
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  useEffect(() => {
    fetchTeams(page);
  }, [page]);

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent />
      <MainButtonComponent/>
      <TeamList teams={teams} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Pagination
        page={page}
        onChange={setPage}
        total={totalPages}
        position="center"
        mt="md"
        mb="md"
        color="rgba(56, 196, 10, 1)"
      />
      </div>
    </div>
  );
};

export default TeamListContainer;
