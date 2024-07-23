import { Button, TextInput, Paper, Image, Text } from "@mantine/core";
import { useState } from "react";

const ModifyPasswordInput = ({ modifyPassword }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleModifyPassword = async (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      setErrorMessage("비밀번호가 맞지 않습니다!");
      return;
    }

    try {
      const data = await modifyPassword({ password });
      setErrorMessage('');
    } catch (error) {
      const errorMsg = error.response?.data?.message || "비밀번호 변경 실패";
      setErrorMessage(errorMsg);
    }
  };

  return (
    <form
      onSubmit={handleModifyPassword}
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

      <TextInput
        label="Password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
      />

        <TextInput
        label="Confirm Password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        mb="md"
        required
      />

        {errorMessage && (
          <Text color="red" size="sm" mb="md">
            {errorMessage}
          </Text>
        )}
        
        <Button
          variant="outline"
          color="green"
          type="submit"
          fullWidth
          style={{ marginBottom: '20px' }}
        >
          비밀번호 변경하기
        </Button>
      </Paper>
    </form>
  );
};

export default ModifyPasswordInput;