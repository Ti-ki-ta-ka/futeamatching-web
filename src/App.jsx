import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";

import "@mantine/core/styles.css";

const App = () => {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
