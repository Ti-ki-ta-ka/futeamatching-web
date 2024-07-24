import React from 'react';
import { Card, Group, Text, Badge } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const MainList = ({ matches }) => {
  const navigate = useNavigate();

  const handleCardClick = (match) => {
    navigate(`/match/${match.id}`, { state: match });
  };

  return (
    <>
      {matches.map((match) => (
        <Card 
          key={match.id} 
          shadow="sm" 
          padding="lg" 
          radius="md" 
          withBorder 
          mb="md"
          onClick={() => handleCardClick(match)}
          style={{ cursor: 'pointer' }}
        >
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
          <div style={{ textAlign: 'right' }}>
            <Text size="sm" color="dimmed">경기 날짜</Text>
            <Text size="sm" color="dimmed">
              {new Date(match.matchDate).toLocaleString()}
            </Text>
          </div>
        </Card>
      ))}
    </>
  );
};

export default MainList;
