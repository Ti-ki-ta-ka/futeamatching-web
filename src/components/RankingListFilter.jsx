import React, { useState, useEffect } from 'react';
import { Group, Select} from '@mantine/core';



const RankingListFilter = ({ onFilter, disable, isClearSearch }) => {
    const [region, setRegion] = useState('');
    const options = [
        { value: 'SEOUL', label: '서울' },
        { value: 'BUSAN', label: '부산' },
        { value: 'DAEGU', label: '대구' },
        { value: 'INCHEON', label: '인천' },
        { value: 'GWANGJU', label: '광주' },
        { value: 'DAEJEON', label: '대전' },
        { value: 'ULSAN', label: '울산' },
        { value: 'SEJONG', label: '세종' },
        { value: 'GYEONGGI', label: '경기' },
        { value: 'GANGWON', label: '강원' },
        { value: 'CHUNGCHEONG', label: '충청' },
        { value: 'JEOLLA', label: '전라' },
        { value: 'GYEONGSANG', label: '경상' },
        { value: 'JEJU', label: '제주' }
    ];

    useEffect(() => {
        if (isClearSearch) {
            setRegion('');
        }
      }, [isClearSearch]);

      const handleChange = (value) => {
        setRegion(value);
        onFilter(value);
    };

    

    return (
        <Group mt="md" mb="md" spacing="xs">
            <Select
          placeholder="지역별"
          data={options}
          value={region}
          onChange={handleChange}
          mb="md"
          disabled={disable}
          clearable
        />
        </Group>
    );
}

export default RankingListFilter