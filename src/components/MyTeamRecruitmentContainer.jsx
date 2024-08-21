import React, { useEffect, useState } from 'react';
import { Pagination, Select } from '@mantine/core';
import { getMyTeamRecruitments } from '../api/recruitment.js';
import MyTeamRecruitmentList from './MyTeamRecruitmentList.jsx';
import HeaderComponent from "./HeaderComponent.jsx";
import { IconSoccerField } from '@tabler/icons-react';
import MainButtonComponent from "./MainButtonComponent.jsx"
import { deleteRecruitment } from '../api/recruitment.js';
const MyTeamRecruitmentContainer = () => {
  const [recruitment, setRecruitment] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMyRecruitments = async (page) => {
    try {
      const data = await getMyTeamRecruitments(page - 1);
      setRecruitment(data.content);
      setTotalPages(data.totalPages);
      console.log(data)
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  useEffect(() => {
    fetchMyRecruitments(page);
  }, [page]);

  const handleDelete = async (recruitmentId) => {
    try {
      await deleteRecruitment(recruitmentId);
      alert('매치가 삭제되었습니다.');
      fetchMyRecruitments(page);
    } catch (error) {
      alert('매치를 삭제할 수 있는 권한이 없습니다.');
    }
  };

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent />
      <MainButtonComponent/>
      <MyTeamRecruitmentList recruitments={recruitment} onDelete={handleDelete} />
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

export default MyTeamRecruitmentContainer;
