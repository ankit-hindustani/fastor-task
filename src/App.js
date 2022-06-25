import './App.css';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import OTPVerify from './components/OTPVerify';
import Dashboard from './components/Dashboard';
import DetailDashboard from './components/DetailDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otpVerify" element={<OTPVerify />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/detail-dashboard" element={<DetailDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
