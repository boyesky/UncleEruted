import React from "react";

const PortHero = () => {
  return (
    <section>
      <article className="h-[70vh] flex lg:flex-row flex-col justify-between itemscenter bgcenter bgno-repeat bg[length:58%_40%] lgbg-[length:40%_98%] lg:mt-[85px] bg[url('https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2019/10/portfolio-13-free-img.png')]">
        <h2 className="flex-1 pl-10 text-[#cd84e1] text-5xl lg:text-7xl font-bold">
          PORTFOLIO
        </h2>
        <div className="flex-1 flex flex-col items-center lg:pl-44 space-y-3 lg:pt-[20px] pt-[280px]">
          <h5 className="text-[#cd84e1] text-xl font-semibold uppercase ">
            Photography Is A Way Of Feeling
          </h5>
          <p className="text-start text-white text-lg font-thin px-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua dolor.
          </p>
        </div>
      </article>
    </section>
  );
};

export default PortHero;
