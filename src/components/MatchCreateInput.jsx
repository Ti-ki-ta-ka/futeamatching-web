import { Button, TextInput, Text, Paper, MultiSelect } from "@mantine/core";
import { DateTimePicker } from '@mantine/dates';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

const MatchCreateInput = ({ createMatch }) => {
  const [title, setTitle] = useState('');
  const [matchDateTime, setMatchDateTime] = useState(null);
  const [region, setRegion] = useState([]);
  const [location, setLocation] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleCreateMatch = async (event) => {
    event.preventDefault();

    if (!matchDateTime) {
      alert('경기 날짜와 시간을 선택해 주세요.');
      return;
    }

    const formattedDateTime = dayjs(matchDateTime).format('YYYY-MM-DDTHH:mm:ss');
    const regionsString = region.join(','); 

    try {
      const data = await createMatch({
        title,
        matchDate: formattedDateTime,
        region: regionsString,
        location,
        content,
      });
      navigate('/main');
    } catch (error) {
      console.error("매치 생성 실패", error);
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
          label="Title"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />

        <DateTimePicker
          label="Match Date & Time"
          placeholder="경기 날짜와 시간"
          value={matchDateTime}
          onChange={setMatchDateTime}
          required
          locale="ko"
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
        <TextInput
          label="Location"
          placeholder="경기 장소"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          style={{ marginBottom: '30px' }}
        />
        <TextInput
          label="Content"
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
