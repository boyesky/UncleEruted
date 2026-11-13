import React, { useEffect } from "react";
import ServiceCol from "../utils/ServiceCol";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceList = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <article
      // data-aos="fade-down"
      // data-aos-easing="linear"
      // data-aos-duration="1000"
      className="h-[290vh] lg:h-[180vh]  py-20 lg:px-4 gap-[74px] lg:gap-8 grid lg:grid-cols-3 ]"
    >
      <ServiceCol
        head="Corporate and Headshot"
        text="Our portrait sessions are all about capturing your personality in the most authentic and flattering way. Whether you need professional headshots, lifestyle portraits, or creative personal branding images, we work closely with you to create a comfortable environment that allows your true self to shine through. From lighting and posing to background selection, every detail is carefully considered to produce clean, confident, and visually appealing portraits."
        num="01"
      />
      <ServiceCol
        head="Wedding Photos"
        text="Your wedding day is one of the most important moments of your life, and we are committed to documenting it with care and precision. Our wedding photography focuses on storytelling capturing not just the big moments, but also the emotions, details, and candid interactions that make your day special. From the preparation stages to the final celebrations, we ensure that every meaningful moment is preserved beautifully, allowing you to relive your day for years to come."
        num="02"
      />
      <ServiceCol
        head="Birthday Photos"
        text="Birthdays are milestones worth celebrating, and our birthday photography sessions are designed to reflect joy, energy, and personality. Whether it's a simple shoot or a themed session, we create vibrant and engaging images that capture the essence of your celebration. These sessions are perfect for individuals looking to make a new age with style and confidence."
        num="03"
      />
      <ServiceCol
        head="Outreach and Brand Photos"
        text="Our outreach and brand photoshoots are designed to help individuals and businesses showcase their best side. Whether you're building your personal brand, promoting your products, or creating content for social media, we work with you to capture clean, professional, and eye-catching images that tell your story."
        num="04"
      />
      <ServiceCol
        head="Fashion Photos"
        text="Fashion is about expression, detail, and identity, and our fashion photography services are tailored to highlight all three. We work with models, designers, and brand to create hogh-quality images that showcase clothing, accessories, and personal style in a compelling way. From editorial-style shoots to lookbooks and campaign visuals, we focus on delivering images that are both artistic and commercially effective."
        num="05"
      />
      <ServiceCol
        head="Food and Product Photos"
        text="In today's digital world, strong visuals are essential for any business. Our product photography services are designed to help your products stand out in a competitive market. We create clean, sharp, and professionally styled images that highlight the features and quality of your products. Whether for e-commerce, social media, or advertising, our goal is to provide images that attract attention and drive engagement."
        num="06"
      />
      <ServiceCol
        head="Event Photos"
        text="Our event photography captures the special moments that make every occasion memorable. From birthdays and weddings to celebrations and corporate events, we focus on the details, emotions, and highlights of your day, creating beautiful images you can cherish for years to come."
        num="07"
      />
    </article>
  );
};

export default ServiceList;
