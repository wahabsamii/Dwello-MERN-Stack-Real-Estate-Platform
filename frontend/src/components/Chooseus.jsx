
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

function Chooseus() {
  const features = [
    {
      icon: icon1,
      title: "Expert Guidance",
      description:
        "Benefit from our team's seasoned expertise for a smooth buying experience.",
    },
    {
      icon: icon2,
      title: "Personalized Service",
      description:
        "Our services adapt to your unique needs, making your journey stress-free.",
    },
    {
      icon: icon3,
      title: "Transparent Process",
      description:
        "Stay informed with our clear and honest approach to buying your home.",
    },
    {
      icon: icon4,
      title: "Exceptional Support",
      description:
        "Providing peace of mind with our responsive and attentive customer service.",
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
    <section className="px-5 md:px-10 lg:px-20 py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div
          className="text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Small label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#4F3527]"></span>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F3527]">
              Why Choose Us
            </span>

            <span className="w-10 h-[2px] bg-[#4F3527]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Why Choose Us
          </h2>

          <p className="mt-4 text-gray-500 text-sm md:text-base leading-7">
            Elevating your home buying experience with expertise, integrity,
            and unmatched personalized service.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-14">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="900"
              className="group relative bg-[#DDC7BB] rounded-2xl p-6 min-h-[270px] overflow-hidden
                         transition-all duration-500
                         hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Decorative circle */}
              <div
                className="absolute -right-12 -top-12 w-32 h-32 rounded-full
                           bg-white/20 transition-transform duration-500
                           group-hover:scale-150"
              ></div>

              {/* Icon */}
              <div
                className="relative flex items-center justify-center
                           bg-white w-[72px] h-[72px] rounded-2xl p-4
                           shadow-sm transition-all duration-500
                           group-hover:rotate-3 group-hover:scale-105"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="font-bold text-xl text-[#3b2921] mt-6 mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm md:text-base text-[#5c4a42] leading-6">
                  {feature.description}
                </p>
              </div>

              {/* Bottom line */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 bg-[#4F3527]
                           transition-all duration-500 group-hover:w-full"
              ></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Chooseus;