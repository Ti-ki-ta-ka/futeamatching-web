// MainList.jsx
import React from 'react';
import { Card, Group, Text, Badge, Box } from '@mantine/core';

const TeamList = ({ teams }) => {
  return (
    <>
      {teams.map((team) => (
        <Card key={team.id} shadow="sm" padding="lg" radius="md" withBorder mb="md">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Group>
              <Text fw={500} size="lg">
                {team.name}
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

export default TeamList;
