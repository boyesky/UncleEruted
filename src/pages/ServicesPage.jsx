import React from "react";
import ServHero from "../components/ServHero";
import ServiceList from "../components/ServiceList";
import ServiceCon from "../components/ServiceCon";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <div>
      <ServHero />
      <ServiceList />
      <ServiceCon />
      <Footer />
    </div>
  );
};

export default ServicesPage;
