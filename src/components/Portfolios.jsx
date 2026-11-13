import React from "react";

import CustomPaging from "../utils/PortSwipe";
import AsNavFor from "../utils/PortSwipe";
import PauseOnHover from "../utils/PortSwipe";

const Portfolios = () => {
  return (
    <section className="h-[80vh] lg:h-[156vh] lg:py-48 lg:px-[36px] px-[55px] py-24">
      <article className="lg:h-[85vh] h-[58vh] bg-left-top bg-[length:100%_55%] bg-no-repeat lgbg-[length:35%_65%] bg[url('https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2019/10/element-01-free-img.png')]">
        <h3 className="text-center font-poppins text-[54px] lg:text-[94px] font-bold text-[#ae44cb]">
          PORTFOLIO
        </h3>
        <p className="text-center text-xl font-semibold text-[#ae44cb]">
          From intimate portraits to commercial campaigns, we create thoughtful,
          compelling imagery that captures people, products, and moments with
          intention.
        </p>

        <PauseOnHover />
      </article>
    </section>
  );
};

export default Portfolios;
