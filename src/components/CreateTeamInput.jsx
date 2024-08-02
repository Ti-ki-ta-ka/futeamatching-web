import { Button, TextInput, Paper, Text, MultiSelect } from "@mantine/core";
import { useState } from "react";

const CreateTeamInput = ({ createTeam }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState([]);
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
    ]

  const handleCreateTeam = async (event) => {
    event.preventDefault();

    const regionsString = region.join(','); 

    try {
      const data = await createTeam({
        name,
        description,
        region: regionsString 
      });
    
      
      if (data && data.success) {
        alert(`축하드립니다 팀이 성공적으로 등록되었습니다!
    
        최고의 팀이 되기를 응원합니다!
    
        팀 정보
        팀 이름 : ${name}
        팀 설명 : ${description}
        활동 지역 : ${regionsString}
        `);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error("Create Team failed", error);
    }
    
  };

  return (
    <form
      onSubmit={handleCreateTeam}
      style={{
        width: 480,
        margin: "auto",
        marginTop: 100
      }}
    >
      <Text fw={500} ta="center">FuTeaMatching⚽</Text>
      <Paper shadow="xs" padding="md" withBorder style={{ marginTop: '10px', padding: '20px' }}>
        <TextInput
          label="늘 고민이 되는"
          placeholder="팀 이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />

        <TextInput
          label="이런 팀이에요"
          placeholder="설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />

        <MultiSelect
          label="활동하는 지역은요"
          placeholder="지역"
          data={options}
          value={region}
          onChange={setRegion}
          maxValues={1}
          mb="md"
        />

        <Button
          variant="outline"
          color="green"
          type="submit"
          fullWidth
          style={{ marginBottom: '20px' }}
        >
          팀 생성
        </Button>
      </Paper>
    </form>
  );
};

export default CreateTeamInput;
