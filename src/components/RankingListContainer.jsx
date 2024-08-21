import React, { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { getTeamsForRanking } from '../api/team';
import RankingList from './RankingList';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';
import BannerComponent from "./BannerComponent.jsx";
import spartaBanner from '../assets/spartabannerT.jpg';
import RankingListFilter from './RankingListFilter.jsx';

const RankingListContainer = () => {
  const [teams, setTeams] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [regionQuery, setRegionQuery] = useState('');
  const itemsPerPage = 5;

  const fetchTeams = async (page, region) => {
    try {
      const data = await getTeamsForRanking(page - 1, region, itemsPerPage);
      setTeams(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const handleRegionFilter = (region) => {
    setRegionQuery(region);
    setPage(1); 
    fetchTeams(1, region);
  };

  useEffect(() => {
    fetchTeams(page, regionQuery);
  }, [page, regionQuery]);

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <MainButtonComponent />
        <RankingListFilter onFilter={handleRegionFilter} disable={false} />
      </div>
      <BannerComponent imageUrl={spartaBanner} />
      <RankingList teams={teams} page={page} itemsPerPage={itemsPerPage} />
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