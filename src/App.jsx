import React from "react";
import "./App.css";
import Nav from "./utils/Nav";
import HeroSection from "./components/HeroSection";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { Route, Routes } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/ServicePage" element={<ServicesPage />} />
      <Route path="/ContactPage" element={<ContactPage />} />
      <Route path="/AboutPage" element={<AboutPage />} />
      <Route path="/PortfolioPage" element={<PortfolioPage />} />
    </Routes>
  );
};

export default App;
