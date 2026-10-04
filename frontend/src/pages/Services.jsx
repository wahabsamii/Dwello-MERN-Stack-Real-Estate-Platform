import React, { useEffect } from "react";
import SubHero from "../components/SubHero";

import {
  HiHome,
  HiOfficeBuilding,
  HiSearch,
  HiDocumentText,
  HiLockClosed,
} from "react-icons/hi";

import { FaChartLine, FaArrowRight } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  const services = [
    {
      icon: HiHome,
      title: "Residential Buying",
      description:
        "Our expert agents help you find the perfect home that fits your lifestyle, preferences, and budget.",
    },
    {
      icon: FaChartLine,
      title: "Property Selling",
      description:
        "Sell your property confidently with professional listing, marketing, staging, and negotiation support.",
    },
    {
      icon: HiOfficeBuilding,
      title: "Commercial Real Estate",
      description:
        "Find the perfect commercial space — retail, office, or industrial — at the right location and price.",
    },
    {
      icon: HiSearch,
      title: "Property Search Assistance",
      description:
        "Not sure where to start? We search listings based on your needs and arrange convenient property viewings.",
    },
    {
      icon: HiDocumentText,
      title: "Legal & Paperwork Support",
      description:
        "From documentation to contracts, we help you navigate the paperwork involved in your property journey.",
    },
    {
      icon: HiLockClosed,
      title: "Rental Property Management",
      description:
        "We manage tenants, maintenance, and rental operations so property ownership becomes easier and more convenient.",
    },
  ];

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
      <SubHero title="Services" />

      <section className="bg-[#faf8f5] py-20 md:py-28 px-5 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div
            className="text-center max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Small Label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#4F3527]"></span>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F3527]">
                What We Offer
              </span>

              <span className="w-10 h-[2px] bg-[#4F3527]"></span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Our Services
            </h2>

            <p className="mt-5 text-gray-500 text-sm md:text-base leading-7">
              At Dwello Properties, we offer a complete range of services to
              help you find, buy, sell, or rent your dream property with ease
              and confidence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mt-14">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  data-aos-duration="900"
                  className="group relative bg-white rounded-3xl p-7 md:p-8
                             border border-gray-100
                             shadow-sm
                             overflow-hidden
                             transition-all duration-500
                             hover:-translate-y-2
                             hover:shadow-2xl"
                >

                  {/* Decorative Circle */}
                  <div
                    className="absolute -right-14 -top-14
                               w-36 h-36 rounded-full
                               bg-[#fdf3ee]
                               transition-transform duration-500
                               group-hover:scale-150"
                  ></div>

                  {/* Number */}
                  <span
                    className="absolute top-6 right-7
                               text-5xl font-bold
                               text-[#4F3527]/5
                               transition-all duration-500
                               group-hover:text-[#4F3527]/10"
                  >
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div
                    className="relative z-10
                               w-16 h-16
                               rounded-2xl
                               bg-[#4F3527]
                               flex items-center justify-center
                               shadow-md
                               transition-all duration-500
                               group-hover:scale-110
                               group-hover:rotate-3"
                  >
                    <Icon
                      size={30}
                      className="text-white"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-7">

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="text-gray-500 text-sm md:text-base leading-7 mt-3">
                      {service.description}
                    </p>

                    {/* Learn More */}
                    <button
                      className="mt-6 flex items-center gap-2
                                 text-sm font-semibold
                                 text-[#4F3527]
                                 group/btn"
                    >
                      Learn More

                      <FaArrowRight
                        className="text-xs
                                   transition-transform duration-300
                                   group-hover/btn:translate-x-1"
                      />
                    </button>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className="absolute bottom-0 left-0
                               h-1 w-0
                               bg-[#4F3527]
                               transition-all duration-500
                               group-hover:w-full"
                  ></div>
                </div>
              );
            })}

          </div>

          {/* Bottom CTA */}
          <div
            className="mt-16 rounded-3xl bg-[#4F3527]
                       px-6 py-10 md:px-12 md:py-12
                       flex flex-col md:flex-row
                       items-center justify-between
                       gap-6 text-center md:text-left"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#DDC7BB]">
                Ready to get started?
              </p>

              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                Let us help you find your perfect property.
              </h3>
            </div>

            <button
              className="flex items-center gap-3
                         bg-white text-[#4F3527]
                         px-7 py-3.5
                         rounded-full
                         font-semibold
                         whitespace-nowrap
                         hover:bg-[#DDC7BB]
                         transition-all duration-300
                         hover:-translate-y-1
                         hover:shadow-lg"
            >
              Contact Us

              <FaArrowRight className="text-sm" />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}

export default Services;