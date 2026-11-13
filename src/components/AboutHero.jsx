import React from "react";
import Nav from "../utils/Nav";
import image from "../assets/Profile2.jpg";
import { Typewriter } from "react-simple-typewriter";

const AboutHero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className="h-[100vh] pt-20 bg-bottom lg:bg-center bg-[length:100%_60%] lg:bg-contain bg-no-repeat w[480px]"
    >
      <article className=" lg:mt-[40px]  bg[20%_10%] px-5  flex lg:flex-row flex-col justify-between lg:items-center bgno-repeat bg[url('https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2020/03/about-01-free-img.png')]">
        <div className="flex-1 text-[#ae44cb] lg:mt-[-100px]">
          <h6 className="lg:text-[75px] font-patrickHand sm:text-[70px] text-[33px] sm:pt-20 font-bold">
            <Typewriter
              words={[
                " HI, MY NAME IS DAVID AND I AM A PROFESSIONAL PHOTOGRAPHER.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={90}
              delaySpeed={3000}
            />
          </h6>
        </div>
      </article>
    </section>
  );
};

export default AboutHero;
