import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import CreateCampaign from "./pages/campaign/CreateCampaign";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateCampaign />} />
        {/* <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;