import { Button, TextInput, Paper, Text, MultiSelect } from "@mantine/core";
import { postRecruitment } from "../api/recruitment"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRecruitmentInput = () => {
  const [quantity, setQuantity] = useState('');
  const [content, setContent] = useState('');
  const [recruitType, setRecruitType] = useState([]);
  const navigate = useNavigate();
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

    const handleCreateRecuitment = async (event) => {
      event.preventDefault();
      if (
        quantity.length < 1 ||
        quantity.length > 30||
        !/^(?:[1-9]|[1-4][0-9]|50)$/.test(quantity.toString())
      ) {
        alert("현재팀에는 30명 까지만 구인이 가능하네요");
        return;
      }
      if (
        content.length < 2 ||
        content.length > 30
      ) {
        alert("설명은 2~30자로 설정해주세요.");
        return;
      }
    
      try {
        const response = await postRecruitment({
          quantity,
          content,
          recruitType: 'TEAM_MEMBER',
        });
    
        if (response.status === 201) { 
          alert(`축하드립니다 구인 내용이 성공적으로 등록되었습니다!
        
            좋은 멤버 영입을 기원합니다!
        
            구인 정보
            구인 수 : ${quantity}
            설명 : ${content}
            구인 유형 : ${recruitType}
            `);
          navigate('/myteam'); 
        } else {
          throw new Error('구인 등록 실패');
        }
      } catch (error) {
        alert('구인 등록에 실패했습니다.');
      }
    };

    


  return (
    <form
      onSubmit={handleCreateRecuitment}
      style={{
        width: 480,
        margin: "auto",
        marginTop: 100
      }}
    >
      <Text fw={500} ta="center">FuTeaMatching⚽</Text>
      <Paper shadow="xs" padding="md" withBorder style={{ marginTop: '10px', padding: '20px' }}>
        <TextInput
          label="몇명을 영입할까요?"
          placeholder="구인 인원수"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />

        <TextInput
          label="구단의 한마디"
          placeholder="설명"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />

        <MultiSelect
          label="어떤 유형의 멤버를 영입할까요?"
          placeholder="지금은 일반 멤버만 영입 가능합니다."
          data={options}
          value={recruitType}
          onChange={setRecruitType}
          maxValues={1}
          disabled='true'
          mb="md"
        />

        <Button
          variant="outline"
          color="green"
          type="submit"
          fullWidth
          style={{ marginBottom: '20px' }}
        >
          구인 공고 등록
        </Button>
      </Paper>
    </form>
  );
};

export default CreateRecruitmentInput;
