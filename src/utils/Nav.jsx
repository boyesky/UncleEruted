import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Logs from "../assets/logonew.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const mobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <section>
      <nav className="flex items-center justify-between pb[-50px] px-6 lg:px-10 h-24 mt[-50px] mb[-40px] bgtransparent">
        <div>
          <img src={Logs} alt="" className="h-[100px] py-3" />
        </div>

        <div>
          <ul className="lg:flex  text-[#f3f1ca] gap-6 px-20 z-50  text-[20px] font-light  hidden">
            <Link to="/">
              <li className="z-50 hover:cursor-pointer">Home</li>
            </Link>
            <Link to="/AboutPage">
              <li className="z-50 hover:cursor-pointer">About</li>
            </Link>
            <Link to="/ServicePage">
              <li className="z-50 hover:cursor-pointer">Services</li>
            </Link>
            <Link to="/PortfolioPage">
              <li className="z-50 hover:cursor-pointer">Portfolio</li>
            </Link>
            <Link to="/ContactPage">
              <li className="z-50 hover:cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>

        <div className="lg:flex items-center gap-4 px-8 hidden">
          <a
            href="tel:+2349069352665"
            aria-label="Call us"
            className=" hover:cursor-pointer text-2xl text-white"
          >
            <IoCall />
          </a>
          <a
            href="https://wa.me/2348070953724"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className=" hover:cursor-pointer  text-2xl text-white"
          >
            <FaWhatsapp />
          </a>
          {/* <div className=" hover:cursor-pointer  text-xl text-white">
            <FaSquareXTwitter />
          </div> */}
          <a
            href="mailto:okuneyetewo@gmail.com?subject=Booking%20enquiry"
            aria-label="Send us an email"
            className=" hover:cursor-pointer  text-2xl text-white"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.instagram.com/uncleeruted_photography"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
            className=" hover:cursor-pointer  text-2xl text-white"
          >
            <FaSquareInstagram />
          </a>
        </div>

        <div className="lg:hidden bg-[#272839] p-2">
          {showMobileNav ? (
            <MdClose
              data-aos="fade-in"
              data-aos-duration="200"
              onClick={mobileNav}
              className="text-white text-2xl"
            />
          ) : (
            <GiHamburgerMenu
              onClick={mobileNav}
              className="text-white text-2xl"
            />
          )}
        </div>

        {showMobileNav && (
          <section
            data-aos="fade-right"
            data-aos-duration="600"
            className="lg:hidden absolute top-16 z-50 px-6  bg-white w-full h-[200px]"
          >
            <div className="z-50">
              <ul className=" relative flex flex-col itemsend gap-3 py-4 z-50  text-base font-light">
                <Link to="/">
                  <li className="z-50 hover:cursor-pointer">Home</li>
                </Link>
                <Link to="/AboutPage">
                  <li className="z-50 hover:cursor-pointer">About</li>
                </Link>
                <Link to="/ServicePage">
                  <li className="z-50 hover:cursor-pointer">Services</li>
                </Link>
                <Link to="/PortfolioPage">
                  <li className="z-50 hover:cursor-pointer">Portfolio</li>
                </Link>
                <Link to="/ContactPage">
                  <li className="z-50 hover:cursor-pointer">Contact</li>
                </Link>
              </ul>
            </div>
          </section>
        )}
      </nav>
    </section>
  );
};

export default Nav;
