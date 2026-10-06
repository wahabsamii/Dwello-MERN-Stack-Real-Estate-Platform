import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  RiGalleryView2,
  RiUserShared2Fill,
} from "react-icons/ri";

import {
  HiUsers,
  HiArrowUpRight,
} from "react-icons/hi2";

import {
  MdHomeWork,
  MdPeople,
  MdRealEstateAgent,
  MdOutlineVisibility,
} from "react-icons/md";

export default function UserDashboard() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // =================================
  // Fetch Properties
  // =================================
  const fetchProperties = async () => {
    try {
      const res = await axios.get(
        "https://dwello-backend-tau.vercel.app/api/property/all"
      );

      setProperties(res.data.properties || []);
    } catch (error) {
      console.log(error);
    }
  };

  // =================================
  // Fetch Dashboard Data
  // =================================
  useEffect(() => {
    const loadDashboard = async () => {
      setLoading(true);

      await Promise.all([
        fetchProperties(),
      ]);

      setLoading(false);
    };

    loadDashboard();
  }, []);

  // =================================
  // AOS
  // =================================
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });

    AOS.refresh();
  }, []);

  // =================================
  // Agent Statistics
  // =================================

  const activeProperties = properties.filter(
    (property) =>
      property.status === "active" ||
      property.status === "Active"
  );

  const pendingProperties = properties.filter(
    (property) =>
      property.status === "pending" ||
      property.status === "Pending"
  );

  const stats = [
    {
      title: "My Properties",
      value: properties.length,
      icon: <RiGalleryView2 />,
      bg: "bg-[#4F3527]",
      light: "bg-[#f5ebe5]",
      delay: 0,
    },
    {
      title: "Active Listings",
      value: activeProperties.length,
      icon: <MdHomeWork />,
      bg: "bg-[#7b5b49]",
      light: "bg-[#f5ebe5]",
      delay: 150,
    },
    {
      title: "Pending Listings",
      value: pendingProperties.length,
      icon: <MdOutlineVisibility />,
      bg: "bg-[#9b7763]",
      light: "bg-[#f5ebe5]",
      delay: 300,
    },
  ];

  return (
    <div className="space-y-8">

      {/* =================================
          HEADER
      ================================= */}
      <div
        data-aos="fade-down"
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <p className="text-sm font-medium text-[#9b7763] mb-1">
            Overview
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-[#4F3527]">
            Agent Dashboard
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Welcome back! Here's what's happening with your properties.
          </p>
        </div>

        {/* Date */}
        <div
          className="
            bg-white
            border
            border-gray-100
            rounded-2xl
            px-5
            py-3
            shadow-sm
          "
        >
          <p className="text-xs text-gray-400">
            Today
          </p>

          <p className="text-sm font-semibold text-[#4F3527]">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* =================================
          STAT CARDS
      ================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

        {stats.map((item) => (
          <div
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={item.delay}
            className="
              group
              relative
              overflow-hidden
              bg-white
              rounded-3xl
              p-6
              border
              border-gray-100
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            {/* Decorative Circle */}
            <div
              className="
                absolute
                -right-10
                -top-10
                w-32
                h-32
                rounded-full
                bg-[#fdf3ee]
                group-hover:scale-125
                transition-transform
                duration-500
              "
            />

            {/* Top */}
            <div className="relative flex items-start justify-between">

              <div
                className={`
                  w-14
                  h-14
                  rounded-2xl
                  ${item.light}
                  text-[#4F3527]
                  flex
                  items-center
                  justify-center
                  text-2xl
                  group-hover:scale-110
                  transition-transform
                  duration-300
                `}
              >
                {item.icon}
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-1
                  text-xs
                  font-medium
                  text-green-600
                  bg-green-50
                  px-2.5
                  py-1.5
                  rounded-full
                "
              >
                <HiArrowUpRight />
                Active
              </div>
            </div>

            {/* Content */}
            <div className="relative mt-6">

              <p className="text-sm text-gray-500">
                {item.title}
              </p>

              <div className="flex items-end gap-2 mt-1">

                {loading ? (
                  <div className="w-16 h-9 rounded-lg bg-gray-200 animate-pulse" />
                ) : (
                  <h2 className="text-3xl font-bold text-[#4F3527]">
                    {item.value}
                  </h2>
                )}

              </div>
            </div>

            {/* Bottom Line */}
            <div
              className={`
                absolute
                bottom-0
                left-0
                h-1
                w-0
                ${item.bg}
                group-hover:w-full
                transition-all
                duration-500
              `}
            />

          </div>
        ))}

      </div>

      {/* =================================
          OVERVIEW SECTION
      ================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Welcome Card */}
        <div
          data-aos="fade-right"
          className="
            lg:col-span-2
            relative
            overflow-hidden
            rounded-3xl
            bg-[#4F3527]
            text-white
            p-7
            md:p-9
            min-h-[230px]
          "
        >

          {/* Background Decoration */}
          <div
            className="
              absolute
              -right-20
              -top-20
              w-64
              h-64
              rounded-full
              border-[35px]
              border-white/5
            "
          />

          <div
            className="
              absolute
              right-10
              bottom-[-80px]
              w-48
              h-48
              rounded-full
              bg-[#DDC7BB]/10
            "
          />

          <div className="relative max-w-lg">

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-[#DDC7BB]
                text-[#4F3527]
                flex
                items-center
                justify-center
                mb-5
              "
            >
              <MdRealEstateAgent size={25} />
            </div>

            <p className="text-[#DDC7BB] text-sm font-medium mb-2">
              Dwello Agent Portal
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Manage your real estate listings
            </h2>

            <p className="text-white/60 text-sm leading-6">
              Keep track of your properties, monitor your listings,
              and manage your real estate activity from one central dashboard.
            </p>

          </div>
        </div>

        {/* Quick Summary */}
        <div
          data-aos="fade-left"
          className="
            bg-white
            rounded-3xl
            p-6
            border
            border-gray-100
            shadow-sm
          "
        >

          <div className="flex items-center justify-between mb-6">

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Listings
              </p>

              <h3 className="text-lg font-bold text-[#4F3527]">
                Quick Summary
              </h3>
            </div>

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-[#f5ebe5]
                text-[#4F3527]
                flex
                items-center
                justify-center
              "
            >
              <MdPeople size={22} />
            </div>

          </div>

          <div className="space-y-4">

            {/* My Properties */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-9
                    h-9
                    rounded-lg
                    bg-[#f5ebe5]
                    flex
                    items-center
                    justify-center
                    text-[#4F3527]
                  "
                >
                  <MdHomeWork />
                </div>

                <span className="text-sm text-gray-600">
                  My Properties
                </span>

              </div>

              <span className="font-bold text-[#4F3527]">
                {loading ? "..." : properties.length}
              </span>

            </div>

            {/* Active Listings */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-9
                    h-9
                    rounded-lg
                    bg-[#f5ebe5]
                    flex
                    items-center
                    justify-center
                    text-[#4F3527]
                  "
                >
                  <HiUsers />
                </div>

                <span className="text-sm text-gray-600">
                  Active Listings
                </span>

              </div>

              <span className="font-bold text-[#4F3527]">
                {loading ? "..." : activeProperties.length}
              </span>

            </div>

            {/* Pending */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-9
                    h-9
                    rounded-lg
                    bg-[#f5ebe5]
                    flex
                    items-center
                    justify-center
                    text-[#4F3527]
                  "
                >
                  <RiUserShared2Fill />
                </div>

                <span className="text-sm text-gray-600">
                  Pending Listings
                </span>

              </div>

              <span className="font-bold text-[#4F3527]">
                {loading ? "..." : pendingProperties.length}
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* =================================
          FOOTER STATUS
      ================================= */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-3
          bg-white
          rounded-2xl
          border
          border-gray-100
          px-5
          py-4
          shadow-sm
        "
      >

        <div className="flex items-center gap-3">

          <span
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-green-500
              animate-pulse
            "
          />

          <p className="text-sm text-gray-600">
            Your agent dashboard is running normally
          </p>

        </div>

        <p className="text-xs text-gray-400">
          Dwello Agent Panel
        </p>

      </div>

    </div>
  );
}
