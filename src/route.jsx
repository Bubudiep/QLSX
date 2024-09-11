import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./app/home";
import Index from "./app";
import Dashboard from "./app/home/dashboard";
import Settings from "./app/home/settings";
import Schedule from "./app/home/schedule";
import Planning from "./app/home/planning";
import Department from './app/home/department';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Home />}>
        {/* Define child routes here */}
        <Route index element={<Dashboard />} /> {/* Đặt Dashboard làm trang mặc định */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="planning" element={<Planning />} />
        <Route path="department" element={<Department />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="dashboard" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
