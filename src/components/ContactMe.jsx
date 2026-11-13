import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import { FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // Replace with your actual public key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("succcess");
          formRef.current.reset();

          setTimeout(() => {
            setStatus("idle");
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");

          setTimeout(() => {
            setStatus("idle");
          }, 5000);
        },
      );
  };
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between h-[120vh]">
        <div className="flex-[20%] m-auto py-10 lg:py-0 gap-5 lg:gap-0 lg:space-y-10 flex lg:flex-col flex-row items-center">
          <a
            href="tel:+2349069352665"
            aria-label="Call us"
            className="hover:bg-[#262626] text-[#cdca99] hover:cursor-pointer py-2 px-2 bg-[#5a5a5a] text-2xl"
          >
            <IoCall />
          </a>
          <a
            href="https://wa.me/2348070953724"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hover:bg-[#262626] hover:cursor-pointer py-2 px-2 bg-[#5a5a5a] text-2xl text-[#cdca99]"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:okuneyetewo@gmail.com?subject=Booking%20enquiry"
            aria-label="Send us an email"
            className="hover:bg-[#262626] hover:cursor-pointer py-2 px-2 bg-[#5a5a5a] text-2xl text-[#cdca99]"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.instagram.com/uncleeruted_photography"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
            className="hover:bg-[#262626] hover:cursor-pointer py-2 px-2 bg-[#5a5a5a] text-2xl text-[#cdca99]"
          >
            <FaSquareInstagram />
          </a>
        </div>

        <div className="flex-[40%] bg-gray-400 text-center pt-20">
          <h3 className="text-3xl font-poppins font-semibold py-5 text-[#ae44cb]">
            Planning a shoot?
          </h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-10 p-10">
            <div className="h-[50px] w-full border-[1px] rounded-lg border-[#4a4b7c]">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full h-full indent-4 rounded-lg outline-none"
              />
            </div>
            <div className="h-[50px] w-full border-[1px] rounded-lg border-[#4a4b7c]">
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full h-full indent-4 rounded-lg outline-none"
              />
            </div>
            <div className="h-[50px] w-full border-[1px] rounded-lg border-[#4a4b7c]">
              <input
                type="text"
                name="contact_number"
                placeholder="Contact Number"
                required
                className="w-full h-full indent-4 rounded-lg outline-none"
              />
            </div>
            <div className="h-[100px] w-full border-[1px] rounded-lg border-[#4a4b7c]">
              <textarea
                name="message"
                required
                // type="text"
                placeholder="Message"
                className="w-full h-full py-2 px-4 overflow-hidden rounded-lg outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className={`py-2 px-9 rounded-lg text-white transition-colors ${
                status === "sending"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#ae44cb] hover:cursor-pointer hover:bg-[#cc73e4]"
              } `}
            >
              {status === "sending" ? "sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                <p className="font-semibold">Message sent successfully!</p>
                <p className="text-sm">We'll get back to you soon.</p>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                <p className="font-semibold">Failed to send message.</p>
                <p className="text-sm">Please try again later.</p>
              </div>
            )}
          </form>
        </div>
        <div className="flex-[40%] bg-gra500 lg:pt-48 pt-20 space-y-8">
          <h2 className="lg:text-[44px] font-poppins text-3xl font-semibold text-[#ae44cb] text-center">
            CONTACT ME
          </h2>
          <div className="lg:pl-28 space-y-5 pl-16 pr-10 text-[#ae44cb]">
            <div>
              <h5 className="font-medium font-poppins text-2xl">Phone</h5>
              <p className="text-lg text-white">+234 906 935 2665</p>
            </div>
            <div>
              <h5 className="font-medium font-poppins text-2xl">WhatsApp</h5>
              <p className="text-lg text-white">+234 807 095 3724</p>
            </div>
            <div>
              <h5 className="font-medium font-poppins text-2xl">Email</h5>
              <p className="text-lg text-white">okuneyetewo@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-[200px] lg:mt-0 lg:pt10 bg-black">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3370762692475!2d3.926672200000001!3d7.427899800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed49df2fcab7%3A0x50c4d75edb25b138!2sElder%20Adedokun%20Cl%2C%20Ibadan%20200132%2C%20Oyo!5e0!3m2!1sen!2sng!4v1764770644308!5m2!1sen!2sng"
          className="w-full"
          height="320"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactMe;
