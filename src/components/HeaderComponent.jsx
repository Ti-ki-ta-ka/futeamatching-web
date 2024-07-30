import React, { useState } from 'react';
import { Group, Text, Button, ActionIcon, TextInput, Box, Drawer, Divider, Stack } from '@mantine/core';
import { IconSearch, IconMenu2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 
import { IconPower} from '@tabler/icons-react';



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
          <Box
            onClick={() => navigate('/main')}
          >
            <Text weight={700} size="xl">
              FuTeaMatching ⚽
            </Text>
          </Box>
        </Group>

        <Group spacing="xs" justify="flex-end">
          <TextInput
            placeholder="검색하기"
            rightSection={<IconSearch size={20} />}
            radius="xl"
            size="md"
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
              rightSection={<IconPower size={19}/>}
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
            onClick={() => navigate('/')}
          >
            매칭하기
          </Button>
          <Button 
            fullWidth 
            variant="subtle" 
            color="green"
            onClick={() => navigate('/team/create')}
          >
            팀 생성하기
          </Button>
          <Button 
            fullWidth 
            variant="subtle" 
            color="green"
            onClick={() => navigate('/matches/create')}
          >
            매치 생성하기
          </Button>
          <Button 
            fullWidth 
            variant="subtle" 
            color="green"
            onClick={() => navigate('/myapplication')}
          >
            매치 신청 내역
          </Button>
          <Button 
            fullWidth 
            variant="subtle" 
            color="green"
            onClick={() => navigate('/myteammatches')}
          >
            우리 팀 매치 내역
          </Button>
          <Button 
            fullWidth 
            variant="subtle" 
            color="green"
            onClick={() => navigate('/profile')}
          >
            프로필 변경하기
          </Button>
          <Button 
            fullWidth 
            variant="subtle" 
            color="green"
            onClick={() => navigate('/password')}
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
