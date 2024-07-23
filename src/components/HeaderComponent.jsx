// HeaderComponent.jsx
import React, { useState } from 'react';
import { Group, Text, Button, ActionIcon, TextInput, Box, Drawer, Divider, Stack } from '@mantine/core';
import { IconSearch, IconMenu2, IconHome, IconUsers } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 

const HeaderComponent = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const toggleDrawer = () => {
    setDrawerOpened((prev) => !prev);
  };

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.white,
        padding: theme.spacing.md,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
        marginTop: theme.spacing.md,
      })}
    >
      <Group justify="space-between" mt="md">
        <Group spacing="xs">
          <ActionIcon variant="default" size="lg" onClick={toggleDrawer}>
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
            sx={{ width: 600 }}
            styles={{ rightSection: { pointerEvents: 'none' } }}
          />
          {isAuthenticated ? (
            <Button
              variant="outline"
              color="gray"
              radius="xl"
              size="md"
              onClick={logout}
            >
              로그아웃
            </Button>
          ) : (
            <>
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
            </>
          )}
        </Group>
      </Group>
      <Group mt="md" mb="md" spacing="xs">
        <Button variant="outline" color="green" onClick={() => navigate('/')}>매칭하기</Button>
        <Button variant="outline" color="green" onClick={() => navigate('/team')}>팀 구하기</Button>
      </Group>

      <Drawer
        opened={drawerOpened}
        onClose={toggleDrawer}
        title="메뉴"
        padding="xl"
        size="md"
      >
        <Stack spacing="sm">
          <Button 
            fullWidth 
            variant="subtle" 
            color="green"
            leftIcon={<IconHome size={20} />} 
            onClick={() => navigate('/')}
          >
            매칭하기
          </Button>
          <Button 
            fullWidth 
            variant="subtle" 
            color="green"
            leftIcon={<IconUsers size={20} />} 
            onClick={() => navigate('/profile')}
          >
            프로필 변경하기
          </Button>
          <Button 
            fullWidth 
            variant="subtle" 
            color="green"
            leftIcon={<IconUsers size={20} />} 
            onClick={() => navigate('/signup')}
          >
            비밀번호 수정하기
          </Button>
        </Stack>
        <Divider my="lg" />
        {isAuthenticated && (
          <Box mt="auto">
            <Button 
              fullWidth 
              variant="outline" 
              color="black" 
              onClick={logout}
              mt="lg"
            >
              로그아웃
            </Button>
          </Box>
        )}
      </Drawer>
    </Box>
  );
};

export default HeaderComponent;
