import React from 'react';
import { Card, Group, Text, Badge, Grid, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { translateRegion } from '../api/translations';

const RankingList = ({ teams, page, itemsPerPage }) => {
  const navigate = useNavigate();

  const getRankStyle = (rank) => {
    switch (rank) {
      case 1:
        return { color: '#ffd700', borderColor: '#ffd700', borderRadius: '50%' }; // Gold
      case 2:
        return { color: '#c0c0c0', borderColor: '#c0c0c0', borderRadius: '50%' }; // Silver
      case 3:
        return { color: '#cd7f32', borderColor: '#cd7f32', borderRadius: '50%' }; // Bronze
      default:
        return { color: '#000', borderColor: 'transparent' };
    }
  };

  return (
    <>
      {/* Bar at the top showing categories */}
      <Box 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '10px', 
          backgroundColor: '#f7f9fc',
          borderRadius: '8px',
          marginBottom: '20px'
        }}
      >
        <Text fw={700} size="md" style={{ flex: 1 }}>순위</Text>
        <Text fw={700} size="md" style={{ flex: 1 }}>팀 이름</Text>
        <Text fw={700} size="md" style={{ flex: 1 }}>지역</Text>
        <Text fw={700} size="md" style={{ flex: 1 }}>실력 점수</Text>
        <Text fw={700} size="md" style={{ flex: 1 }}>멤버 수</Text>
      </Box>

      {/* List of teams */}
      {teams.map((team, index) => {
        const rank = (page - 1) * itemsPerPage + index + 1;
        const rankStyle = getRankStyle(rank);
        return (
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
            <Grid align="center">
              <Grid.Col span={2.25}>
                <Text 
                  fw={700} 
                  size={rank <= 3 ? "xl" : "md"} 
                  style={{ 
                    color: rankStyle.color, 
                    borderColor: rankStyle.borderColor, 
                    borderRadius: rankStyle.borderRadius,
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    padding: '5px',
                    textAlign: 'center',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {rank}
                </Text>
              </Grid.Col>
              <Grid.Col span={2.25}>
                <Group>
                  <Text fw={500} size="lg">
                    {team.name}
                  </Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={2.7}>
                <Badge color="green" variant="light">
                  {translateRegion(team.region)}
                </Badge>
              </Grid.Col>
              <Grid.Col span={2.4}>
                <Text size="md">
                  {team.tierScore}
                </Text>
              </Grid.Col>
              <Grid.Col span={2.4}>
                <Text size="md">
                  {team.numMember}/50
                </Text>
              </Grid.Col>
            </Grid>
          </Card>
        );
      })}
    </>
  );
};

export default RankingList;