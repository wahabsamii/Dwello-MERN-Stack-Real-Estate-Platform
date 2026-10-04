
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  MdSearch,
  MdDelete,
  MdLocationOn,
  MdHome,
  MdEdit,
} from "react-icons/md";

import { HiArrowUpRight } from "react-icons/hi2";

import roomIcon from "../../assets/rooms.png";
import sizeIcon from "../../assets/size.png";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // =====================================
  // Fetch Properties
  // =====================================
  const fetchProperties = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        "https://dwello-backend-tau.vercel.app/api/property/all"
      );

      setProperties(res.data.properties || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load properties."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // Delete Property
  // =====================================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);

      const res = await axios.delete(
        `https://dwello-backend-tau.vercel.app/api/property/${id}`
      );

      if (res.data.success) {
        // Remove deleted property immediately
        setProperties((prev) =>
          prev.filter((property) => property._id !== id)
        );
      } else {
        alert(res.data.message || "Failed to delete property.");
      }
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Failed to delete property."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // =====================================
  // AOS
  // =====================================
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });

    AOS.refresh();
  }, []);

  // =====================================
  // Fetch Once
  // =====================================
  useEffect(() => {
    fetchProperties();
  }, []);

  // =====================================
  // Search
  // =====================================
  const filteredProperties = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    if (!searchValue) {
      return properties;
    }

    return properties.filter((property) => {
      const name = property.name?.toLowerCase() || "";
      const location =
        property.location?.toLowerCase() || "";

      return (
        name.includes(searchValue) ||
        location.includes(searchValue)
      );
    });
  }, [properties, search]);

  return (
    <div className="space-y-7">

      {/* =====================================
          HEADER
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
            Properties
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            View, manage and delete property listings.
          </p>
        </div>

        {/* Total Properties */}
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
            <MdHome size={22} />
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Total Properties
            </p>

            <p className="text-lg font-bold text-[#4F3527]">
              {properties.length}
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
            placeholder="Search by property name or location..."
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
                overflow-hidden
                shadow-sm
              "
            >
              <div
                className="
                  h-52
                  bg-gray-200
                  animate-pulse
                "
              />

              <div className="p-5 space-y-3">
                <div
                  className="
                    h-5
                    w-36
                    bg-gray-200
                    rounded
                    animate-pulse
                  "
                />

                <div
                  className="
                    h-3
                    w-48
                    bg-gray-200
                    rounded
                    animate-pulse
                  "
                />

                <div
                  className="
                    h-3
                    w-32
                    bg-gray-200
                    rounded
                    animate-pulse
                  "
                />
              </div>
            </div>
          ))}
        </div>

      ) : properties.length === 0 ? (

        /* =====================================
            NO PROPERTIES
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
            <MdHome size={30} />
          </div>

          <h3 className="text-lg font-bold text-[#4F3527]">
            No properties found
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            There are currently no property listings.
          </p>
        </div>

      ) : filteredProperties.length === 0 ? (

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
            No matching properties
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Try another property name or location.
          </p>
        </div>

      ) : (

        /* =====================================
            PROPERTY CARDS
        ===================================== */
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-3
            gap-5
          "
        >
          {filteredProperties.map((item, index) => (

            <div
              key={item._id || item.name || index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-gray-100
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* =================================
                  IMAGE
              ================================= */}
              <div
                className="
                  relative
                  h-52
                  bg-[#f5ebe5]
                  overflow-hidden
                "
              >
                <img
                  src={item.image}
                  alt={item.name || "Property"}
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
                    from-black/50
                    via-transparent
                    to-transparent
                  "
                />

                {/* Property Badge */}
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

                  Property
                </div>

                {/* Open Icon */}
                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    w-9
                    h-9
                    rounded-xl
                    bg-[#4F3527]/90
                    text-white
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                >
                  <HiArrowUpRight size={17} />
                </div>
              </div>

              {/* =================================
                  CONTENT
              ================================= */}
              <div className="p-5">

                <h3
                  className="
                    text-lg
                    font-bold
                    text-[#4F3527]
                    truncate
                  "
                >
                  {item.name || "Unnamed Property"}
                </h3>

                {/* Location */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mt-2
                    text-sm
                    text-gray-500
                  "
                >
                  <MdLocationOn
                    size={18}
                    className="text-[#9b7763] shrink-0"
                  />

                  <span className="truncate">
                    {item.location || "Location unavailable"}
                  </span>
                </div>

                {/* Property Details */}
                <div
                  className="
                    grid
                    grid-cols-2
                    gap-3
                    mt-5
                  "
                >

                  {/* Size */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      bg-[#faf8f5]
                      rounded-xl
                      px-3
                      py-2
                    "
                  >
                    <div
                      className="
                        w-8
                        h-8
                        rounded-lg
                        bg-white
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <img
                        src={sizeIcon}
                        alt="Size"
                        className="w-5 h-5 object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] text-gray-400">
                        Size
                      </p>

                      <p className="text-xs font-semibold text-[#4F3527] truncate">
                        {item.size || "-"}
                      </p>
                    </div>
                  </div>

                  {/* Rooms */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      bg-[#faf8f5]
                      rounded-xl
                      px-3
                      py-2
                    "
                  >
                    <div
                      className="
                        w-8
                        h-8
                        rounded-lg
                        bg-white
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <img
                        src={roomIcon}
                        alt="Rooms"
                        className="w-5 h-5 object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] text-gray-400">
                        Rooms
                      </p>

                      <p className="text-xs font-semibold text-[#4F3527] truncate">
                        {item.rooms || "-"}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Bottom */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    mt-5
                    pt-4
                    border-t
                    border-gray-100
                  "
                >

                  {/* Price */}
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                      Price
                    </p>

                    <p className="text-lg font-bold text-[#4F3527]">
                      {item.price || "N/A"}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">

                    {/* Edit */}
                    <button
                      type="button"
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-[#f5ebe5]
                        text-[#4F3527]
                        flex
                        items-center
                        justify-center
                        hover:bg-[#4F3527]
                        hover:text-white
                        transition
                      "
                      title="Edit property"
                    >
                      <MdEdit size={19} />
                    </button>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() => handleDelete(item._id)}
                      disabled={deletingId === item._id}
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-red-50
                        text-red-500
                        flex
                        items-center
                        justify-center
                        hover:bg-red-500
                        hover:text-white
                        transition
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                      "
                      title="Delete property"
                    >
                      {deletingId === item._id ? (
                        <span
                          className="
                            w-4
                            h-4
                            border-2
                            border-red-300
                            border-t-red-500
                            rounded-full
                            animate-spin
                          "
                        />
                      ) : (
                        <MdDelete size={19} />
                      )}
                    </button>

                  </div>

                </div>

                {/* Accent */}
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
}