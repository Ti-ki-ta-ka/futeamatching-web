import HeaderComponent from "./HeaderComponent.jsx";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getMyApplications } from '../api/application';
import MyApplicationComponent from "./MyApplicationComponent.jsx";

const MyApplicationContainer = () => {
  const [applications, setApplications] = useState([])
  const navigate = useNavigate();

  const fetchMyApplications = async () => {
    try {
      const data = await getMyApplications(); 
      setApplications(data);
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  useEffect(() => {
    fetchMyApplications();
  }, []);

  return (
    <div style={{ padding: '0 250px' }}>
      <HeaderComponent/>
      <MyApplicationComponent applications={applications} />
    </div>
  );
};

export default MyApplicationContainer;
