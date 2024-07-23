import { Button, TextInput, Paper, Text, MultiSelect } from "@mantine/core";
import { useState } from "react";

const CreateTeamInput = ({ createTeam }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState([]);

  const handleCreateTeam = async (event) => {
    event.preventDefault();

    const regionsString = region.join(','); 

    try {
      const data = await createTeam({
        name,
        description,
        region: regionsString 
      });
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
          label="Name"
          placeholder="팀 이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />

        <TextInput
          label="Description"
          placeholder="설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />

        <MultiSelect
          label="Region"
          placeholder="지역"
          data={[
            'SEOUL',
            'BUSAN',
            'DAEGU',
            'INCHEON',
            'GWANGJU',
            'DAEJEON',
            'ULSAN',
            'SEJONG',
            'GYEONGGI',
            'GANGWON',
            'CHUNGCHEONG',
            'JEOLLA',
            'GYEONGSANG',
            'JEJU'
          ]}
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
