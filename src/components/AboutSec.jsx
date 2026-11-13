import React, { useEffect } from "react";
import image from "../assets/Profile1.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSec = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg[#c0c1cf] h-[150vh] lg:py-0 py-10">
      <article className="flex h-full flex-col-reverse md:flex-row lg:flexrow flexcol pt20">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="relative flex-[50%] bg-cover bg-center"
        >
          <div className="bg-black absolute inset-0 opacity-50"></div>
          <div className=" flex flex-col items-center h-[250px] lg:h-screen justify-center space-y-3 lg:pt-[388px] pt-[490px]">
            <h2 className="z-50 text-white text-sm font-semibold text-center">
              Tell me what you're planning, and let's explore how we can bring
              it to life.
            </h2>

            <div className="z-50">
              <Link to="/ContactPage">
                <button className="bg-white py-3 px-8 font-semibold hover:bg-black hover:text-white">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="flex-[50%] items-center justify-center flex flex-col px-8 lg:px-20 py-16 space-y-5"
        >
          <h1 className="lg:text-7xl font-poppins text-4xl font-bold text-[#ae44cb] text-center">
            ABOUT
          </h1>

          <p className="text-white font-redaction text-center ">
            Uncle Eruted Photography is a photography brand built around a
            simple belief: an image should do more than document a moment. It
            should communicate a feeling, tell a story, and give people
            something worth remembering. Led by Dr. David and based in Ibadan,
            Nigeria, the brand explores portraiture, beauty, events, and
            commercial photography through a thoughtful, intentional creative
            process. Whether working with an individual, a couple, a business,
            or an organisation, the goal remains the same: to create compelling
            imagery that feels considered, authentic, and visually meaningful.
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutSec;
