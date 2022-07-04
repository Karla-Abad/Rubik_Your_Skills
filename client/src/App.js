
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AvailableDevs from "./pages/AvailableDevs";
import CompanyDashboard from "./pages/CompanyDashboard";
import CompanyLogin from "./pages/CompanyLogin";
import CompanyRegistration from "./pages/CompanyRegistration";
import NewPosition from "./pages/NewPosition";
import UserLogin from "./pages/UserLogin";
import UserRegistration from './pages/UserRegistration';
import UserSkillsFrameworks from "./pages/UserSkillsFrameworks";
import UserSkillsLanguages from "./pages/UserSkillsLanguages";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserRegistration/>} />
        <Route path="/companies/register" element={<CompanyRegistration/>} />
        <Route path="/devs/login" element={<UserLogin/>} />
        <Route path="/companies/login" element={<CompanyLogin/>} />
        <Route path="/devs/skills/languages" element={<UserSkillsLanguages/>} />
        <Route path="/devs/skills/frameworks" element={<UserSkillsFrameworks/>} />
        <Route path="/orgs/dashboard" element={<CompanyDashboard/>} />
        <Route path="/orgs/jobs/new" element={<NewPosition/>} />
        <Route path="/orgs/jobs/:id" element={<AvailableDevs/>} />
      </Routes>
    </Router>
  );
}

export default App;
