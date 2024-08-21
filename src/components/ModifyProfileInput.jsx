import { Button, TextInput, Paper, Image, Text } from "@mantine/core";
import { getMyProfile } from "../api/users";
import { useEffect, useState } from "react";

const ModifyProfileInput = ({ modifyProfile }) => {
  const [name, setName] = useState('');
  const [getName, setGetName] = useState('');

  const handleModifyProfile = async (event) => {
    event.preventDefault();
    if (
      name.length < 2 ||
      name.length > 12 ||
      !/^[가-힣a-zA-Z0-9]+$/.test(name)
    ) {
      alert("닉네임은 2~12자의 한글, 영문, 숫자로 설정해주세요.");
      return;
    }

    try {
      const data = await modifyProfile({
        name
      });
      
    } catch (error) {
      console.error("Modify Profile failed", error);
    }
  };

  const fetchMyProfile = async () => {
    const response = await getMyProfile();
    setGetName(response.name)
  }

  useEffect(() => {
    fetchMyProfile();
  }, [])

  return (
    <form
      onSubmit={handleModifyProfile}
      style={{
        width: 480,
        margin: "auto",
        marginTop: 100
      }}
    >
      <Image
          src="https://github.com/user-attachments/assets/2c913bba-7464-437e-ae7a-9edc496fb86c" 
          alt="Profile Image"
          radius="md"
          mt="md"
          h={200}
          fit="contain"
          mb="xl" 
        />
      <Paper shadow="xs" padding="md" withBorder style={{ marginTop: '150px', padding: '20px' }}>
        <Text>현재 이름 : {getName} </Text>

        <TextInput
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />
        <Button
          variant="outline"
          color="green"
          type="submit"
          fullWidth
          style={{ marginBottom: '20px' }}
        >
          프로필 수정하기
        </Button>
      </Paper>
    </form>
  );
};

export default ModifyProfileInput;
