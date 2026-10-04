
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaHome, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";
import bgImg from "../assets/herobg.png";

function HomeHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });

    AOS.refresh();
  }, []);

  return (
    <section
      className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#fdf3ee] sm:min-h-[750px] lg:min-h-[calc(100vh-70px)]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fdf3ee] via-[#fdf3ee]/90 to-[#fdf3ee]/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-white/10" />

      {/* Decorative Background Circle */}
      <div className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-[#c28b6b]/10 blur-3xl" />

      {/* Hero Content */}
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-2xl">

          {/* Eyebrow Label */}
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d9b8a3]/60 bg-white/60 px-4 py-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#b67553]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b6447] sm:text-sm">
              Discover Your Place
            </span>
          </div>

          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-6 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-[#28221e] sm:text-6xl md:text-7xl lg:text-[82px]"
          >
            Find Your
            <br />
            <span className="relative inline-block text-[#a96748]">
              Dream Home
              <span className="absolute -bottom-2 left-0 h-1 w-2/3 rounded-full bg-[#c99b7d]/70" />
            </span>
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="mb-8 max-w-lg text-base leading-7 text-[#62564e] sm:text-lg sm:leading-8"
          >
            Explore our curated selection of exquisite properties,
            thoughtfully chosen to match your lifestyle, aspirations,
            and vision of the perfect home.
          </p>

          {/* Action Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#properties"
              className="group inline-flex items-center gap-3 rounded-full bg-[#302720] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(48,39,32,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a96748] hover:shadow-[0_15px_35px_rgba(169,103,72,0.28)]"
            >
              Explore Properties
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#properties"
              className="inline-flex items-center gap-2 rounded-full border border-[#b9a398] bg-white/50 px-7 py-4 text-sm font-semibold text-[#40352d] backdrop-blur-sm transition-all duration-300 hover:border-[#a96748] hover:bg-white/80"
            >
              Discover More
            </a>
          </div>

          {/* Feature Highlights */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[#bba99c]/50 pt-7 sm:gap-x-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5b49f] bg-white/60 text-[#a96748]">
                <FaHome size={17} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#352a23]">
                  Premium
                </p>
                <p className="text-xs text-[#77675c]">Properties</p>
              </div>
            </div>

            <div className="hidden h-9 w-px bg-[#cbb9ad] sm:block" />

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5b49f] bg-white/60 text-[#a96748]">
                <FaShieldAlt size={16} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#352a23]">
                  Trusted
                </p>
                <p className="text-xs text-[#77675c]">Agents</p>
              </div>
            </div>

            <div className="hidden h-9 w-px bg-[#cbb9ad] sm:block" />

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5b49f] bg-white/60 text-[#a96748]">
                <FaMapMarkerAlt size={16} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#352a23]">
                  Prime
                </p>
                <p className="text-xs text-[#77675c]">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#properties"
        data-aos="fade-up"
        data-aos-delay="900"
        aria-label="Scroll to properties"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#fdf3ee] transition-opacity hover:opacity-70 md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
        <span className="h-8 w-5 rounded-full border border-current p-1">
          <span className="mx-auto block h-2 w-1 rounded-full bg-current animate-bounce" />
        </span>
      </a>
    </section>
  );
}

export default HomeHero;