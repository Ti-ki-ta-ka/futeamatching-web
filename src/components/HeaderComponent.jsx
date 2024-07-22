// HeaderComponent.jsx
import React from 'react';
import { Group, Text, Button, ActionIcon, TextInput, Box } from '@mantine/core';
import { IconSearch, IconAdjustments, IconMenu2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.white,
        padding: theme.spacing.md,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
      })}
    >
      <Group justify='space-between'>
        <Group spacing="xs">
          <ActionIcon variant="default" size="lg">
            <IconMenu2 />
          </ActionIcon>
          <Text weight={700} size="xl">
            FuTeaMatching ⚽
          </Text>
        </Group>

        <Group spacing="xs" justify="flex-end">
          <TextInput
            placeholder="검색하기"
            icon={<IconSearch size={16} />}
            radius="xl"
            size="md"
            rightSectionWidth={90}
            sx={{ width: 400 }}
            styles={{ rightSection: { pointerEvents: 'none' } }}
          />
          <Button
            variant="outline"
            color="gray"
            radius="xl"
            size="md"
            onClick={() => navigate('/login')}
          >
            로그인
          </Button>
          <Button
            color="green"
            radius="xl"
            size="md"
            onClick={() => navigate('/signup')}
          >
            회원가입
          </Button>
        </Group>
      </Group>
    </Box>
  );
};

export default HeaderComponent;
