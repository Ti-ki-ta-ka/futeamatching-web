// MainList.jsx
import React from 'react';
import { Card, Group, Text, Badge, Box, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { deleteMatch } from '../api/main';

const MyTeamMatchList = ({ matches }) => {
  const navigate = useNavigate();

  const handleDelete = async (matchId) => {
    try {
      await deleteMatch(matchId);
      alert('매치가 삭제되었습니다.');
      // 페이지를 새로고침하거나, 상태를 업데이트하여 삭제된 매치를 제거하세요.
    } catch (error) {
      alert('매치를 삭제할 수 있는 권한이 없습니다.');
    }
  };

  return (
    <>
      {matches.map((match) => (
        <Card key={match.id} shadow="sm" padding="lg" radius="md" withBorder mb="md">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Group>
              <Text fw={500} size="lg">
                {match.title}
              </Text>
              <Badge color="green" variant="light">
                {match.region}
              </Badge>
            </Group>
          </div>
          <Text size="md">
            {match.content}
          </Text>

          <Text size="md" style={{ marginTop: '10px' }}>
            경기 시간: {new Date(match.matchDate).toLocaleString()}
          </Text>
          <div style={{ textAlign: 'right' }}>
            <Text size="sm" color="dimmed"></Text>
            <Text size="sm" color="dimmed">
              {new Date(match.createdAt).toLocaleString()}
            </Text>
          </div>
          <Box mt="md" style={{ textAlign: 'right' }}>
            <Button onClick={() => navigate(`/mymatchapplications/${match.id}`)} variant="gradient"
              gradient={{ from: 'green', to: 'lime', deg: 64 }}>
              신청 정보 보기
            </Button>
            <Button onClick={() => handleDelete(match.id)} variant="gradient" color="red" style={{ marginLeft: '10px' }}>
              삭제하기
            </Button>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default MyTeamMatchList;
