import React, { useEffect } from "react";
import ServiceCard from "../utils/ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="lg:h-[130vh] bgcenter bg-no-repeat lgbg-[length:30%_100%] bg[url('https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2019/10/services-02-free-img.png')]">
      <h1 className="text-7xl font-poppins font-bold text-[#ae44cb] text-center pt-10 lg:pt-32">
        SERVICES
      </h1>
      <article
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="py-16 px-10 gap-14 grid lggrid-cols-[3fr_1fr] lg:grid-cols-3"
      >
        <ServiceCard
          head="CORPORATE & HEADSHOT PHOTOGRAPHY"
          text="Confident, natural, and expressive portraits that highlight who you are. Perfect for personal branding, professional profiles, or simply celebrating yourself."
        />
        <ServiceCard
          head="WEDDING PHOTOGRAPHY"
          text="Your big day, beautifully documented. We capture every emotion, detail, and unforgettable moment so you can relive your wedding story for years to come."
        />
        <ServiceCard
          head="BIRTHDAY PHOTOGRAPHY"
          text="Celebrate your special day with vibrant and stylish photos that showcase your joy, personality, and growth."
        />
        <ServiceCard
          head="OUTREACH & BRAND PHOTOGRAPHY"
          text="On-the-ground coverage of activations, community outreach, and awareness campaigns for brands and organisations."
        />
        <ServiceCard
          head="FASHION PHOTOGRAPHY"
          text="Bold, stylish, and expressive imagery that helps models, designers, and brands stand out with confidence and creativity."
        />
        <ServiceCard
          head="FOOD & PRODUCT PHOTOGRAPHY"
          text="Clean, high-quality images that highlight your products and make them appealing for marketing, advertising, and online sales."
        />
        <ServiceCard
          head="EVENT PHOTOGRAPHY"
          text="Galas, award nights, launches, conferences, and milestone celebrations, documented with an eye for people and atmosphere."
        />
      </article>
    </section>
  );
};

export default Services;
