import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import styles from './TeamDetail.module.css'; // Import the CSS module
import goalnet from '../assets/goalnet.jpg';
import dribble from '../assets/dribble.jpg';

const MyTeam = ({ team }) => {
  const navigate = useNavigate();

  // Check if the team is null or undefined
  if (team === null || !team) {
    return (
      <div style={{ color: 'black', textAlign: 'center', marginTop: '20vh', fontSize: '2vw' }}>
        아직 팀이 없으시네요! 팀을 생성해보는건 어떨까요?
      </div>
    );
  }

  const stats = [
    { value: team.mannerScore, label: '매너점수' },
    { value: team.tierScore, label: '스킬점수' },
    { value: team.attendanceScore, label: '근태점수' },
  ];


  return (
    <Card
      withBorder
      padding="xl"
      radius="md"
      className={`${styles.teamCard}`}
      style={{ color: 'white', backgroundColor: '#181A1B', width: '50%', height: '70vh', marginTop: '5vh' }}
    >
      <div
        style={{
          width: '100%',
          height: '20vh',
          backgroundImage: `url(${goalnet})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '-7vh',
        }}
      >
        <Avatar
          src={`${dribble}`}
          size={80}
          radius={80}
          mx="auto"
          mt={-30}
          className={styles.teamAvatar}
        />
      </div>

      <Text
        className={styles.neonText}
        align="center"
        weight={500}
        mt="sm"
        style={{ fontSize: '1.5vw', marginBottom: '-4vh' }}
      >
        {team.name}
      </Text>
      <Text align="left" size="sm" color="dimmed">
        {team.description}
      </Text>

      <Group
        mt="md"
        position="center"
        spacing={30}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <Text align="center" size="lg" weight={500}>
              {stat.value}
            </Text>
            <Text align="center" size="sm" color="dimmed" style={{ lineHeight: 1 }}>
              {stat.label}
            </Text>
          </div>
        ))}
      </Group>

      <Button
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        variant="default"
        style={{ backgroundColor: '#40C057' }}
        onClick={() => navigate('/create-recruitment')}
      >
        멤버 구인 공고 등록
      </Button>
    </Card>
  );
};

export default MyTeam;