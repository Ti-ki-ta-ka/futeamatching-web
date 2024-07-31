import React, { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { getMatches, searchMatches } from '../api/main';
import MainList from './MainList';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';
import spartaBanner from '../assets/spartabannerT.jpg'
import BannerComponent from './BannerComponent';

const MainContainer = () => {
  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMatches = async (page) => {
    try {
      const data = await getMatches(page - 1); 
      setMatches(data.content);
      setTotalPages(data.totalPages); 
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setPage(1);
    try {
      const data = await searchMatches(query, 0);
      setMatches(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error searching teams:', error);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      searchMatches(searchQuery, page - 1).then(data => {
        setMatches(data.content);
        setTotalPages(data.totalPages);
      }).catch(error => {
        console.error('Error searching teams:', error);
      });
    } else {
      fetchMatches(page);
    }
  }, [page, searchQuery]);

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent onSearch={handleSearch} />
      <MainButtonComponent/>
      <BannerComponent imageUrl={spartaBanner}/>
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
