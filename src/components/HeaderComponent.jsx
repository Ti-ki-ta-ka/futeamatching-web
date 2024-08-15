import React, { useState, useEffect } from 'react';
import { getMyTeam } from '../api/team';
import { getOAuthProvider } from '../api/users';
import { Group, Text, Button, ActionIcon, TextInput, Box, Drawer, Divider, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 
import { IconPower,
         IconRefresh,
         IconSearch, 
         IconMenu2,
         IconHome,
         IconSwords,
         IconUserCircle,
         IconReport,
         IconKey,
         IconUsers,
         IconInfoCircle,
         IconZoomReplace
} from '@tabler/icons-react';

const HeaderComponent = ({ onSearch, clearSearch }) => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [teamInfoHovered, setTeamInfoHovered] = useState(false); // State to track hover for "내 팀 정보"
  const [myHovered, setMyHovered] = useState(false); // State to track hover for "My"
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [isSocialLogin, setIsSocialLogin] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [team, setTeam] = useState(null);


  const toggleDrawer = () => {
    setDrawerOpened((prev) => !prev);
  };

  const handleInputChange = (event) => {
    const query = event.currentTarget.value;
    setSearchQuery(query);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    clearSearch();
  }

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const fetchMyTeam = async () => {
    try {
      const data = await getMyTeam();
      setTeam(data);
    } catch (error) {
      console.error('Error fetching team:', error);
    }
  };

  const fetchOAuthProvider = async () => {
    try {
      const provider = await getOAuthProvider();
      setIsSocialLogin(provider); // Set true if the user logged in via social login
    } catch (error) {
      console.error('Error fetching OAuth provider:', error);
    }
  };

  useEffect(() => {
      fetchMyTeam();  
      fetchOAuthProvider();
  }, []);

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
          <Button
            variant="outline"
            color="Green"
            radius="xl"
            size="md"
            onClick={handleClearSearch}
            rightSection={<IconRefresh size={19}/>}
          >
            목록 초기화
          </Button>
          <TextInput
            placeholder="검색하기"
            rightSection={<IconSearch size={20} />}
            radius="xl"
            size="md"
            sx={{ width: 600 }}
            styles={{ rightSection: { pointerEvents: 'none' } }}
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          {isAuthenticated ? (
            <Button
              variant="outline"
              color="gray"
              radius="xl"
              size="md"
              onClick={handleLogout}
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
        style={{color:'green'}}
      >
        <Stack spacing="sm">
          <Button 
            fullWidth 
            variant="subtle" 
            color="green"
            onClick={() => navigate('/main')}
            leftSection={<IconHome size={19}/>}
            style={{display:'flex', justifyContent:'start'}}
          >
            홈
          </Button>

          {/* Hoverable Team Info Button */}
          <Box
            onMouseEnter={() => setTeamInfoHovered(true)}
            onMouseLeave={() => setTeamInfoHovered(false)}
            sx={{ position: 'relative' }}
          >
            <Button 
              fullWidth 
              variant="subtle" 
              color="green"
              leftSection={<IconUsers size={19}/>}
              style={{display:'flex', justifyContent:'start'}}
            >
              My Team
            </Button>

            {teamInfoHovered && (
              <Stack
                sx={{ 
                  position: 'absolute', 
                  top: '100%', 
                  left: 0, 
                  zIndex: 1, 
                  background: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  padding: '8px'
                }}
              >
                <Button 
                  fullWidth 
                  variant="subtle" 
                  color="green"
                  onClick={() => navigate(team ? '/myteam' : '/noteampage')}
                  leftSection={<IconInfoCircle size={19}/>}
                  style={{display:'flex', justifyContent:'start'}}
                >
                  내 팀 정보
                </Button>
                <Button 
                  fullWidth 
                  variant="subtle" 
                  color="green"
                  onClick={() => navigate(team ? '/myapplication' : '/noteampage')}
                  leftSection={<IconSwords size={19}/>}
                  style={{display:'flex', justifyContent:'start'}}
                >
                  우리 팀 매치 신청 내역
                </Button>
                <Button 
                  fullWidth 
                  variant="subtle" 
                  color="green"
                  onClick={() => navigate(team ? '/myteammatches' : '/noteampage')}
                  leftSection={<IconReport size={19}/>}
                  style={{display:'flex', justifyContent:'start'}}
                >
                  우리 팀 매치 등록 내역
                </Button>
              </Stack>
            )}
          </Box>

          {/* Hoverable "My" Button */}
          <Box
            onMouseEnter={() => setMyHovered(true)}
            onMouseLeave={() => setMyHovered(false)}
            sx={{ position: 'relative' }}
          >
            <Button 
              fullWidth 
              variant="subtle" 
              color="green"
              leftSection={<IconUserCircle size={19}/>}
              style={{display:'flex', justifyContent:'start'}}
            >
              My
            </Button>

            {myHovered && (
              <Stack
                sx={{ 
                  position: 'absolute', 
                  top: '100%', 
                  left: 0, 
                  zIndex: 1, 
                  background: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  padding: '8px'
                }}
              >
                <Button 
                  fullWidth 
                  variant="subtle" 
                  color="green"
                  onClick={() => navigate(isSocialLogin === null ? '/profile' : '/social-restricted')}
                  leftSection={<IconZoomReplace size={19}/>}
                  style={{display:'flex', justifyContent:'start'}}
                >
                  이름 변경
                </Button>
                <Button 
                  fullWidth 
                  variant="subtle" 
                  color="green"
                  onClick={() => navigate(isSocialLogin === null ? '/password' : '/social-restricted')}
                  leftSection={<IconKey size={19}/>}
                  style={{display:'flex', justifyContent:'start'}}
                >
                  비밀번호 변경
                </Button>
              </Stack>
            )}
          </Box>
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