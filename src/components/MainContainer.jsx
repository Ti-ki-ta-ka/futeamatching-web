// MainContainer.jsx
import React, { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { getMatches } from '../api/main';
import MainList from './MainList';
import HeaderComponent from './HeaderComponent';

const MainContainer = () => {
  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMatches = async (page) => {
    try {
      const data = await getMatches(page - 1); // 페이지 인덱스는 0부터 시작
      setMatches(data.content);
      setTotalPages(data.totalPages); // API에서 총 페이지 수를 받아야 합니다
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
