import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import AmazonPage from "./pages/Amazon";
import BlinkitPage from "./pages/Blinkit";
import UrbanPage from "./pages/Urban";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";
import Associates from "./pages/Associates";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/amazon" element={<AmazonPage />} />
          <Route path="/blinkit" element={<BlinkitPage />} />
          <Route path="/urban" element={<UrbanPage />} />
          <Route path="/associates" element={<Associates />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
