import React from "react";
import { Link } from "react-router-dom";

const ServiceCon = () => {
  return (
    <section className="pb-5 bg-gray-400">
      <article className="h-72 flex lg:flex-row flex-col lg:gap-20 justify-between items-center lg:mr-10 lg:mx-10 lg:ml-40 bg-left-bottom bg-no-repeat bg-[url('https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2019/10/element-01-free-img.png')]">
        <div className="text-center pt-10 flex-[70%] space-y-4">
          <h3 className="lg:text-[25px] font-poppins text-[18px] pt-5 lg:pt-0 lg:pl-10 font-semibold text-[#ae44cb]">
            Let's create something meaningful.
          </h3>
          <p>
            Contact Uncle Eruted Photography in Ibadan, Nigeria, to discuss
            portraits, weddings, events, product shoots, and brand campaigns.
          </p>
        </div>
        <div className="flex-[30%] text-center">
          <Link to="/ContactPage">
            <button className="bg-white py-3 px-8 font-semibold hover:bg-black hover:text-white">
              Contact Me
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ServiceCon;
