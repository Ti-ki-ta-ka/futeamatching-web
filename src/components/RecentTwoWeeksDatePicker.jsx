import React, { useState, useEffect } from 'react';
import { Badge, Group, Center, Button } from '@mantine/core';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // Import Korean locale

dayjs.locale('ko');

const RecentTwoWeeksDatePicker = ({onDateSelect, disabled }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const currentDate = dayjs();
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const maxEndDate = currentDate.add(2, 'week'); // 2 weeks from today

  const handleNextDay = () => {
    if (selectedDate.add(1, 'day').isBefore(maxEndDate)) {
      const newDate = selectedDate.add(1, 'day');
      setSelectedDate(newDate);
      onDateSelect(newDate);
    }
  };

  const handlePreviousDay = () => {
    if (selectedDate.subtract(1, 'day').isAfter(currentDate.subtract(1, 'day'))) {
      const newDate = selectedDate.subtract(1, 'day');
      setSelectedDate(newDate);
      onDateSelect(newDate);
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date.startOf('day'));
    onDateSelect(date.startOf('day'));
  };

  const weekStartDate = selectedDate.startOf('week');
  const weekDates = Array.from({ length: 7 }, (_, index) => weekStartDate.add(index, 'day'));

  return (
    <Group position="center" spacing="xl" style={{display: disabled ? 'none' : 'flex' }}>
      <Button onClick={handlePreviousDay} variant="subtle" disabled={selectedDate.isSame(currentDate, 'day')}>
        <AiOutlineLeft size={24} style={{ color: 'lightgray' }} />
      </Button>
      {weekDates
        .filter(date => !date.isBefore(currentDate, 'day') && !date.isAfter(maxEndDate, 'day'))
        .map((date, index) => (
        
        <Center key={index} style={{ flexDirection: 'column', cursor: 'pointer' }} onClick={() => handleDateClick(date)}>
          <Badge
            color={date.isSame(selectedDate, 'day') ? '#4caf50' : 'gray'}
            size="lg"
            radius="xl"
            variant={date.isSame(selectedDate, 'day') ? 'filled' : 'outline'}
          >
            {date.date()}
          </Badge>
          <span style={{ color: date.isSame(selectedDate, 'day') ? 'blue' : date.day() === 0 || date.day() === 6 ? 'red' :'black' }}>
            {daysOfWeek[date.day()]}
          </span>
        </Center>
      ))}
      <Button onClick={handleNextDay} variant="subtle" disabled={selectedDate.isSame(maxEndDate, 'day')}>
        <AiOutlineRight size={24} style={{ color: 'lightgray' }} />
      </Button>
    </Group>
  );
};

export default RecentTwoWeeksDatePicker;