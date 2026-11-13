import React from "react";

const ServiceCol = ({ head, text, num }) => {
  return (
    <section className="relative px-6 space-y-2">
      <div className="flex">
        <h2 className="text-[26px] font-poppins lg:text-[23px] z-50 font-bold text-[#ae44cb]">
          {head}
        </h2>
      </div>
      <div className="flex">
        <p className="z-50 font-redaction text-[15px] text-white">{text}</p>
      </div>
      <div className="absolute top-[-105px]">
        <h1 className="text-[109px] font-bold text-[#bbbbbb]">{num}</h1>
      </div>
    </section>
  );
};

export default ServiceCol;
