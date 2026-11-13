import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSec from "../components/AboutSec";
import Services from "../components/Services";

import Footer from "../components/Footer";
import Portfolios from "../components/Portfolios";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSec />
      <Services />
      <Portfolios />

      <Footer />
    </div>
  );
};

export default HomePage;
