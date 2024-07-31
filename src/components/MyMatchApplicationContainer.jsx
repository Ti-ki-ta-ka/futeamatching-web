import React, { useEffect, useState } from 'react';
import { Pagination, Select } from '@mantine/core';
import { getMyMatchApplications } from '../api/matchapplication';
import MyMatchApplicationList from './MyMatchApplicationList';
import HeaderComponent from "./HeaderComponent.jsx";
import { IconSoccerField } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';

const MyMatchApplicationContainer = () => {
    const { id } = useParams();
    const [applications, setApplications] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [approveStatus, setApproveStatus] = useState("");

    const fetchMyMatchApplications = async (page, approveStatus) => {
        try {
            const data = await getMyMatchApplications(id, page - 1, approveStatus || undefined);
            console.log(data)
            setApplications(data.content);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    useEffect(() => {
        fetchMyMatchApplications(page, approveStatus);
    }, [page, approveStatus]);

    return (
        <div style={{ padding: '0 250px' }}>
            <HeaderComponent />
            <div style={{ display: 'flex', justifyContent: 'left', marginTop: '1%', marginLeft: '1%', marginBottom: '15px' }}>
                <Select
                    rightSection={<IconSoccerField size="1.5rem" />}
                    value={approveStatus}
                    onChange={setApproveStatus}
                    data={[
                        { value: '', label: 'All' },
                        { value: 'WAITING', label: 'WAITING' },
                        { value: 'APPROVE', label: 'APPROVE' },
                        { value: 'REJECT', label: 'REJECT' },
                        { value: 'CANCELLED', label: 'CANCELLED' },
                    ]}
                />
            </div>
            <MyMatchApplicationList applications={applications} />
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

export default MyMatchApplicationContainer;
