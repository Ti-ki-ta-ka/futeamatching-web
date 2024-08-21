import React from 'react';
import { Card, Group, Text, Badge, Button } from '@mantine/core';
import { replyRecruitmentApplication } from '../api/recruitment';  // Assuming you have this API set up
import { translateApproveStatus } from '../api/translations';

const RecruitmentApplicationList = ({ recruitmentId, applications, onApplicationReplied }) => {
    const handleReply = async (applicationId, approveStatus) => {
        console.log('Recruitment ID:', recruitmentId);  // Log the recruitment ID
        console.log('Application ID:', applicationId);  // Log the application ID
        console.log('Approve Status:', approveStatus);  // Log the approve status
        try {
            const response = await replyRecruitmentApplication(recruitmentId,applicationId, { approveStatus }.approveStatus);
            console.log('Response from Server:', response);
            onApplicationReplied();
            if(response.staus === 201 && approveStatus === 'APPROVE'){
                alert(`축하드립니다! ${response.user.name}님과 함께하게 되었습니다!`)
            }else if(response.status === 201 && approveStatus === 'REJECT'){
                alert(`${response.user.name}님의 멤버신청이 거절 되었습니다.`)
            }
        } catch (error) {
            console.error("Failed to reply to the application:", error);
        if (error.response) {
            console.error('Error Response Data:', error.response.data);  // Log the response data from the error
            console.error('Error Response Status:', error.response.status);  // Log the status code from the error
        }
        }
    };

    return (
        <>
            {applications.length === 0 && (
                <div>
                    <Text>아직 해당 구인공고에 대한 신청이 없어요! 조금 더 기다려볼까요?</Text>
                </div>
            )}
            {applications.map((application) => (
                <Card key={application.applicationId} shadow="sm" padding="lg" radius="md" withBorder mb="md">
                    {console.dir(applications)}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Group>
                            <Badge color="green" variant="light" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                                신청자 : {application.user.name}
                            </Badge>
                        </Group>
                        <Badge color="green" variant="light">
                            신청 상태 : {translateApproveStatus(application.responseStatus)}
                        </Badge>
                    </div>
                    <Text size="md" style={{ marginTop: '10px' }}>
                        신청자 사이트 가입일: {new Date(application.user.createdAt).toLocaleDateString()}
                    </Text>
                    <div style={{ textAlign: 'right' }}>
                        <Text size="sm" color="dimmed">
                            신청일 : {new Date(application.createdAt).toLocaleString()}
                        </Text>
                    </div>
                    <div style={{ textAlign: 'right', marginTop: '10px' }}>
                        <Button
                            variant="outline"
                            color="blue"
                            onClick={() => handleReply(application.applicationId, 'APPROVE')}
                            disabled={application.responseStatus !== 'WAITING'}
                        >
                            승인하기
                        </Button>
                        <Button
                            variant="outline"
                            color="red"
                            onClick={() => handleReply(application.applicationId, 'REJECT')}
                            disabled={application.responseStatus !== 'WAITING'}
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

export default RecruitmentApplicationList;