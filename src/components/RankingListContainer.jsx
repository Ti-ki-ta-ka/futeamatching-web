import React, { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { getTeamsForRanking } from '../api/team';
import TeamList from './TeamList';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';
import BannerComponent from "./BannerComponent.jsx";
import spartaBanner from '../assets/spartabannerT.jpg';
import TeamListFilterByScore from './TeamListFilterByScore.jsx';
import MainListFilter from './MainListFilter.jsx';

const RankingListContainer = () => {
  const [teams, setTeams] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [regionQuery, setRegionQuery] = useState([]);

  const fetchTeams = async (page, query, region) => {
    try {
      const data = await getTeamsForRanking(query, page - 1, region); 
      setTeams(data.content);
      setTotalPages(data.totalPages); 
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };



  const handleFilter = (query) => {
    setPage(1);
    fetchTeams(1, query, regionQuery);
  };

  const handleRegionFilter = (region) => {
    setRegionQuery(region);
    setPage(1);
    fetchTeams(1, searchQuery, region);
  };


  useEffect(() => {
    fetchTeams(page, searchQuery, regionQuery);
  }, [page, searchQuery, regionQuery]);

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <MainButtonComponent />
        <TeamListFilterByScore onFilter={handleFilter} disable={Boolean(searchQuery)} isClearSearch={isClearSearch} />
        <MainListFilter onFilter={handleRegionFilter} disable={Boolean(searchQuery)} isClearSearch={isClearSearch} />
      </div>
      <BannerComponent imageUrl={spartaBanner} />
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

export default RankingListContainer;