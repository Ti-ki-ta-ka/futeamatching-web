import React, { useState }  from 'react';
import { Card, Group, Text, Badge, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import {translateRegion} from '../api/translations'

const MainList = ({ matches }) => {
  const navigate = useNavigate();
  const [isButtonStatus, setIsButtonStatus] = useState(false);

  const handleCardClick = (match) => {
    navigate(`/match/${match.id}`, { state: match });
  };

  const handleButtonClick = (match) => {
    navigate("/matches/create");
  };

  const getButtonProps = (matchDate,matchStatus) => {
    const now = dayjs();
    const matchDay = dayjs(matchDate);

    if (matchDay.isBefore(now, 'seconds') || matchStatus) {
      return { label: "마감", color: "gray", disabled: true };
    } else if (matchDay.diff(now, 'day') < 2) {
      return { label: "마감 임박", color: "red", disabled: false };
    } else {
      return { label: "신청 가능", color: "green", disabled: false };
    }
  };

  return (
    <>
      {matches.length === 0 && 
      <div>
        <Text>이 날짜에는 매치가 없네요.. 직접 등록해보는건 어떨까요?</Text>
        <Button 
        onClick={handleButtonClick} 
        color="green">
          매치 생성
        </Button>
      </div>}
      {matches.map((match) => {
        const { label, color, disabled  } = getButtonProps(match.matchDate, match.matchStatus);
        return (
        <Card 
          key={match.id} 
          shadow="sm" 
          padding="lg" 
          radius="md" 
          withBorder 
          mb="md"
          onClick={() => handleCardClick(match)}
          style={{ cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Group>
              <Text fw={500} size="lg">
                {match.title}
              </Text>
              <Badge color="green" variant="light">
              {translateRegion(match.region)}
              </Badge>
            </Group>
          </div>
          <Text size="md">
            {match.content}
          </Text>
          <div style={{ textAlign: 'right' }}>
            <Button 
            style={{marginBottom:'10px'}}
            color={color}
            disabled={disabled}
            >{label}</Button>
            <Text size="sm" color="dimmed">경기 날짜</Text>
            <Text size="sm" color="dimmed">
              {new Date(match.matchDate).toLocaleString()}
            </Text>
          </div>
        </Card>
        );
      })}
    </>
  );
};

export default MainList;
