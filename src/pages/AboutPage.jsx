import React from "react";
import Nav from "../utils/Nav";
import AboutHero from "../components/AboutHero";
import AboutProfile from "../components/AboutProfile";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <section>
      <Nav />
      <AboutHero />
      <AboutProfile />
      <Footer />
    </section>
  );
};

export default AboutPage;
