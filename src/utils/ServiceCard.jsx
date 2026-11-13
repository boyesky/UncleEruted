import React from "react";

const ServiceCard = ({ head, period, text }) => {
  return (
    <section>
      <div className="flex flex-col space-y-2">
        <div>
          <h5 className="text-xl font-bold text-[#ae44cb] font-poppins z-50">
            {head}
          </h5>
          <h5 className="text-[12px] font-semibold text-[#ae44cb] z-50">
            {period}
          </h5>
        </div>
        {/* <p className="text-[10px] text-white z-50 w-80">{text}</p> */}
        {text.includes("*") ? (
          <ul className="list-disc font-redaction space-y-1 list-inside text-[14px] text-white z-50 ">
            {text
              .split("*")
              .map((item) => item.trim())
              .filter(Boolean)
              .map((item, i) => (
                <li key={i}>{item}</li>
              ))}
          </ul>
        ) : (
          <p className="text-[14px] font-redaction text-white z-50 w-[350px]">
            {text}
          </p>
        )}
      </div>
    </section>
  );
};

export default ServiceCard;
