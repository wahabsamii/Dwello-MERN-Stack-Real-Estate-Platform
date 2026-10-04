import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaAngleRight,
  FaAngleLeft,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";

function Testimonials() {
  const testimonials = [
    {
      image: test1,
      name: "Sarah Nguyen",
      location: "San Francisco",
      rating: "5.0",
      text: "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    },
    {
      image: test2,
      name: "Michael Rodriguez",
      location: "San Diego",
      rating: "4.5",
      text: "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
    },
    {
      image: test3,
      name: "Emily Johnson",
      location: "Los Angeles",
      rating: "5.0",
      text: "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
    },
    {
      image: test1,
      name: "David Wilson",
      location: "Seattle",
      rating: "4.8",
      text: "The entire process was incredibly smooth. The Dwello team understood exactly what I was looking for and helped me find a beautiful home within my budget.",
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
    <section className="relative overflow-hidden bg-[#fdf3ee] py-20 md:py-28 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div
          className="text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Small Label */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-[2px] bg-[#4F3527]"></span>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F3527]">
              Testimonials
            </span>

            <span className="w-10 h-[2px] bg-[#4F3527]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            What People Say
            <span className="block text-[#4F3527]">
              About Dwello
            </span>
          </h2>

          <p className="mt-4 text-gray-500 text-sm md:text-base leading-7">
            Real experiences from people who found their perfect home with
            our dedicated team.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div
          className="relative mt-14"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >

          {/* Previous Button */}
          <button
            className="custom-prev absolute left-0 md:-left-6 top-1/2
                       -translate-y-1/2 z-20
                       w-11 h-11 md:w-12 md:h-12
                       bg-white rounded-full
                       flex items-center justify-center
                       text-[#4F3527]
                       shadow-lg
                       hover:bg-[#4F3527] hover:text-white
                       transition-all duration-300
                       hover:-translate-x-1"
            aria-label="Previous testimonial"
          >
            <FaAngleLeft />
          </button>

          {/* Next Button */}
          <button
            className="custom-next absolute right-0 md:-right-6 top-1/2
                       -translate-y-1/2 z-20
                       w-11 h-11 md:w-12 md:h-12
                       bg-white rounded-full
                       flex items-center justify-center
                       text-[#4F3527]
                       shadow-lg
                       hover:bg-[#4F3527] hover:text-white
                       transition-all duration-300
                       hover:translate-x-1"
            aria-label="Next testimonial"
          >
            <FaAngleRight />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-14"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div
                  className="group relative h-full min-h-[330px]
                             bg-white rounded-3xl p-7 md:p-8
                             shadow-sm
                             border border-white
                             transition-all duration-500
                             hover:-translate-y-2
                             hover:shadow-2xl"
                >

                  {/* Quote Icon */}
                  <div
                    className="absolute top-6 right-7
                               w-11 h-11 rounded-full
                               bg-[#fdf3ee]
                               flex items-center justify-center
                               text-[#4F3527]
                               transition-all duration-300
                               group-hover:bg-[#4F3527]
                               group-hover:text-white"
                  >
                    <FaQuoteLeft className="text-sm" />
                  </div>

                  {/* User */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#DDC7BB]">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover
                                   transition-transform duration-500
                                   group-hover:scale-110"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-5">
                    <div className="flex gap-1 text-[#e4a62a]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className="text-sm"
                        />
                      ))}
                    </div>

                    <span className="ml-2 text-sm font-semibold text-gray-700">
                      {testimonial.rating}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-[2px] bg-[#DDC7BB] my-5"></div>

                  {/* Review */}
                  <p className="text-gray-600 text-sm md:text-base leading-7">
                    "{testimonial.text}"
                  </p>

                  {/* Bottom Accent */}
                  <div
                    className="absolute bottom-0 left-8 right-8
                               h-1 bg-[#4F3527]
                               scale-x-0 origin-left
                               rounded-full
                               transition-transform duration-500
                               group-hover:scale-x-100"
                  ></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Trust Text */}
        <div
          className="text-center mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-sm text-gray-500">
            Trusted by homeowners and property seekers
            <span className="font-semibold text-[#4F3527]">
              {" "}across the country.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;