import React from 'react';
import { Button, Card, Group, Text } from '@mantine/core';

const MainList = ({ matches}) => {
  console.log(matches);

  return (
    <>
      {matches.map((match) => (
        <Card key={match.id} shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>
              {match.title}
            </Text>
            <Text size="sm" c="dimmed">
              {new Date(match.matchDate).toLocaleString()}
            </Text>
          </Group>
          <Button.Group>
            <Button variant="light">
              상세보기
            </Button>
            <Button
              variant="filled"
            >
              완료
            </Button>
            <Button variant="outline" color="red" >
              삭제
            </Button>
          </Button.Group>
        </Card>
      ))}
    </>
  );
};

export default MainList;