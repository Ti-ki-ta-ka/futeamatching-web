import React, { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import HeaderComponent from './HeaderComponent';
import MainButtonComponent from './MainButtonComponent';
import RecruitmentList from './RecruitmentList';
import { getRecruitments } from '../api/recruitment';

const RecruitmentListContainer = () => {
  const [recruitments, setRecruitments] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchRecruitments = async (page) => {
    console.log(page)
    try {
      const data = await getRecruitments(page - 1);
      setRecruitments(data.content);
      console.log(data.content)
      setTotalPages(data.totalPages);
      console.log(data.totalPages)
    } catch (error) {
      console.error('Error fetching recruitments:', error);
    }
  };

  useEffect(() => {
    fetchRecruitments(page);
  }, [page]);

  return (
    <div style={{ padding: '0 400px' }}>
      <HeaderComponent />
      <MainButtonComponent />
      <RecruitmentList recruitments={recruitments} />
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

export default RecruitmentListContainer;