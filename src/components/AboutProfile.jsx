import React, { useEffect } from "react";
import ServiceCard from "../utils/ServiceCard";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutProfile = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="pb-[40px] lg:pb-0">
      <article
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="relative h-[170vh] lg:h-[150vh] bg-left-top px-4 lg:px-12 bg-no-repeat bg-[url('https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2019/10/element-03-free-img.png')]"
      >
        <div className="absolute ml-[-80px] inset-0 bg-[#d4d4d4] opacity-80"></div>
        <div className="flex items-center justify-center py-[50px] text-[#ae44cb]">
          <h3 className="z-50 font-poppins text-[43px] lg:text-4xl font-bold ml-[-22px] lg:ml-0 ">
            WORK PROFILE
          </h3>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="flex lg:flex-row flex-col gap-20 justify-between "
        >
          <div className="grid lg:grid-cols-2 wfull  gap-8 flex1 ml[-28px] ">
            <ServiceCard
              head="Lead Photographer & Creative Director "
              period="Uncle Eruted Photography | 2022 – Present"
              text="* Founded and lead a photography brand specialising in portrait, beauty, wedding, event and product photography.* Oversee creative direction, visual storytelling, concept development and execution of photography projects.* Manage end-to-end client engagements, from initial consultations and creative planning to shooting, post-production and final delivery.* Direct photoshoots, guide clients on posing and expressions, and create visually compelling images that align with client expectations and brand identity.* Manage photography equipment, studio resources, project timelines and client relationships.* Develop marketing strategies, curate visual content and drive brand awareness across digital platforms.* Maintain quality control across image selection, retouching, colour grading and final deliverables."
            />
            <ServiceCard
              head="Lead Photographer "
              period="TNCOD | 2023 – 2026"
              text="* Led the photography team in planning and executing visual coverage for organisational activities, campaigns and events.
* Established creative direction and maintained visual consistency across photography projects.
* Coordinated photography assignments, delegated responsibilities and supervised team members during shoots.
* Managed image selection, editing and delivery to ensure timely, high-quality outputs.
* Collaborated with other departments to develop visual content that supported organisational communication, storytelling and branding.
* Mentored team members and provided guidance on photography techniques, composition and creative execution."
            />
            <ServiceCard
              head="Photographer (Team Member) "
              period="TNCOD | 2021 – 2023"
              text="* Provided photography coverage for organisational events, programmes, campaigns and internal activities.
* Captured and documented key moments, producing images for organisational archives, reports and digital communications.
* Collaborated with fellow photographers and creative team members to execute assigned projects.
* Assisted with image selection, editing, file organisation and delivery.
* Contributed to the development of the organisation’s visual identity through consistent and engaging photographic content."
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutProfile;
