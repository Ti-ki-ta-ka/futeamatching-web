import React from 'react';
import { Card, Group, Text, Badge, Box, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const MyTeamMatchList = ({ matches }) => {
  const navigate = useNavigate();
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
          </Box>
        </Card>
      ))}
    </>
  );
};

export default MyTeamMatchList;