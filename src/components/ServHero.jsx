import React from "react";
import image from "../assets/SBg.jpg";
import Nav from "../utils/Nav";

const ServHero = () => {
  return (
    <section>
      <Nav />
      <article
        style={{ backgroundImage: `url(${image})` }}
        className="lg:h-[90vh] h-[50vh]  px-5 pl10 lgflex-row flexcol lgjustify-between lgitems-start lg:bg-[length:100%_160%] bg-cover bg-center bg-no-repeat bg[url('https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2019/10/services-03-free-img.png')]"
      >
        <div className="flex[50%] flex flex-col items-center justify-center lg:min-h-screen h-[50vh] text-center lgpt-32 pt[100px] lgpl[230px] space-y-3">
          <h4 className="font-bold text-[#ae44cb] font-poppins text-3xl">
            SERVICES
          </h4>
          <p className="text-white font-redaction text-center lg:px-60">
            Every commission is approached with the same care: a clear
            understanding of what you need, thoughtful creative direction, and
            images made to serve their purpose.
          </p>
        </div>
      </article>
    </section>
  );
};

export default ServHero;
