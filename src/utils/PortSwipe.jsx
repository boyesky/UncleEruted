import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageA from "../assets/PM1.JPEG";
import imageB from "../assets/WM1.jpg";
import imageC from "../assets/P8.jpg";
import imageD from "../assets/BM1.jpg";
import imageE from "../assets/P2.jpg";
import imageF from "../assets/HM1.jpg";

const images = [imageA, imageB, imageC, imageD, imageE, imageF];

function PauseOnHover() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };
  return (
    <div className="slider-container mt-20">
      <Slider className="-mx-1 sm:mx-0" {...settings}>
        {images.map((src, i) => (
          <div key={i} className="px-1 lg:px-0">
            <img
              src={src}
              alt=""
              className="block w-full h-[200px] lg:h-[400px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PauseOnHover;

// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import imageA from "../assets/image1.jpg";
// import imageB from "../assets/image2.jpg";
// import imageC from "../assets/image3.jpg";

// function AsNavFor() {
//   const [nav1, setNav1] = useState(null);
//   const [nav2, setNav2] = useState(null);
//   let sliderRef1 = useRef(null);
//   let sliderRef2 = useRef(null);

//   useEffect(() => {
//     setNav1(sliderRef1);
//     setNav2(sliderRef2);
//   }, []);
//   return (
//     <div className="slider-container m-[20px]">
//       <Slider
//         className="w-[300px] m-auto"
//         asNavFor={nav2}
//         ref={(slider) => (sliderRef1 = slider)}
//       >
//         <div className="h-[400px]">
//           <img src={imageA} alt="" className="h-full" />
//         </div>
//         <div className="h-[400px]">
//           <img src={imageB} alt="" className="h-full" />
//         </div>
//         <div className="h-[400px]">
//           <img src={imageC} alt="" className="h-full" />
//         </div>
//         <div className="h-[400px]">
//           <img src={imageA} alt="" className="h-full" />
//         </div>
//         <div className="h-[400px]">
//           <img src={imageB} alt="" className="h-full" />
//         </div>
//         <div className="h-[400px]">
//           <img src={imageC} alt="" className="h-full" />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default AsNavFor;
