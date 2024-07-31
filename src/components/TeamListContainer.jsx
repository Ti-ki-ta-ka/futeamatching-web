import React, { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { getTeams,searchTeams } from '../api/team';
import TeamList from './TeamList';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';
import BannerComponent from "./BannerComponent.jsx";
import spartaBanner from '../assets/spartabannerT.jpg'
import TeamListFilterByScore from './TeamListFilterByScore.jsx'

const TeamListContainer = () => {
  const [teams, setTeams] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isClearSearch,setIsClearSearch] = useState(false);

  const fetchTeams = async (page,query) => {
    try {
      const data = await getTeams(query,page - 1); 
      setTeams(data.content);
      setTotalPages(data.totalPages); 
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setPage(1);
    try {
      const data = await searchTeams(query, 0);
      setTeams(data.content);
      setTotalPages(data.totalPages);
      setIsClearSearch(false);
    } catch (error) {
      console.error('Error searching teams:', error);
    }
  };

  const handleFilter = (query) => {
    setPage(1);
    fetchTeams(0,query);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setIsClearSearch(true); 
    fetchTeams(1, ""); 
  };

  useEffect(() => {
    if (searchQuery) {
      searchTeams(searchQuery, page - 1).then(data => {
        setTeams(data.content);
        setTotalPages(data.totalPages);
      }).catch(error => {
        console.error('Error searching teams:', error);
      });
    } else {
      fetchTeams(page);
    }
  }, [page, searchQuery]);

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent onSearch={handleSearch} clearSearch={clearSearch} />
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <MainButtonComponent/>
      <TeamListFilterByScore onFilter={handleFilter} disable={Boolean(searchQuery)} isClearSearch={isClearSearch}/>
      </div>
      <BannerComponent imageUrl={spartaBanner}/>
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
