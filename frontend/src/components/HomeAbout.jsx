
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img from "../assets/homeabout.png";

function HomeAbout() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-20 md:py-28 px-5 md:px-10 lg:px-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Image */}
        <div
          className="w-full lg:w-1/2 relative"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          {/* Decorative border */}
          <div className="absolute -left-4 -bottom-4 w-full h-full rounded-[30px] border-2 border-[#4F3527]/10"></div>

          <div className="relative overflow-hidden rounded-[30px] shadow-xl">
            <img
              src={Img}
              alt="Beautiful dream home"
              className="w-full h-[380px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Image Badge */}
            <div
              className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Trusted by
              </p>

              <p className="text-2xl font-bold text-[#4F3527]">
                10K+ Families
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">

          {/* Small Heading */}
          <div
            className="flex items-center gap-3 mb-5"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <span className="w-10 h-[2px] bg-[#4F3527]"></span>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F3527]">
              About Us
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] text-gray-900"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            We Help You Find
            <span className="block text-[#4F3527] mt-2">
              Your Dream Home
            </span>
          </h2>

          {/* Description */}
          <p
            className="mt-6 text-gray-600 text-base md:text-lg leading-8 max-w-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            From cozy cottages to luxurious estates, our dedicated team
            guides you through every step of the journey, ensuring your dream
            home becomes a reality.
          </p>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-200"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {/* Stat 1 */}
            <div className="group">
              <h3 className="text-3xl md:text-4xl font-bold text-[#4F3527] group-hover:-translate-y-1 transition-transform">
                8K+
              </h3>

              <p className="mt-2 text-xs md:text-sm text-gray-500 leading-5">
                Houses
                <br className="md:hidden" /> Available
              </p>
            </div>

            {/* Stat 2 */}
            <div className="group border-l border-gray-200 pl-4 md:pl-8">
              <h3 className="text-3xl md:text-4xl font-bold text-[#4F3527] group-hover:-translate-y-1 transition-transform">
                6K+
              </h3>

              <p className="mt-2 text-xs md:text-sm text-gray-500 leading-5">
                Houses
                <br className="md:hidden" /> Sold
              </p>
            </div>

            {/* Stat 3 */}
            <div className="group border-l border-gray-200 pl-4 md:pl-8">
              <h3 className="text-3xl md:text-4xl font-bold text-[#4F3527] group-hover:-translate-y-1 transition-transform">
                2K+
              </h3>

              <p className="mt-2 text-xs md:text-sm text-gray-500 leading-5">
                Trusted
                <br className="md:hidden" /> Agents
              </p>
            </div>
          </div>

          {/* Button */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="550"
          >
            <button className="mt-9 px-7 py-3.5 bg-[#4F3527] text-white rounded-full font-medium hover:bg-[#38251c] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Explore Properties
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeAbout;