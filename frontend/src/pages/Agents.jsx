
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaArrowRight,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

import SubHero from "../components/SubHero";

const agents = [
  {
    name: "Sarah Nguyen",
    city: "San Francisco",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    description:
      "Sarah is a dedicated agent with a passion for helping families find their dream homes. Known for her honesty and attention to detail.",
  },
  {
    name: "Michael Rodriguez",
    city: "San Diego",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Michael specializes in luxury properties and has a proven track record in closing high-value deals quickly and efficiently.",
  },
  {
    name: "Emily Johnson",
    city: "Los Angeles",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "Emily makes buying or selling a home seamless. She’s praised for her communication skills and client-first approach.",
  },
  {
    name: "David Kim",
    city: "New York",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    description:
      "David brings years of commercial real estate experience and always ensures his clients get the best value and location.",
  },
];

function Agents() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      {/* Page Hero */}
      <SubHero title="Our Agents" />

      {/* Agents Section */}
      <section className="bg-[#faf8f5] py-20 md:py-28 px-5 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div
              data-aos="fade-down"
              className="flex items-center justify-center gap-3 mb-4"
            >
              <span className="h-px w-10 bg-[#DDC7BB]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F3527]">
                Our Professionals
              </span>

              <span className="h-px w-10 bg-[#DDC7BB]" />
            </div>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4F3527] leading-tight"
            >
              Meet Our Expert Agents
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-5 text-gray-600 leading-7"
            >
              Our team of experienced and passionate real estate professionals
              is here to guide you through every step of your property journey.
            </p>
          </div>

          {/* Agents Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {agents.map((agent, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Top Image Area */}
                <div className="relative h-[250px] overflow-hidden bg-[#DDC7BB]">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c16]/70 via-transparent to-transparent opacity-70" />

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                    <FaStar className="text-[#d99b35] text-xs" />
                    <span className="text-xs font-bold text-[#4F3527]">
                      5.0
                    </span>
                  </div>

                  {/* Social Buttons */}
                  <div className="absolute bottom-4 left-4 flex gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <button
                      className="w-9 h-9 rounded-full bg-white text-[#4F3527] flex items-center justify-center hover:bg-[#4F3527] hover:text-white transition"
                      aria-label={`${agent.name} Instagram`}
                    >
                      <FaInstagram size={13} />
                    </button>

                    <button
                      className="w-9 h-9 rounded-full bg-white text-[#4F3527] flex items-center justify-center hover:bg-[#4F3527] hover:text-white transition"
                      aria-label={`${agent.name} LinkedIn`}
                    >
                      <FaLinkedinIn size={13} />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4F3527] group-hover:text-[#703c29] transition-colors">
                    {agent.name}
                  </h3>

                  <div className="flex items-center gap-1.5 mt-2 text-gray-500">
                    <HiLocationMarker className="text-[#703c29]" />
                    <span className="text-sm">{agent.city}</span>
                  </div>

                  <div className="h-px bg-gray-100 my-4" />

                  <p className="text-sm text-gray-600 leading-6">
                    {agent.description}
                  </p>

                  {/* View Profile */}
                  <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#4F3527] group/btn">
                    View Profile
                    <span className="w-7 h-7 rounded-full bg-[#fdf3ee] flex items-center justify-center group-hover/btn:bg-[#4F3527] group-hover/btn:text-white transition-all duration-300">
                      <FaArrowRight className="text-[10px] group-hover/btn:translate-x-0.5 transition-transform" />
                    </span>
                  </button>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#4F3527] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="relative overflow-hidden mt-16 rounded-3xl bg-[#4F3527] px-6 py-10 md:px-12 md:py-12 text-center"
          >
            {/* Decorative circles */}
            <div className="absolute -right-16 -top-20 w-56 h-56 rounded-full border border-white/10" />
            <div className="absolute -left-20 -bottom-24 w-64 h-64 rounded-full border border-white/10" />

            <div className="relative z-10">
              <p className="text-[#DDC7BB] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Need Expert Guidance?
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Let's Find Your Perfect Property
              </h3>

              <p className="text-white/70 max-w-xl mx-auto mt-3 text-sm md:text-base">
                Connect with one of our experienced agents and take the next
                step toward finding a home that fits your lifestyle.
              </p>

              <button className="mt-6 inline-flex items-center gap-3 bg-[#DDC7BB] text-[#4F3527] px-6 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300 group">
                Contact an Agent

                <span className="w-7 h-7 rounded-full bg-[#4F3527] text-white flex items-center justify-center group-hover:bg-[#DDC7BB] group-hover:text-[#4F3527] transition">
                  <FaArrowRight className="text-xs" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Agents;