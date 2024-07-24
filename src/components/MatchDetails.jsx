import React from 'react';
import { Card, Group, Text, Badge, Textarea, Button } from '@mantine/core';

const MatchDetails = ({ match, postMatch }) => {
  if (!match) {
    return <Text>Match details not found.</Text>;
  }

  const applyMatch = async (event) => {
    event.preventDefault();

    try {
      console.log(match)
      const data = await postMatch(match.id);
    } catch (error) {
      console.error("Apply match failed", error);
    }
  };

  return (
    <form
      onSubmit={applyMatch}
      style={{
        width: 480,
        margin: "auto",
        marginTop: 100
      }}
    >
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="md">
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
        <Textarea
          value={match.content}
          readOnly
          minRows={3}
          maxRows={6}
          autosize
          style={{ marginTop: '20px', marginBottom: '20px' }}
        />
        <Group position="apart" style={{ marginTop: '20px' }}>
          <Text size="md">
            장소: {match.location}
          </Text>
          <div style={{ textAlign: 'right', marginLeft: 'auto' }}>
            <Text size="sm" color="dimmed">경기 날짜</Text>
            <Text size="sm" color="dimmed">
              {new Date(match.matchDate).toLocaleString()}  
            </Text>
          </div>
        </Group>
        <Button
          variant="outline"
          color="green"
          type="submit"
          fullWidth
          mt="md"
          style={{ marginBottom: '20px' }}
        >
          신청하기
        </Button>
      </Card>
    </form>
  );
};

export default MatchDetails;
