import { Group, Button,Menu,Text, rem} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconSoccerField } from '@tabler/icons-react';
import { IconUsers,
         IconList,
         IconSwords,
         IconSquareRoundedPlus
 } from '@tabler/icons-react';




const MyTeamButtonComponent = () => {
    const navigate = useNavigate();
    
    return (
        <Group mt="md" mb="md" spacing="xs" >
        <Button
        variant="outline"
        color="blue"
        onClick={() => navigate('/myteam')}
        >
        내 팀정보
        </Button>
        <Button
        variant="outline"
        color="blue"
        onClick={() => navigate('/myteammember')}
        >
        멤버 보기
        </Button>
        </Group>
    );
}

export default MyTeamButtonComponent