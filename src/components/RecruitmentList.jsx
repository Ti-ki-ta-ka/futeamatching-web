import React, { useEffect, useState } from 'react';
import { Card, Group, Text, Badge, Button, Modal } from '@mantine/core';
import { getRecruitments } from '../api/recruitment';
import { postRecruitmentApplication } from '../api/recruitment';

const RecruitmentList = () => {
  const [recruitments, setRecruitments] = useState([]);
  const [opened, setOpened] = useState(false);
  const [selectedRecruitment, setSelectedRecruitment] = useState(null);

  const handlePostRecruitment = async () => {
    try {
      const data = await postRecruitmentApplication(selectedRecruitment.id);
      if (data.status === 201) {
        alert("신청 되었습니다.");
        setOpened(false);
      } else {
        throw new Error('신청 실패');
      }
    } catch (error) {
      alert("신청이 실패했습니다. 나중에 다시 시도해주세요");
      setOpened(false);
    }
  };

  const openModal = (recruitment) => {
    setSelectedRecruitment(recruitment);
    setOpened(true);
  };

  useEffect(() => {
    const fetchRecruitments = async () => {
      try {
        const data = await getRecruitments();
        setRecruitments(data.content);
      } catch (error) {
        console.error('Error fetching recruitments:', error);
      }
    };

    fetchRecruitments();
  }, []);

  return (
    <>
      {recruitments.map((recruitment) => (
        <Card 
          key={recruitment.id}
          shadow="sm" 
          padding="lg" 
          radius="md" 
          withBorder 
          mb="md" 
          style={{ cursor: 'pointer' }} 
        >
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center' }}>
            <div>
              <Group style={{ marginBottom: '2vh' }}>
                <Text fw={500} size="lg">
                  {recruitment.team.name}
                </Text>
                <Badge color="green" variant="light">
                  {recruitment.team.region}
                </Badge>
              </Group>
              <Text size="md">팀 멤버 수 : {recruitment.team.numMember} / 50</Text>
              <Text size="md">구인 인원 수 : {recruitment.quantity}</Text>
              <Text size="md">구단 측의 한마디 : {recruitment.content}</Text>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Button 
                style={{ margin: '4vh 0vh' }} 
                onClick={() => openModal(recruitment)}
              >
                신청
              </Button>
              <Text size="sm" color="dimmed">창단일</Text>
              <Text size="sm" color="dimmed">
                {new Date(recruitment.team.createAt).toLocaleString()}
              </Text>
            </div>
          </div>
        </Card>
      ))}

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="신청 확인"
        centered
      >
        <Text>정말 신청하시겠습니까?</Text>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button 
        onClick={handlePostRecruitment}
        style={{
          marginRight:'1vw'
        }}>
            네!
          </Button>
          <Button onClick={() => setOpened(false)} color="gray" style={{ marginRight: '10px' }}>
            더 생각해볼게요
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default RecruitmentList;