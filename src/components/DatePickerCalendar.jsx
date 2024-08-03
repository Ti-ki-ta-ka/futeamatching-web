import React, { useState } from 'react';
import { Group, Button } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // Import Korean locale

dayjs.locale('ko');

const DatePickerCalendar = ({openCalendar, isOpenCalendar, onDateSelect}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelect = (date) => {
    setSelectedDate(date);
    onDateSelect(date); 
  };
    

  return (
    <Group mt="md" mb="md" spacing="xs" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Button onClick={openCalendar} color="green" variant='outline'>날짜 더보기 / 접기</Button>
      <Calendar
        getDayProps={(date) => ({
          selected: selectedDate && dayjs(date).isSame(selectedDate, 'date'),
          style: {
            backgroundColor: selectedDate && dayjs(date).isSame(selectedDate, 'date') ? '#4caf50' : undefined,
            color: selectedDate && dayjs(date).isSame(selectedDate, 'date') ? 'white' : undefined,
          },
          onClick: () => handleSelect(date),
        })}
        style={{ display: isOpenCalendar ? 'inline' : 'none' }}
        locale="ko"
      />
    </Group>
  );
};

export default DatePickerCalendar;