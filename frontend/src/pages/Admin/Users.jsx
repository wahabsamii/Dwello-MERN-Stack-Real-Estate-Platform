
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  MdSearch,
  MdEmail,
  MdPerson,
} from "react-icons/md";

import { HiArrowUpRight } from "react-icons/hi2";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // ================================
  // Fetch Users
  // ================================
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        "https://dwello-backend-tau.vercel.app/api/auth/all"
      );

      if (res.data.success) {
        setUsers(res.data.users || []);
      } else {
        setError("Failed to load users.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "An error occurred while fetching users."
      );
    } finally {
      setLoading(false);
    }
  };

  // ================================
  // AOS
  // ================================
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });

    AOS.refresh();
  }, []);

  // ================================
  // Fetch
  // ================================
  useEffect(() => {
    fetchUsers();
  }, []);

  // ================================
  // Search
  // ================================
  const filteredUsers = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    if (!searchValue) {
      return users;
    }

    return users.filter((user) => {
      const name = user.name?.toLowerCase() || "";
      const email = user.email?.toLowerCase() || "";

      return (
        name.includes(searchValue) ||
        email.includes(searchValue)
      );
    });
  }, [users, search]);

  return (
    <div className="space-y-7">

      {/* =====================================
          PAGE HEADER
      ===================================== */}
      <div
        data-aos="fade-down"
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
        "
      >
        <div>
          <p className="text-sm font-medium text-[#9b7763] mb-1">
            Management
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-[#4F3527]">
            Users
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Manage and view all registered users.
          </p>
        </div>

        {/* Total Users */}
        <div
          className="
            flex
            items-center
            gap-3
            bg-white
            border
            border-gray-100
            rounded-2xl
            px-4
            py-3
            shadow-sm
          "
        >
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
            <MdPerson size={22} />
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Total Users
            </p>

            <p className="text-lg font-bold text-[#4F3527]">
              {users.length}
            </p>
          </div>
        </div>
      </div>

      {/* =====================================
          SEARCH
      ===================================== */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="
          bg-white
          rounded-2xl
          border
          border-gray-100
          shadow-sm
          p-4
        "
      >
        <div className="relative max-w-md">

          <MdSearch
            size={21}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users by name or email..."
            className="
              w-full
              h-11
              bg-[#faf8f5]
              border
              border-gray-100
              rounded-xl
              pl-10
              pr-4
              text-sm
              text-gray-700
              outline-none
              focus:border-[#DDC7BB]
              focus:ring-2
              focus:ring-[#DDC7BB]/30
              transition
            "
          />

        </div>
      </div>

      {/* =====================================
          ERROR
      ===================================== */}
      {error && (
        <div
          data-aos="fade-up"
          className="
            bg-red-50
            border
            border-red-100
            text-red-600
            rounded-2xl
            p-4
            text-sm
          "
        >
          {error}
        </div>
      )}

      {/* =====================================
          LOADING
      ===================================== */}
      {loading ? (

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
          "
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                bg-white
                rounded-3xl
                border
                border-gray-100
                p-5
                shadow-sm
              "
            >
              <div
                className="
                  w-full
                  h-52
                  rounded-2xl
                  bg-gray-200
                  animate-pulse
                "
              />

              <div className="mt-5 space-y-3">

                <div
                  className="
                    h-4
                    w-32
                    bg-gray-200
                    rounded
                    animate-pulse
                  "
                />

                <div
                  className="
                    h-3
                    w-44
                    bg-gray-200
                    rounded
                    animate-pulse
                  "
                />

                <div
                  className="
                    h-3
                    w-36
                    bg-gray-200
                    rounded
                    animate-pulse
                  "
                />

              </div>
            </div>
          ))}
        </div>

      ) : users.length === 0 ? (

        /* =====================================
            NO USERS
        ===================================== */
        <div
          data-aos="fade-up"
          className="
            bg-white
            rounded-3xl
            border
            border-gray-100
            shadow-sm
            py-16
            text-center
          "
        >
          <div
            className="
              w-16
              h-16
              mx-auto
              rounded-2xl
              bg-[#f5ebe5]
              text-[#4F3527]
              flex
              items-center
              justify-center
              mb-4
            "
          >
            <MdPerson size={30} />
          </div>

          <h3 className="text-lg font-bold text-[#4F3527]">
            No users found
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            There are currently no registered users.
          </p>
        </div>

      ) : filteredUsers.length === 0 ? (

        /* =====================================
            SEARCH EMPTY
        ===================================== */
        <div
          data-aos="fade-up"
          className="
            bg-white
            rounded-3xl
            border
            border-gray-100
            py-14
            text-center
          "
        >
          <MdSearch
            size={35}
            className="mx-auto text-gray-300 mb-3"
          />

          <h3 className="font-semibold text-[#4F3527]">
            No matching users
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Try searching with another name or email.
          </p>
        </div>

      ) : (

        /* =====================================
            USER CARDS
        ===================================== */
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
          "
        >
          {filteredUsers.map((user, index) => (

            <div
              key={user._id || user.email || index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group
                relative
                overflow-hidden
                bg-white
                rounded-3xl
                border
                border-gray-100
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* ================= IMAGE ================= */}
              <div
                className="
                  relative
                  h-52
                  bg-[#f5ebe5]
                  overflow-hidden
                "
              >
                <img
                  src={
                    user.photo ||
                    "/default-avatar.png"
                  }
                  alt={user.name || "User"}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                {/* Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    via-transparent
                    to-transparent
                  "
                />

                {/* User Badge */}
                <div
                  className="
                    absolute
                    top-4
                    left-4
                    flex
                    items-center
                    gap-1.5
                    bg-white/95
                    backdrop-blur-sm
                    rounded-full
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    text-[#4F3527]
                  "
                >
                  <span
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-green-500
                    "
                  />

                  User
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <div className="min-w-0">

                    <h3
                      className="
                        font-bold
                        text-lg
                        text-[#4F3527]
                        truncate
                      "
                    >
                      {user.name || "Unnamed User"}
                    </h3>

                    <p
                      className="
                        text-sm
                        text-gray-400
                        mt-1
                      "
                    >
                      Registered User
                    </p>

                  </div>

                  <div
                    className="
                      shrink-0
                      w-9
                      h-9
                      rounded-xl
                      bg-[#f5ebe5]
                      text-[#4F3527]
                      flex
                      items-center
                      justify-center
                      group-hover:bg-[#4F3527]
                      group-hover:text-white
                      transition
                    "
                  >
                    <HiArrowUpRight />
                  </div>

                </div>

                {/* EMAIL */}
                {user.email && (
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      mt-5
                      text-xs
                      text-gray-500
                    "
                  >
                    <MdEmail
                      size={17}
                      className="
                        text-[#9b7763]
                        shrink-0
                      "
                    />

                    <span className="truncate">
                      {user.email}
                    </span>
                  </div>
                )}

                {/* Bottom Accent */}
                <div
                  className="
                    mt-5
                    h-1
                    w-10
                    rounded-full
                    bg-[#DDC7BB]
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />

              </div>

            </div>

          ))}
        </div>
      )}

    </div>
  );
};

export default Users;