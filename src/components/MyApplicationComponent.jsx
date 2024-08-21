import React from 'react';
import { Card, Group, Text, Badge, SimpleGrid } from '@mantine/core';
import { translateApproveStatus, translateRegion } from '../api/translations';

const MyApplicationComponent = ({ applications }) => {
  return (
    <>
    <Text fw={500} ta="center" mb="md">매치 신청 내역 ⚽</Text>
    {applications.length === 0 && 
      <div>
        <Text>우리팀이 아직 다른 매치에 신청한 내역이 없어요! 다른 매치들도 살펴볼까요?</Text>
      </div>
      }
      <form
        style={{
          width: '90%',
          margin: 'auto',
          marginTop: 100
        }}
      >
        
        <SimpleGrid cols={3} spacing="lg" breakpoints={[
          { maxWidth: 'sm', cols: 1 }
        ]}>
          {applications.map((application) => (
            
            <Card key={application.id} shadow="sm" padding="lg" radius="md" withBorder mb="md">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Group>
                  <Text fw={700} size="lg">
                    {application.matchPost.title}
                  </Text>
                  <Badge color="green" variant="light">
                    {translateApproveStatus(application.approveStatus)}
                  </Badge>
                  <Badge color="blue" variant="light">
                    {translateRegion(application.matchPost.region)}
                  </Badge>
                </Group>
              </div>

              <div style={{ marginTop: '10px' }}>
                <Text size="md" style={{ marginTop: '10px' }}>
                  <Text fw={700} component="span">경기 장소:</Text> {application.location}
                </Text>
                <Text size="md">
                  <Text fw={700} component="span">내용:</Text> {application.matchPost.content}
                </Text>
                <Text size="md">
                  <Text fw={700} component="span">날짜:</Text> {new Date(application.matchPost.matchDate).toLocaleString()}
                </Text>
              </div>
            </Card>
          ))}
        </SimpleGrid>
      </form>
    </>
  );
};

export default MyApplicationComponent;
