// App.jsx
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TeamListPage from './pages/TeamListPage'
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ModifyProfilePage from './pages/ModifyProfilePage';
import ModifyPasswordPage from './pages/ModifyPasswordPage';
import { AuthProvider } from './AuthContext'; 
import "@mantine/core/styles.css";
import CreateTeamPage from './pages/CreateTeamPage';


const App = () => {
  return (
    <MantineProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/profile" element={<ModifyProfilePage />} />
            <Route path="/password" element={<ModifyPasswordPage />} />
            <Route path="/team/create" element={<CreateTeamPage />} />
            <Route path="/team/list" element={<TeamListPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </MantineProvider>
  );
};

export default App;
