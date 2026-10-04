import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  MdDashboard,
  MdSettings,
  MdLogout,
  MdMessage,
  MdMenu,
  MdClose,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdHomeWork,
} from "react-icons/md";

import {
  FaUserEdit,
  FaUserCircle,
} from "react-icons/fa";

const links = [
  {
    title: "Dashboard",
    path: "/user/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "My Properties",
    path: "/user/myproperties",
    icon: <MdHomeWork />,
  },
  {
    title: "Edit Profile",
    path: "/user/profile",
    icon: <FaUserEdit />,
  },
  {
    title: "Settings",
    path: "/user/settings",
    icon: <MdSettings />,
  },
  {
    title: "Logout",
    path: "/user/logout",
    icon: <MdLogout />,
  },
];

export default function Sidebar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  // =====================================
  // Active Route
  // =====================================
  const isActive = (path) => {
    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  // =====================================
  // Close Mobile Sidebar
  // =====================================
  const handleNavigation = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================
          MOBILE TOP BAR
      ===================================== */}
      <div
        className="
          fixed
          top-0
          left-0
          right-0
          z-40
          lg:hidden
          h-16
          bg-white
          border-b
          border-gray-100
          flex
          items-center
          justify-between
          px-5
          shadow-sm
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-[#4F3527]
              text-[#DDC7BB]
              flex
              items-center
              justify-center
              font-bold
            "
          >
            D
          </div>

          <div>
            <p className="font-bold text-[#4F3527]">
              Dwello
            </p>

            <p className="text-[10px] text-gray-400">
              User Panel
            </p>
          </div>

        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
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
          <MdMenu size={24} />
        </button>
      </div>

      {/* =====================================
          MOBILE OVERLAY
      ===================================== */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            lg:hidden
          "
        />
      )}

      {/* =====================================
          SIDEBAR
      ===================================== */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          bg-[#4F3527]
          text-white
          shadow-2xl
          transition-all
          duration-300
          ease-in-out

          ${isOpen ? "w-72" : "w-20"}

          ${mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
          }
        `}
      >

        {/* =====================================
            LOGO
        ===================================== */}
        <div
          className={`
            h-20
            px-4
            border-b
            border-white/10
            flex
            items-center
            ${isOpen ? "justify-between" : "justify-center"}
          `}
        >

          {isOpen && (
            <Link
              to="/user/dashboard"
              onClick={handleNavigation}
              className="flex items-center gap-3"
            >

              <div
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-[#DDC7BB]
                  text-[#4F3527]
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-xl
                "
              >
                D
              </div>

              <div>
                <h1 className="font-bold text-lg">
                  Dwello
                </h1>

                <p className="text-[10px] text-white/50 uppercase tracking-wider">
                  User Panel
                </p>
              </div>

            </Link>
          )}

          {!isOpen && (
            <div
              className="
                w-11
                h-11
                rounded-2xl
                bg-[#DDC7BB]
                text-[#4F3527]
                flex
                items-center
                justify-center
                font-bold
                text-xl
              "
            >
              D
            </div>
          )}

          {/* Mobile Close */}
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="
              lg:hidden
              w-9
              h-9
              rounded-xl
              bg-white/10
              flex
              items-center
              justify-center
              hover:bg-white/20
              transition
            "
          >
            <MdClose size={21} />
          </button>

        </div>

        {/* =====================================
            USER PROFILE
        ===================================== */}
        <div
          className={`
            mx-3
            mt-5
            p-3
            rounded-2xl
            bg-white/10
            border
            border-white/10
            ${!isOpen ? "flex justify-center" : ""}
          `}
        >

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-[#DDC7BB]
                text-[#4F3527]
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <FaUserCircle size={22} />
            </div>

            {isOpen && (
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">
                  User Account
                </p>

                <p className="text-[11px] text-white/50 truncate">
                  Welcome to Dwello
                </p>
              </div>
            )}

          </div>

        </div>

        {/* =====================================
            NAVIGATION
        ===================================== */}
        <nav className="mt-7 px-3">

          {isOpen && (
            <p className="px-3 mb-3 text-[10px] uppercase tracking-[0.18em] text-white/40">
              Main Menu
            </p>
          )}

          <ul className="space-y-1.5">

            {links.map(({ title, path, icon }) => {

              const active = isActive(path);

              return (
                <li key={path}>

                  <Link
                    to={path}
                    onClick={handleNavigation}
                    title={!isOpen ? title : ""}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      ${isOpen ? "gap-3 px-3" : "justify-center"}
                      h-12
                      rounded-xl
                      transition-all
                      duration-200

                      ${
                        active
                          ? "bg-[#DDC7BB] text-[#4F3527] shadow-md"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >

                    {/* Active indicator */}
                    {active && (
                      <span
                        className="
                          absolute
                          left-0
                          top-1/2
                          -translate-y-1/2
                          w-1
                          h-7
                          rounded-r-full
                          bg-[#4F3527]
                        "
                      />
                    )}

                    <span
                      className={`
                        text-xl
                        shrink-0
                        ${
                          active
                            ? "text-[#4F3527]"
                            : "text-[#DDC7BB]"
                        }
                      `}
                    >
                      {icon}
                    </span>

                    {isOpen && (
                      <span className="text-sm font-medium">
                        {title}
                      </span>
                    )}

                    {/* Arrow */}
                    {isOpen && active && (
                      <MdKeyboardArrowRight
                        className="ml-auto"
                        size={20}
                      />
                    )}

                  </Link>

                </li>
              );
            })}

          </ul>

        </nav>

        {/* =====================================
            BOTTOM INFO
        ===================================== */}
        {/* {isOpen && (
          <div
            className="
              absolute
              bottom-20
              left-3
              right-3
              p-4
              rounded-2xl
              bg-[#DDC7BB]/10
              border
              border-white/10
            "
          >
            <p className="text-xs text-white/50">
              Need help?
            </p>

            <p className="text-sm font-medium mt-1">
              Contact Dwello support
            </p>

            <Link
              to="/contact"
              onClick={handleNavigation}
              className="
                inline-block
                mt-3
                text-xs
                text-[#DDC7BB]
                hover:text-white
                transition
              "
            >
              Contact Support →
            </Link>
          </div>
        )} */}

        {/* =====================================
            COLLAPSE BUTTON
        ===================================== */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            hidden
            lg:flex
            absolute
            bottom-5
            right-0
            translate-x-1/2
            w-8
            h-8
            rounded-full
            bg-[#DDC7BB]
            text-[#4F3527]
            items-center
            justify-center
            shadow-lg
            border-4
            border-[#4F3527]
            hover:scale-110
            transition
          "
        >
          {isOpen ? (
            <MdKeyboardArrowLeft size={18} />
          ) : (
            <MdKeyboardArrowRight size={18} />
          )}
        </button>

      </aside>

      {/* =====================================
          DESKTOP SIDEBAR SPACER
      ===================================== */}
      <div
        className={`
          hidden
          lg:block
          shrink-0
          transition-all
          duration-300
          ${isOpen ? "w-72" : "w-20"}
        `}
      />
    </>
  );
}