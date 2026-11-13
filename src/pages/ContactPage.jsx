import React from "react";
import ConHero from "../components/ConHero";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Map from "../utils/Location";
import Address from "../utils/Location";

const ContactPage = () => {
  return (
    <div>
      <ConHero />
      <ContactMe />
      {/* <Address /> */}
      <Footer />
    </div>
  );
};

export default ContactPage;
