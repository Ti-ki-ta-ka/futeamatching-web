import React from 'react';
import { Card, Group, Text, Badge, Button } from '@mantine/core';
import { replyMatchApplication } from '../api/matchapplication';
import { translateApproveStatus } from '../api/translations';

const MyMatchApplicationList = ({ applications, matchId, onApplicationReplied }) => {
    const handleReply = async (applicationId, approveStatus) => {
        try {
            await replyMatchApplication(matchId, applicationId, { approveStatus });
            onApplicationReplied();
        } catch (error) {
            console.error("응답 실패:", error);
        }
    };

    return (
        <>
        {applications.length === 0 && 
      <div>
        <Text>아직 이 매치에 신청한 팀이 없어요! 조금 더 기다려볼까요?</Text>
      </div>}
            {applications.map((application) => (
                <Card key={application.id} shadow="sm" padding="lg" radius="md" withBorder mb="md">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Group>
                            <Badge color="green" variant="light" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                                신청 팀: {application.applyTeamName}
                            </Badge>
                        </Group>
                        <Badge color="green" variant="light">
                            상태: {translateApproveStatus(application.approveStatus)}
                        </Badge>
                    </div>
                    <Text size="md" style={{ marginTop: '10px' }}>
                        신청자: {application.applyUserName}
                    </Text>
                    <div style={{ textAlign: 'right' }}>
                        <Text size="sm" color="dimmed">
                            생성 시간: {new Date(application.createdAt).toLocaleString()}
                        </Text>
                    </div>
                    <div style={{ textAlign: 'right', marginTop: '10px' }}>
                        <Button
                            variant="outline"
                            color="blue"
                            onClick={() => handleReply(application.id, 'APPROVE')}
                            disabled={application.approveStatus !== 'WAITING'}
                        >
                            승인하기
                        </Button>
                        <Button
                            variant="outline"
                            color="red"
                            onClick={() => handleReply(application.id, 'REJECT')}
                            disabled={application.approveStatus !== 'WAITING'}
                            style={{ marginLeft: '10px' }}
                        >
                            거절하기
                        </Button>
                    </div>
                </Card>
            ))}
        </>
    );
};

export default MyMatchApplicationList;
