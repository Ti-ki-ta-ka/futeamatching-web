import React, { useEffect, useState } from 'react';
import { Pagination, Select } from '@mantine/core';
import { getMyTeamMatches } from '../api/main';
import MyTeamMatchList from './MyTeamMatchList';
import HeaderComponent from "./HeaderComponent.jsx";
import { IconSoccerField } from '@tabler/icons-react';
import MainButtonComponent from "./MainButtonComponent"
import { deleteMatch } from '../api/main';
const MyTeamMatchContainer = () => {
  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [matchStatus, setMatchStatus] = useState("");

  const fetchMyTeamMatches = async (page, matchStatus) => {
    try {
      const data = await getMyTeamMatches(page - 1, matchStatus);
      setMatches(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  useEffect(() => {
    fetchMyTeamMatches(page, matchStatus);
  }, [page, matchStatus]);

  const handleDelete = async (matchId) => {
    try {
      await deleteMatch(matchId);
      alert('매치가 삭제되었습니다.');
      fetchMyTeamMatches(page, matchStatus);
    } catch (error) {
      alert('매치를 삭제할 수 있는 권한이 없습니다.');
    }
  };

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent />
      <MainButtonComponent/>
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
      <MyTeamMatchList matches={matches} onDelete={handleDelete} />
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
