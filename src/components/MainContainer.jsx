import React, { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { getMatches, searchMatches } from '../api/main';
import MainList from './MainList';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';
import spartaBanner from '../assets/spartabannerT.jpg'
import BannerComponent from './BannerComponent';
import MainListFilter from './MainListFilter';
import DateComponent from './DateComponent';
import dayjs from 'dayjs';

const MainContainer = () => {
  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [isClearSearch,setIsClearSearch] = useState(false);

  const fetchMatches = async (page, date, regions) => {
    try {
      const formattedDate = date ? dayjs(date).format('YYYY-MM-DD') : undefined;
      console.log('Fetching matches with:', { page, formattedDate, regions }); // Debugging log
      const data = await getMatches(page - 1, formattedDate, regions);
      console.log('Fetched matches:', data.content); // Debugging log
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

  const handleRegionFilter = (regions) => {
    setSelectedRegions(regions);
    setPage(1);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setIsClearSearch(true); 
    fetchMatches(1, "",""); 
  };

  useEffect(() => {
    if (searchQuery) {
      searchMatches(searchQuery, page - 1)
        .then((data) => {
          setMatches(data.content);
          setTotalPages(data.totalPages);
        })
        .catch((error) => {
          console.error('Error searching teams:', error);
        });
    } else {
      fetchMatches(page, selectedDate, selectedRegions);
    }
  }, [page, searchQuery, selectedDate, selectedRegions]);

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent onSearch={handleSearch} clearSearch={clearSearch} />
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <MainButtonComponent/>
      <MainListFilter onFilter={handleRegionFilter} disable={Boolean(searchQuery)} isClearSearch={isClearSearch} />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <DateComponent onDateSelect={setSelectedDate} style={{width:'1500px'}}/>
      </div>
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
