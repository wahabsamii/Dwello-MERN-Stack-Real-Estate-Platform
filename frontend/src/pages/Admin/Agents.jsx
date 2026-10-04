
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  MdSearch,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdPerson,
} from "react-icons/md";

import { HiArrowUpRight } from "react-icons/hi2";


const AgentsAdmin = () => {

  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");


  // ================================
  // Fetch Agents
  // ================================
  const fetchAgents = async () => {

    try {

      setLoading(true);
      setError("");

      const res = await axios.get(
        "https://dwello-backend-tau.vercel.app/api/agents/all"
      );

      if (res.data.success) {
        setAgents(res.data.agents || []);
      } else {
        setError("Failed to fetch agents.");
      }

    } catch (err) {

      setError(
        err.response?.data?.message ||
        err.message ||
        "An error occurred."
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

  }, []);


  useEffect(() => {
    fetchAgents();
  }, []);


  // ================================
  // Search
  // ================================
  const filteredAgents = useMemo(() => {

    return agents.filter((agent) => {

      const name =
        agent.name?.toLowerCase() || "";

      const email =
        agent.email?.toLowerCase() || "";

      const searchValue =
        search.toLowerCase();

      return (
        name.includes(searchValue) ||
        email.includes(searchValue)
      );

    });

  }, [agents, search]);


return (
  <div className="space-y-7 mb-20">

    {/* PAGE HEADER */}
    <div
      data-aos="fade-down"
      className="
        flex flex-col lg:flex-row
        lg:items-center lg:justify-between
        gap-5
      "
    >
      <div>
        <p className="text-sm font-medium text-[#9b7763] mb-1">
          Management
        </p>

        <h1 className="text-2xl md:text-3xl font-bold text-[#4F3527]">
          Agents
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Manage and view all registered real estate agents.
        </p>
      </div>

      {/* AGENT COUNT */}
      <div
        className="
          flex items-center gap-3
          bg-white border border-gray-100
          rounded-2xl px-4 py-3 shadow-sm
        "
      >
        <div
          className="
            w-10 h-10 rounded-xl
            bg-[#f5ebe5] text-[#4F3527]
            flex items-center justify-center
          "
        >
          <MdPerson size={22} />
        </div>

        <div>
          <p className="text-xs text-gray-400">
            Total Agents
          </p>

          <p className="text-lg font-bold text-[#4F3527]">
            {agents.length}
          </p>
        </div>
      </div>
    </div>

    {/* SEARCH */}
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="
        bg-white rounded-2xl
        border border-gray-100
        shadow-sm p-4
      "
    >
      <div className="relative max-w-md">
        <MdSearch
          size={21}
          className="
            absolute left-3 top-1/2
            -translate-y-1/2 text-gray-400
          "
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search agents by name or email..."
          className="
            w-full h-11
            bg-[#faf8f5]
            border border-gray-100
            rounded-xl
            pl-10 pr-4
            text-sm text-gray-700
            outline-none
            focus:border-[#DDC7BB]
            focus:ring-2
            focus:ring-[#DDC7BB]/30
            transition
          "
        />
      </div>
    </div>

    {/* ERROR */}
    {error && (
      <div
        data-aos="fade-up"
        className="
          bg-red-50
          border border-red-100
          text-red-600
          rounded-2xl
          p-4
          text-sm
        "
      >
        {error}
      </div>
    )}

    {/* CONTENT */}
    {loading ? (

      /* LOADING */
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
              border border-gray-100
              p-5
              shadow-sm
            "
          >
            <div
              className="
                w-24 h-24
                mx-auto
                rounded-full
                bg-gray-200
                animate-pulse
              "
            />

            <div className="mt-5 space-y-3">
              <div
                className="
                  h-4 w-32
                  mx-auto
                  bg-gray-200
                  rounded
                  animate-pulse
                "
              />

              <div
                className="
                  h-3 w-44
                  mx-auto
                  bg-gray-200
                  rounded
                  animate-pulse
                "
              />
            </div>
          </div>
        ))}
      </div>

    ) : agents.length === 0 ? (

      /* NO AGENTS */
      <div
        data-aos="fade-up"
        className="
          bg-white
          rounded-3xl
          border border-gray-100
          shadow-sm
          py-16
          text-center
        "
      >
        <div
          className="
            w-16 h-16
            mx-auto
            rounded-2xl
            bg-[#f5ebe5]
            text-[#4F3527]
            flex items-center justify-center
            mb-4
          "
        >
          <MdPerson size={30} />
        </div>

        <h3 className="text-lg font-bold text-[#4F3527]">
          No agents found
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          There are currently no agents registered.
        </p>
      </div>

    ) : filteredAgents.length === 0 ? (

      /* SEARCH EMPTY */
      <div
        data-aos="fade-up"
        className="
          bg-white
          rounded-3xl
          border border-gray-100
          py-14
          text-center
        "
      >
        <MdSearch
          size={35}
          className="mx-auto text-gray-300 mb-3"
        />

        <h3 className="font-semibold text-[#4F3527]">
          No matching agents
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          Try searching with another name or email.
        </p>
      </div>

    ) : (

      /* AGENT CARDS */
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
        {filteredAgents.map((agent, index) => (
          <div
            key={agent._id || agent.email || index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="
              group
              relative
              overflow-hidden
              bg-white
              rounded-3xl
              border border-gray-100
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            {/* IMAGE */}
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
                  agent.photo ||
                  "/default-avatar.png"
                }
                alt={agent.name || "Agent"}
                className="
                  w-full h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                "
              />

              {/* IMAGE GRADIENT */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                "
              />

              {/* STATUS */}
              <div
                className="
                  absolute top-4 left-4
                  flex items-center gap-1.5
                  bg-white/95
                  backdrop-blur-sm
                  rounded-full
                  px-3 py-1.5
                  text-xs font-semibold
                  text-green-600
                "
              >
                <span
                  className="
                    w-1.5 h-1.5
                    rounded-full
                    bg-green-500
                  "
                />

                Active
              </div>
            </div>

            {/* CONTENT */}
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
                    {agent.name || "Unnamed Agent"}
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-400
                      mt-1
                      truncate
                    "
                  >
                    Real Estate Agent
                  </p>

                </div>

                <div
                  className="
                    shrink-0
                    w-9 h-9
                    rounded-xl
                    bg-[#f5ebe5]
                    text-[#4F3527]
                    flex items-center justify-center
                    group-hover:bg-[#4F3527]
                    group-hover:text-white
                    transition
                  "
                >
                  <HiArrowUpRight />
                </div>

              </div>

              {/* EMAIL */}
              {agent.email && (
                <div
                  className="
                    flex items-center gap-2
                    mt-5
                    text-xs text-gray-500
                  "
                >
                  <MdEmail
                    size={17}
                    className="text-[#9b7763] shrink-0"
                  />

                  <span className="truncate">
                    {agent.email}
                  </span>
                </div>
              )}

              {/* PHONE */}
              {agent.phone && (
                <div
                  className="
                    flex items-center gap-2
                    mt-2
                    text-xs text-gray-500
                  "
                >
                  <MdPhone
                    size={17}
                    className="text-[#9b7763] shrink-0"
                  />

                  <span>
                    {agent.phone}
                  </span>
                </div>
              )}

              {/* LOCATION */}
              {agent.location && (
                <div
                  className="
                    flex items-center gap-2
                    mt-2
                    text-xs text-gray-500
                  "
                >
                  <MdLocationOn
                    size={17}
                    className="text-[#9b7763] shrink-0"
                  />

                  <span className="truncate">
                    {agent.location}
                  </span>
                </div>
              )}

              {/* BOTTOM ACCENT */}
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
)

};

export default AgentsAdmin;
