
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/herobg.png";

function SubHero({ title }) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      className="relative h-[280px] md:h-[320px] overflow-hidden bg-[#4F3527]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#2b1c16]/60" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b1c16]/80 via-[#4F3527]/40 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
      <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full max-w-7xl mx-auto flex-col justify-end px-5 pb-10 md:px-10 lg:px-20">
        
        {/* Breadcrumb */}
        <div
          data-aos="fade-up"
          className="mb-3 flex items-center gap-2 text-sm font-medium"
        >
          {/* Functional Home Button */}
          <button
            onClick={() => navigate("/")}
            className="text-white/75 transition-colors duration-300 hover:text-[#DDC7BB]"
          >
            Home
          </button>

          <FaChevronRight className="text-[10px] text-[#DDC7BB]" />

          {/* Current Page */}
          <span className="text-[#DDC7BB]">
            {title}
          </span>
        </div>

        {/* Page Title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </h1>

        {/* Accent */}
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="mt-4 h-1 w-16 rounded-full bg-[#DDC7BB]"
        />
      </div>
    </section>
  );
}

export default SubHero;
