import React from "react";
import Nav from "../utils/Nav";
import image from "../assets/HBg.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <Nav />
      <section
        style={{ backgroundImage: `url(${image})` }}
        className="lg:h-[120vh] h[60vh] bg-center bg-[length:100%_80%] bgcontain bg-no-repeat  lg:bg-[length:100%_110%] bg[url('https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2020/03/bg-01-free-img.png')]"
      >
        <article className="lg:pl-10 ">
          <div className="lg:pt-56 pt-[280px] px-5 lg:px-0 space-y-2 lg:space-y-3">
            <h5 className="lg:text-2xl text-xl font-bold text-[#dc7ff6]">
              PROFESSIONAL PHOTOGRAPHER
            </h5>
            <h1 className="text-2xl font-bungee lg:text-5xl font-bold text-[#f3f1ca] text[#4a4b7c] ">
              OKUNEYE <br />
              DAVID
            </h1>
            <p className="text-lg font-redaction text-[#f3f1ca] lg:block hidden">
              A professional photographer specializing in portraits, events,
              <br /> and product photography. Through my lens, I capture
              timeless <br />
              moments, vibrant stories, and artistic expressions.
            </p>

            <div className="py-5">
              <Link to="/AboutPage">
                <button className="bg-[#ae44cb] text-white py-2 px-8 font-semibold rounded-lg hover:bg-white hover:text-[#cd84e1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default HeroSection;
