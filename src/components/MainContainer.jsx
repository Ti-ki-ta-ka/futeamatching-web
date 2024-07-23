import React, { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { getMatches } from '../api/main';
import MainList from './MainList';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';

const MainContainer = () => {
  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMatches = async (page) => {
    try {
      const data = await getMatches(page - 1); 
      setMatches(data.content);
      setTotalPages(data.totalPages); 
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  useEffect(() => {
    fetchMatches(page);
  }, [page]);

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent />
      <MainButtonComponent/>
      <MainList matches={matches} />
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

export default MainContainer;
