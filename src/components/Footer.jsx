import React, { useEffect } from "react";
import { FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

import logg from "../assets/logonew.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="lg:py-32 py-16 lg:mt-6 flex lg:flex-row flex-col lg:justify-between items-center gap-12 px-6"
    >
      <div className="flex-1 text-center mt-[-40px]">
        <div className="flex justify-center ">
          <img src={logg} alt="logo" className="w-[150px] co" />
        </div>
        <p className="text-lg font-patrickHand text-white">
          Every photograph tells a story. We make sure yours is worth
          remembering.
        </p>
      </div>

      <div className="flex items-center justify-center gap-8 flex-1 px-8">
        <a
          href="tel:+2349069352665"
          aria-label="Call us"
          className="hover:bg-[#262626] hover:cursor-pointer py-2 px-2 bg-[#5a5a5a] text-2xl text-white"
        >
          <IoCall />
        </a>
        <a
          href="https://wa.me/2348070953724"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="hover:bg-[#262626] hover:cursor-pointer py-2 px-2 bg-[#5a5a5a] text-2xl text-white"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:okuneyetewo@gmail.com?subject=Booking%20enquiry"
          aria-label="Send us an email"
          className="hover:bg-[#262626] hover:cursor-pointer py-2 px-2 bg-[#5a5a5a] text-2xl text-white"
        >
          <MdEmail />
        </a>
        <a
          href="https://www.instagram.com/uncleeruted_photography"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram"
          className="hover:bg-[#262626] hover:cursor-pointer py-2 px-2 bg-[#5a5a5a] text-2xl text-white"
        >
          <FaSquareInstagram />
        </a>
      </div>

      <div className="space-y-6 flex-1 ">
        <div className="flex flex-row justify-center  gap-5">
          <div className="space-y-2">
            <h4 className="font-semibold font-poppins text-[15px] text-center text-[#ae44cb]">
              WHATSAPP
            </h4>
            <p className="font-semibold text-white text-[17px] text-center">
              +234 807 095 3724
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-poppins text-[15px] text-center text-[#ae44cb]">
              PHONE
            </h4>
            <p className="font-semibold text-white text-[17px] text-center">
              +234 906 935 2665
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold font-poppins text-[#ae44cb] text-center text-[15px]">
            Email
          </h4>
          <p className="text-center font-semibold text-white text-[17px]">
            okuneyetewo@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
