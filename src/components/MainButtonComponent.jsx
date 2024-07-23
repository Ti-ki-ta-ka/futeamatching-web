import React from 'react';
import { Group, Button} from '@mantine/core';
import { useNavigate } from 'react-router-dom';


const MainButtonComponent = () => {
    const navigate = useNavigate();

    return (
        <Group mt="md" mb="md" spacing="xs">
        <Button variant="outline" color="green" onClick={() => navigate('/main')}>매칭하기</Button>
        <Button variant="outline" color="green" onClick={() => navigate('/team/create')}>팀 구하기</Button>
        </Group>
    );
}

export default MainButtonComponent