import { Button, TextInput, Text, Paper, MultiSelect } from "@mantine/core";
import { createMatch } from "../api/main";
import { DateTimePicker } from '@mantine/dates';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

const MatchCreateInput = () => {
  const [title, setTitle] = useState('');
  const [matchDateTime, setMatchDateTime] = useState(null);
  const [region, setRegion] = useState([]);
  const [location, setLocation] = useState('');
  const [content, setContent] = useState('');
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
];

const handleCreateMatch = async (event) => {
  event.preventDefault();

  if (!matchDateTime) {
    alert('경기 날짜와 시간을 선택해 주세요.');
    return;
  }

  const formattedDateTime = dayjs(matchDateTime).format('YYYY-MM-DDTHH:mm:ss');
  const regionsString = region.join(','); 

  try {
    const response = await createMatch({
      title,
      matchDate: formattedDateTime,
      region: regionsString,
      location,
      content,
    });

    if (response.status === 201) {
      alert(`매치가 성공적으로 등록되었습니다!
        
        누구와 붙게 될까요!?

        매치 정보
        제목 : ${title}
        경기 날짜 : ${formattedDateTime}
        지역 : ${regionsString}
        장소 : ${location}
        `);
      navigate('/main'); // navigate only after showing the alert
    } 
   
else if(response.status === 500) {
      throw new Error('매치 생성 실패');
    } else {
      throw new Error('매치 생성 실패');
    }
  } 
catch (error) {
      alert('매치 생성에 실패했습니다. 팀에 소속되어 있지 않다면 생성할 수 없어요!');
    
  }
};

  return (
    <form
      onSubmit={handleCreateMatch}
      style={{
        width: 480,
        margin: "auto",
        marginTop: 100
      }}
    >
      <Text fw={500} ta="center">FuTeaMatching⚽</Text>
      <Paper shadow="xs" padding="md" withBorder style={{ marginTop: '10px', padding: '20px' }}>
        <TextInput
          label="ex) 이런 사람들이 신청하면 좋겠어요, 우리는 이런 팀이에요"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />

        <DateTimePicker
          label="이 날 경기해요"
          placeholder="경기 날짜와 시간"
          value={matchDateTime}
          onChange={setMatchDateTime}
          required
          locale="ko"
          style={{ marginBottom: '20px' }}
        />

        <MultiSelect
          label="진행하는 지역명"
          placeholder="지역"
          data={options}
          value={region}
          onChange={setRegion}
          maxValues={1}
          mb="md"
        />
        <TextInput
          label="구체적인 장소 ex) ~~ 축구장"
          placeholder="경기 장소"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          style={{ marginBottom: '30px' }}
        />
        <TextInput
          label="부가 설명을 해주세요"
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ marginBottom: '30px' }}
        />

        <Button
          variant="outline"
          color="green"
          type="submit"
          fullWidth
          style={{ marginBottom: '20px' }}
        >
          매치 생성
        </Button>
      </Paper>
    </form>
  );
};

export default MatchCreateInput;
