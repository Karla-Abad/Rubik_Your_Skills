
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CompanyLogin from "./pages/CompanyLogin";
import CompanyRegistration from "./pages/CompanyRegistration";
import UserLogin from "./pages/UserLogin";
import UserRegistration from './pages/UserRegistration';
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
      </Routes>
    </Router>
  );
}

export default App;
