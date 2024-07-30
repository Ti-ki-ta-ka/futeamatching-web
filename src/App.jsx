// App.jsx
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TeamListPage from './pages/TeamListPage'
import TeamDetailPage from './pages/TeamDetailPage'
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ModifyProfilePage from './pages/ModifyProfilePage';
import ModifyPasswordPage from './pages/ModifyPasswordPage';
import CreateTeamPage from './pages/CreateTeamPage';
import MatchDetailsPage from './pages/MatchDetailsPage';
import MatchCreatePage from './pages/MatchCreatePage';
import { AuthProvider } from './AuthContext'; 
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import MyApplicationPage from './pages/MyApplicationPage';
import MyTeamMatchPage from './pages/MyTeamMatchPage';
import MyMatchApplicationPage from './pages/MyMatchApplicationPage';


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
            <Route path="/team/detail/:teamId" element={<TeamDetailPage />} />
            <Route path="/match/:id" element={<MatchDetailsPage />} /> 
            <Route path="/matches/create" element={<MatchCreatePage />} /> 
            <Route path="/myapplication" element={<MyApplicationPage />} /> 
            <Route path="/myteammatches" element={<MyTeamMatchPage />} /> 
            <Route path="/mymatchapplications/:id" element={<MyMatchApplicationPage />} /> 
          </Routes>
        </Router>
      </AuthProvider>
    </MantineProvider>
  );
};

export default App;
