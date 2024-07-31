import React, { useState, useEffect } from 'react';
import { filterProps, Group, Select} from '@mantine/core';



const TeamListFilterByScore = ({ onFilter, disable, isClearSearch }) => {
    const [value, setValue] = useState('');
    const options = [
        { value: 'mannerScore', label: '매너 점수 높은 순' },
        { value: 'tierScore', label: '실력 점수 높은 순' },
        { value: 'attendanceScore', label: '근태 점수 높은 순' }
    ];

    useEffect(() => {
        if (isClearSearch) {
          setValue('');
           // Select의 값을 초기화
        }
      }, [isClearSearch]);

    const handleChange = (value) => {
        setValue(value);
        onFilter(value);
    };

    return (
        <Group mt="md" mb="md" spacing="xs">
        <Select
        data={options}
        placeholder= '조회 필터'
        value={value}
        onChange={handleChange}
        disabled={disable}
        
        />
        </Group>
    );
}

export default TeamListFilterByScore