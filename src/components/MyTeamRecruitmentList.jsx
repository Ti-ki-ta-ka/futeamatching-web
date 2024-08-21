// MainList.jsx
import React, { useState } from 'react';
import { Card, Group, Text, Badge, Box, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


const MyTeamRecruitmentList = ({ recruitments, onDelete }) => {
  const navigate = useNavigate();

  return (
    <>
    {recruitments.length === 0 && 
      <div>
        <Text>우리팀이 아직 구인공고가 없네요.. 공고를 등록해보세요!</Text>
      </div>}
      {recruitments.map((recruitment) => (
        <Card key={recruitment.recruitmentId} shadow="sm" padding="lg" radius="md" withBorder mb="md">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Group>
              <Text fw={500} size="lg">
                구인 수 : {recruitment.quantity}
              </Text>
            </Group>
          </div>
          <Text size="md" style={{ marginTop: '10px' }}>
          구단의 한마디 : {recruitment.content}
          </Text>
          <div style={{ textAlign: 'right' }}>
            <Text size="sm" color="dimmed"></Text>
            <Text size="sm" color="dimmed">
              {new Date(recruitment.createdAt).toLocaleString()}
            </Text>
          </div>
          <Box mt="md" style={{ textAlign: 'right' }}>
            <Button onClick={() => navigate(`/myteamrecruitmentapplication/${recruitment.recruitmentId}`)} variant="gradient"
              gradient={{ from: 'green', to: 'lime', deg: 64 }}>
              신청 정보 보기
            </Button>
            <Button onClick={() => onDelete(recruitment.id)} variant="gradient"
              gradient={{ from: 'red', to: 'pink', deg: 131 }} style={{ marginLeft: '10px' }}>
              삭제하기
            </Button>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default MyTeamRecruitmentList;
