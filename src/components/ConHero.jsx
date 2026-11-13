import React from "react";
import image from "../assets/CBg.jpg";
import Nav from "../utils/Nav";

const ConHero = () => {
  return (
    <section>
      <Nav />
      <article
        style={{ backgroundImage: `url(${image})` }}
        className="lg:h-screen h-fit bg-contain bg-no-repeat bg-center bg[url('https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2019/10/contact-01-free-img.png')]"
      >
        <div className="flex-1 text-center px-10 lg:pt-44 pt-[300px] space-y-2">
          <p className="text-[#ffffff] font-redaction text-lg">
            Have a portrait session in mind, an upcoming celebration, or a
            project for your brand or organization?
          </p>
          <h3 className="text-[#ae44cb] font-poppins text-2xl font-semibold">
            GET IN TOUCH
          </h3>
        </div>
      </article>
    </section>
  );
};

export default ConHero;
