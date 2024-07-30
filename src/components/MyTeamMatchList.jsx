// MainList.jsx
import React from 'react';
import { Card, Group, Text, Badge, Box } from '@mantine/core';

const MyTeamMatchList = ({ matches }) => {
  console.log("matches", matches)
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


        </Card>
      ))}
    </>
  );
};

export default MyTeamMatchList;
