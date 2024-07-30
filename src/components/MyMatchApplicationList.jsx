import React from 'react';
import { Card, Group, Text, Badge } from '@mantine/core';

const MyMatchApplicationList = ({ applications }) => {
    console.log("applications", applications);
    return (
        <>
            {applications.map((application) => (
                <Card key={application.id} shadow="sm" padding="lg" radius="md" withBorder mb="md">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Group>
                            <Badge color="green" variant="light" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                                신청 팀: {application.applyTeamName}
                            </Badge>
                        </Group>
                        <Badge color="green" variant="light">
                            상태: {application.approveStatus}
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
                </Card>
            ))}
        </>
    );
};

export default MyMatchApplicationList;
