import React from 'react';
import { Card, Badge, Text, Group, Button,SimpleGrid } from '@mantine/core';
import dayjs from 'dayjs';

const MyTeamMember = ({ teamMembers = [] }) => {

  const translateRole = (role) => {
    switch(role) {
      case 'LEADER':
        return '리더';
      case 'SUB_LEADER':
        return '서브리더';
      case 'MEMBER':
        return '멤버';
      default:
        return role;
    }
  };

  return (
    <SimpleGrid cols={3}>
      {teamMembers.map((teamMember) => (
        <Card shadow="MD" padding="xs" radius="md" withBorder key={teamMember.userId}>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{teamMember.name}</Text>
            <Badge color="pink">
              {dayjs(teamMember.createdAt).format('YYYY년 M월 가입')}
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            {teamMember.email}
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            {translateRole(teamMember.role)} {/* 역할을 한국어로 변환하여 렌더링 */}
          </Button>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default MyTeamMember;