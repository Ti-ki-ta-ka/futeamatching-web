import { Group, Button,Menu,Text, rem} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconSoccerField } from '@tabler/icons-react';
import { IconUsers,
         IconList,
         IconSwords,
         IconSquareRoundedPlus
 } from '@tabler/icons-react';




const MainButtonComponent = () => {
    const navigate = useNavigate();
    
    return (
        <Group mt="md" mb="md" spacing="xs" >
        <Menu trigger="hover" shadow="md" width={200} color="green" rightSection={<IconSoccerField size={25}/>} style={{backgroundColor:'white', color:'#4caf50', border:'1px solid #4caf50'}}>
            <Menu.Target>
                <Button>매치에 대하여</Button>
            </Menu.Target>

            <Menu.Dropdown >
                <Menu.Label>어떤 매치들이 있을까?</Menu.Label>
                <Menu.Item color="green" leftSection={<IconList style={{ width: rem(14), height: rem(14) }} />} onClick={() => navigate('/main')} >
                매치 목록 보기
                </Menu.Item>
                
                <Menu.Divider />
                <Menu.Label >직접 매치를 만들어보자!</Menu.Label>
                <Menu.Item color="green" leftSection={<IconSwords style={{ width: rem(14), height: rem(14) }} />} onClick={() => navigate('/matches/create')}>
                매치 생성
                </Menu.Item>
                
            </Menu.Dropdown>
        </Menu>
        <Menu trigger="hover" shadow="md" width={200} color="green" rightSection={<IconUsers size={25}/>} style={{backgroundColor:'white', color:'#4caf50', border:'1px solid #4caf50'}}>
            <Menu.Target>
                <Button>팀에 대하여</Button>
            </Menu.Target>

            <Menu.Dropdown >
                <Menu.Label>어떤 팀들이 있을까?</Menu.Label>
                <Menu.Item color="green" leftSection={<IconList style={{ width: rem(14), height: rem(14) }} />} onClick={() => navigate('/team/list')} >
                팀 목록 보기
                </Menu.Item>
                
                <Menu.Divider />
                <Menu.Label >이젠 나도 구단주!</Menu.Label>
                <Menu.Item color="green" leftSection={<IconSquareRoundedPlus style={{ width: rem(14), height: rem(14) }} />} onClick={() => navigate('/team/create')}>
                팀 생성
                </Menu.Item>
                
            </Menu.Dropdown>
        </Menu>
        </Group>
    );
}

export default MainButtonComponent