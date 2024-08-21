import React, { useEffect, useState } from 'react';
import { Pagination, Select } from '@mantine/core';
import { getRecruitmentApplications } from '../api/recruitment.js';  // Assuming you have this API set up
import RecruitmentApplicationList from './MyTeamRecruitmentApplicationList.jsx';  // Component for listing applications
import HeaderComponent from "./HeaderComponent.jsx";
import { useParams } from 'react-router-dom';

const MyTeamRecruitmentApplicationContainer = () => {
    const { id } = useParams();
    const [applications, setApplications] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [responseStatus, setResponseStatus] = useState("");

    const fetchRecruitmentApplications = async (page, responseStatus) => {
        try {
            const data = await getRecruitmentApplications(id, page - 1, responseStatus || undefined);
            setApplications(data.content);
            setTotalPages(data.totalPages);
            console.log(`data: ${data}`)
        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    useEffect(() => {
        fetchRecruitmentApplications(page, responseStatus);
    }, [page, responseStatus]);

    const handleApplicationReplied = () => {
        fetchRecruitmentApplications(page, responseStatus);
    };

    return (
        <div style={{ padding: '0 250px' }}>
            <HeaderComponent />
            <div style={{ display: 'flex', justifyContent: 'left', marginTop: '1%', marginLeft: '1%', marginBottom: '15px' }}>
                <Select
                    value={responseStatus}
                    onChange={setResponseStatus}
                    data={[
                        { value: '', label: 'All' },
                        { value: 'WAITING', label: 'WAITING' },
                        { value: 'APPROVE', label: 'APPROVE' },
                        { value: 'REJECT', label: 'REJECT' },
                        { value: 'CANCELLED', label: 'CANCELLED' },
                    ]}
                />
            </div>
            <RecruitmentApplicationList 
                recruitmentId={id}
                applications={applications} 
                onApplicationReplied={handleApplicationReplied} 
            />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Pagination
                    page={page}
                    onChange={setPage}
                    total={totalPages}
                    position="center"
                    mt="md"
                    mb="md"
                    color="rgba(56, 196, 10, 1)"
                />
            </div>
        </div>
    );
};

export default MyTeamRecruitmentApplicationContainer;