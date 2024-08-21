import React from 'react';
import { Card, Group, Text, Badge } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const RankingList = ({ teams }) => {
  const navigate = useNavigate();

  return (
    <>
      {teams.map((team, index) => (
        <Card 
          key={team.id} 
          shadow="sm" 
          padding="lg" 
          radius="md" 
          withBorder 
          mb="md" 
          style={{ cursor: 'pointer' }} 
          onClick={() => navigate(`/team/detail/${team.id}`)}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Group>
              <Text fw={500} size="lg">
                {index + 1}. {team.name} {/* Display rank */}
              </Text>
              <Badge color="green" variant="light">
                {team.region}
              </Badge>
            </Group>
          </div>
          <Text size="md">
            {team.description}
          </Text>
          <Text size="md" style={{ marginTop: '10px' }}>
            멤버 수 {team.numMember}/50
          </Text>
          <div style={{ textAlign: 'right' }}>
            <Text size="sm" color="dimmed">팀 창단일</Text>
            <Text size="sm" color="dimmed">
                {new Date(team.createAt).toLocaleString()}
            </Text>
          </div>
        </Card>
      ))}
    </>
  );
};

export default RankingList;