import { Group, Button} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconSoccerField } from '@tabler/icons-react';
import { IconUsers } from '@tabler/icons-react';
import { IconList} from '@tabler/icons-react';



const MainButtonComponent = () => {
    const navigate = useNavigate();
    
    return (
        <Group mt="md" mb="md" spacing="xs">
        <Button variant="outline" color="green" onClick={() => navigate('/main')} rightSection={<IconSoccerField size={25}/>} >매칭하기</Button>
        <Button variant="outline" color="green" onClick={() => navigate('/team/list')} rightSection={<IconList size={20}/>}>팀 목록 보기 </Button>
        <Button variant="outline" color="green" onClick={() => navigate('/team/create')} rightSection={<IconUsers size={20}/>}>팀 생성하기</Button>
        </Group>
    );
}

export default MainButtonComponent