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
      const regionsString = region.join(','); 
    
      try {
        const response = await postRecruitment({
          quantity,
          content,
          recruitType: regionsString,
        });
    
        if (response.status === 201) { 
          alert(`축하드립니다 팀이 성공적으로 등록되었습니다!
        
            최고의 팀이 되기를 응원합니다!
        
            팀 정보
            팀 이름 : ${quantity}
            팀 설명 : ${content}
            활동 지역 : ${recruitType}
            `);
          navigate('/myteam'); 
        } else {
          throw new Error('팀 생성 실패');
        }
      } catch (error) {
        alert('팀 생성에 실패했습니다. 유저는 하나의 팀에 소속될 수 있어요!');
      }
    };

    if (
      content.length < 2 ||
      content.length > 12 ||
      !/^[가-힣a-zA-Z0-9]+$/.test(content)
    ) {
      alert("닉네임은 2~12자의 한글, 영문, 숫자로 설정해주세요.");
      return;
    }


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
          label="늘 고민이 되는"
          placeholder="팀 이름"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />

        <TextInput
          label="이런 팀이에요"
          placeholder="설명"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />

        <MultiSelect
          label="활동하는 지역은요"
          placeholder="지역"
          data={options}
          value={recruitType}
          onChange={setRecruitType}
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

export default CreateRecruitmentInput;
