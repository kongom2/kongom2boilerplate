import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<AuthLandingPage />} />
            <Route exact path="/login" element={<AuthLoginPage />} />
            <Route exact path="/register" element={<AuthRegisterPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
