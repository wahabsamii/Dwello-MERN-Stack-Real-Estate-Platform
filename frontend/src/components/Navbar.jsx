import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUserCircle,
  FaBuilding,
  FaTachometerAlt,
  FaSignOutAlt,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import { useAuth } from "../context/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const isAdmin = auth?.user?.isAdmin;
  const isLoggedIn = Boolean(auth?.token);

  // ==========================================
  // Navigation Items
  // ==========================================

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    ...(isAdmin
      ? [
          {
            name: "Add Property",
            path: "/add-property",
          },
        ]
      : []),
    {
      name: "Agents",
      path: "/agents",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // ==========================================
  // Navigation Link Style
  // ==========================================

  const linkClass = ({ isActive }) =>
    `relative py-2 text-[13px] font-semibold tracking-[0.08em]
    transition-colors duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:rounded-full after:bg-[#b76e4b] after:transition-all
    after:duration-300
    ${
      isActive
        ? "text-[#a85f40] after:w-full"
        : "text-[#55504c] after:w-0 hover:text-[#a85f40] hover:after:w-full"
    }`;

  // ==========================================
  // Close Menus
  // ==========================================

  const closeMenus = () => {
    setShowMenu(false);
    setShowProfile(false);
  };

  // ==========================================
  // Normal Navigation
  // ==========================================

  const handleNavigation = (path) => {
    closeMenus();
    navigate(path);
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    try {
      // Clear authentication state
      setAuth({
        user: null,
        token: "",
      });

      // Clear localStorage
      localStorage.removeItem("auth");

      // Close menus
      closeMenus();

      // Redirect to login
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);

      // Even if something fails, send user to login
      navigate("/login", { replace: true });
    }
  };

  // ==========================================
  // Profile Menu Items
  // ==========================================

  const profileItems = [
    ...(isAdmin
      ? [
          {
            label: "Dashboard",
            icon: <FaTachometerAlt />,
            path: "/admin/dashboard",
          },
        ]
      : []),

    {
      label: "My Profile",
      icon: <FaUserCircle />,
      path: isAdmin ? "/admin/users" : "/user/profile",
    },

    {
      label: "My Properties",
      icon: <FaBuilding />,
      path: isAdmin ? "/admin/properties" : "/user/myproperties",
    },
  ];

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        border-b
        border-[#e9ded5]
        bg-[#fdf8f4]/95
        shadow-[0_4px_25px_rgba(61,43,32,0.04)]
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-5
          py-3.5
          sm:px-8
          lg:px-10
        "
      >

        {/* ==========================================
            LOGO
        ========================================== */}

        <button
          type="button"
          onClick={() => handleNavigation("/")}
          className="
            group
            flex
            shrink-0
            items-center
            rounded-lg
            outline-none
            focus-visible:ring-2
            focus-visible:ring-[#b76e4b]
          "
          aria-label="Go to homepage"
        >
          <img
            src={logo}
            alt="Dwello"
            className="
              w-28
              object-contain
              transition-transform
              duration-300
              group-hover:scale-[1.03]
              sm:w-32
            "
          />
        </button>

        {/* ==========================================
            DESKTOP NAVIGATION
        ========================================== */}

        <div className="hidden items-center gap-7 lg:flex xl:gap-9">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={linkClass}
            >
              {item.name}
            </NavLink>
          ))}

        </div>

        {/* ==========================================
            RIGHT ACTIONS
        ========================================== */}

        <div className="flex items-center gap-3 sm:gap-4">

          {/* ========================================
              LOGGED IN
          ======================================== */}

          {isLoggedIn ? (
            <div className="relative">

              {/* Profile Button */}
              <button
                type="button"
                onClick={() => {
                  setShowProfile((prev) => !prev);
                  setShowMenu(false);
                }}
                className={`
                  flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  px-2
                  py-1.5
                  transition-all
                  duration-300
                  sm:pl-2
                  sm:pr-3
                  ${
                    showProfile
                      ? "border-[#c99b81] bg-white shadow-md"
                      : "border-[#eaded4] bg-white/70 hover:border-[#c99b81] hover:bg-white"
                  }
                `}
                aria-expanded={showProfile}
                aria-label="Toggle profile menu"
              >

                <img
                  src={
                    auth?.user?.photo ||
                    "/default-avatar.png"
                  }
                  alt="User profile"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/default-avatar.png";
                  }}
                  className="
                    h-9
                    w-9
                    rounded-full
                    border
                    border-[#eee1d8]
                    object-cover
                  "
                />

                <span
                  className="
                    hidden
                    max-w-24
                    truncate
                    text-sm
                    font-semibold
                    text-[#403832]
                    sm:block
                  "
                >
                  {auth?.user?.name || "My Account"}
                </span>

                <FaChevronDown
                  className={`
                    hidden
                    text-[10px]
                    text-[#a85f40]
                    transition-transform
                    duration-300
                    sm:block
                    ${
                      showProfile
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>

              {/* ====================================
                  PROFILE DROPDOWN
              ==================================== */}

              {showProfile && (
                <div
                  className="
                    absolute
                    right-0
                    top-full
                    mt-3
                    w-64
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#eee2d8]
                    bg-white
                    shadow-[0_15px_50px_rgba(55,38,27,0.14)]
                  "
                >

                  {/* User Info */}
                  <div
                    className="
                      border-b
                      border-[#f0e7df]
                      bg-[#fcf5ef]
                      px-5
                      py-4
                    "
                  >
                    <p
                      className="
                        truncate
                        text-sm
                        font-bold
                        text-[#342b25]
                      "
                    >
                      {auth?.user?.name || "Welcome back"}
                    </p>

                    <p
                      className="
                        mt-1
                        truncate
                        text-xs
                        text-[#8b7c70]
                      "
                    >
                      {auth?.user?.email ||
                        "Manage your account"}
                    </p>

                    {isAdmin && (
                      <span
                        className="
                          mt-2
                          inline-block
                          rounded-full
                          bg-[#ead5c5]
                          px-2.5
                          py-1
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-[#824d32]
                        "
                      >
                        Administrator
                      </span>
                    )}
                  </div>

                  {/* Menu */}
                  <div className="p-2">

                    {profileItems.map((item) => (
                      <button
                        type="button"
                        key={item.label}
                        onClick={() =>
                          handleNavigation(item.path)
                        }
                        className="
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-xl
                          px-3
                          py-3
                          text-left
                          text-sm
                          text-[#5c5149]
                          transition-colors
                          hover:bg-[#fbf1e9]
                          hover:text-[#a85f40]
                        "
                      >
                        <span className="text-base text-[#b77c5e]">
                          {item.icon}
                        </span>

                        <span className="font-medium">
                          {item.label}
                        </span>
                      </button>
                    ))}

                    <div className="my-1 border-t border-[#f0e7df]" />

                    {/* =================================
                        LOGOUT BUTTON
                    ================================= */}

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        text-sm
                        font-semibold
                        text-red-600
                        transition-colors
                        hover:bg-red-50
                      "
                    >
                      <FaSignOutAlt />

                      Logout
                    </button>

                  </div>
                </div>
              )}

            </div>
          ) : (

            /* ========================================
               NOT LOGGED IN
            ======================================== */

            <button
              type="button"
              onClick={() =>
                handleNavigation("/login")
              }
              className="
                group
                hidden
                items-center
                gap-2
                rounded-full
                bg-[#302720]
                px-5
                py-3
                text-xs
                font-bold
                tracking-wide
                text-white
                shadow-[0_5px_15px_rgba(48,39,32,0.12)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#a85f40]
                hover:shadow-lg
                sm:inline-flex
                sm:px-6
              "
            >
              Create Account

              <FaArrowRight
                className="
                  text-[10px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          )}

          {/* ==========================================
              MOBILE MENU BUTTON
          ========================================== */}

          <button
            type="button"
            onClick={() => {
              setShowMenu((prev) => !prev);
              setShowProfile(false);
            }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#eaded4]
              bg-white
              text-lg
              text-[#44362d]
              transition-all
              hover:border-[#c99b81]
              hover:bg-[#fbf0e7]
              lg:hidden
            "
            aria-label={
              showMenu
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={showMenu}
          >
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* ==========================================
          MOBILE NAVIGATION
      ========================================== */}

      <div
        className={`
          grid
          overflow-hidden
          transition-[grid-template-rows,opacity]
          duration-300
          ease-in-out
          lg:hidden
          ${
            showMenu
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }
        `}
      >

        <div className="min-h-0 overflow-hidden">

          <div
            className="
              border-t
              border-[#eaded4]
              bg-[#fffaf6]
              px-5
              pb-6
              pt-3
              sm:px-8
            "
          >

            <div className="mx-auto flex max-w-7xl flex-col">

              {/* Main Links */}
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#f0e6de]
                      py-4
                      text-sm
                      font-semibold
                      transition-colors
                      ${
                        isActive
                          ? "text-[#a85f40]"
                          : "text-[#554a42] hover:text-[#a85f40]"
                      }
                    `
                  }
                >
                  <span>{item.name}</span>

                  <FaArrowRight className="text-[10px] opacity-50" />
                </NavLink>
              ))}

              {/* ======================================
                  MOBILE ACCOUNT
              ====================================== */}

              {!isLoggedIn ? (

                <button
                  type="button"
                  onClick={() =>
                    handleNavigation("/login")
                  }
                  className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#302720]
                    px-5
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition-colors
                    hover:bg-[#a85f40]
                    sm:hidden
                  "
                >
                  <FaPlus />

                  Create Account
                </button>

              ) : (

                <div
                  className="
                    mt-4
                    rounded-2xl
                    border
                    border-[#eaded4]
                    bg-white
                    p-3
                  "
                >

                  <p
                    className="
                      px-2
                      py-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#a28b7b]
                    "
                  >
                    My Account
                  </p>

                  {profileItems.map((item) => (
                    <button
                      type="button"
                      key={item.label}
                      onClick={() =>
                        handleNavigation(item.path)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        text-sm
                        font-medium
                        text-[#554a42]
                        transition-colors
                        hover:bg-[#fbf1e9]
                        hover:text-[#a85f40]
                      "
                    >
                      <span className="text-[#b77c5e]">
                        {item.icon}
                      </span>

                      {item.label}
                    </button>
                  ))}

                  {/* =================================
                      MOBILE LOGOUT
                  ================================= */}

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="
                      mt-1
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      border-t
                      border-[#f0e6de]
                      px-3
                      py-3
                      text-sm
                      font-semibold
                      text-red-600
                      hover:bg-red-50
                    "
                  >
                    <FaSignOutAlt />

                    Logout
                  </button>

                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
