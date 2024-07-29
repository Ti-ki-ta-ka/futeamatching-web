import React, { useEffect, useState } from 'react';
import { Pagination, Select } from '@mantine/core';
import { getMyTeamMatches } from '../api/main';
import MyTeamMatchList from './MyTeamMatchList';
import HeaderComponent from "./HeaderComponent.jsx";
import { IconSoccerField } from '@tabler/icons-react';

const MyTeamMatchContainer = () => {
  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [matchStatus, setMatchStatus] = useState("");

  const fetchMyTeamMatches = async (page, matchStatus) => {
    try {
      const data = await getMyTeamMatches(page - 1, matchStatus);
      console.log(data)
      setMatches(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  useEffect(() => {
    fetchMyTeamMatches(page, matchStatus);
  }, [page, matchStatus]);

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent />
      <div style={{ display: 'flex', justifyContent: 'left', marginTop: '1%', marginLeft: '1%', marginBottom: '15px' }}>
        <Select
          rightSection={<IconSoccerField size="1.5rem" />}
          value={matchStatus}
          onChange={setMatchStatus}
          data={[
            { value: '', label: 'All' },
            { value: 'true', label: 'Active' },
            { value: 'false', label: 'Inactive' },
          ]}
        />
      </div>
      <MyTeamMatchList matches={matches} />
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

export default MyTeamMatchContainer;
