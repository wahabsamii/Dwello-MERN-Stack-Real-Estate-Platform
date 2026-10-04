
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import room from "../assets/rooms.png";
import size from "../assets/size.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Residences() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchProperties = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://dwello-backend-tau.vercel.app/api/property/all"
      );

      setProperties(res.data.properties || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();

    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      className="py-20 md:py-28 px-5 md:px-10 lg:px-20 bg-[#faf8f5]"
      id="properties"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div
          className="text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#4F3527]"></span>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F3527]">
              Featured Properties
            </span>

            <span className="w-10 h-[2px] bg-[#4F3527]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Popular Residences
          </h2>

          <p className="mt-4 text-gray-500 text-sm md:text-base leading-7">
            Discover carefully selected properties that combine comfort,
            style, location, and everything you need to feel at home.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl overflow-hidden shadow-sm animate-pulse"
              >
                <div className="h-[260px] bg-gray-200"></div>

                <div className="p-5 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Properties */}
        {!loading && properties.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {properties.map((item, index) => (
              <div
                key={item._id || index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                data-aos-duration="900"
                className="group bg-white rounded-3xl overflow-hidden shadow-sm
                           hover:shadow-2xl transition-all duration-500
                           hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover
                               transition-transform duration-700
                               group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Price */}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-2xl font-bold drop-shadow-md">
                      {item.price}
                    </p>
                  </div>

                  {/* Property Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#4F3527]
                                     text-xs font-semibold px-4 py-2 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">

                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                    {item.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 mt-2 text-gray-500">
                    <CiLocationOn className="text-xl text-[#4F3527]" />

                    <p className="text-sm line-clamp-1">
                      {item.location}
                    </p>
                  </div>

                  {/* Property Details */}
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">

                    {/* Size */}
                    <div className="flex items-center gap-2">
                      <div className="bg-[#faf8f5] p-2 rounded-lg w-9 h-9">
                        <img
                          src={size}
                          alt="Property size"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">
                          Size
                        </p>

                        <p className="text-sm font-semibold text-[#4F3527]">
                          {item.size}
                        </p>
                      </div>
                    </div>

                    {/* Rooms */}
                    <div className="flex items-center gap-2">
                      <div className="bg-[#faf8f5] p-2 rounded-lg w-9 h-9">
                        <img
                          src={room}
                          alt="Rooms"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">
                          Rooms
                        </p>

                        <p className="text-sm font-semibold text-[#4F3527]">
                          {item.rooms}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between gap-3 mt-6">

                    <button
                      onClick={() =>
                        navigate(`/residence/${item?.slug}`)
                      }
                      className="group/btn flex items-center gap-2
                                 bg-[#4F3527] text-white
                                 px-5 py-3 rounded-full
                                 text-sm font-semibold
                                 hover:bg-[#38251c]
                                 transition-all duration-300"
                    >
                      View Details

                      <FaArrowRight
                        className="text-xs transition-transform duration-300
                                   group-hover/btn:translate-x-1"
                      />
                    </button>

                    <button
                      onClick={() =>
                        navigate(`/residence/${item?.slug}`)
                      }
                      className="w-11 h-11 rounded-full border border-gray-200
                                 flex items-center justify-center
                                 text-[#4F3527]
                                 hover:bg-[#4F3527] hover:text-white
                                 transition-all duration-300"
                      aria-label="View property"
                    >
                      <FaArrowRight className="text-sm" />
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && properties.length === 0 && (
          <div
            className="text-center py-20"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-gray-800">
              No Properties Found
            </h3>

            <p className="text-gray-500 mt-2">
              There are currently no residences available.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Residences;