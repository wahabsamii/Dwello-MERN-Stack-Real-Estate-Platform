
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  MdDashboard,
  MdPeople,
  MdSettings,
  MdLogout,
  MdClose,
  MdMenu,
  MdKeyboardArrowLeft,
} from 'react-icons/md';

import {
  FaUser,
  FaBuilding,
} from 'react-icons/fa';

const links = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <MdDashboard />,
  },
  {
    title: 'Agents',
    path: '/admin/agents',
    icon: <MdPeople />,
  },
  {
    title: 'Users',
    path: '/admin/users',
    icon: <FaUser />,
  },
  {
    title: 'Properties',
    path: '/admin/properties',
    icon: <FaBuilding />,
  },
  {
    title: 'Settings',
    path: '/admin/settings',
    icon: <MdSettings />,
  },
  {
    title: 'Logout',
    path: '/admin/logout',
    icon: <MdLogout />,
  },
];

export default function Sidebar() {
  const location = useLocation();

  // Sidebar open/close state
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#4F3527] text-white h-16 px-5 flex items-center justify-between shadow-lg">

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#DDC7BB] text-[#4F3527] flex items-center justify-center font-bold">
            D
          </div>

          <h1 className="font-bold text-lg">
            Dwello
          </h1>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition"
        >
          {isOpen ? (
            <MdClose size={25} />
          ) : (
            <MdMenu size={25} />
          )}
        </button>
      </div>


      {/* ================= MOBILE OVERLAY ================= */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}


      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed lg:sticky
          top-0 left-0
          z-50
          h-screen
          bg-[#4F3527]
          text-white
          shadow-2xl

          transition-all
          duration-300
          ease-in-out

          ${isOpen ? 'w-72' : 'w-20'}

          ${
            isOpen
              ? 'translate-x-0'
              : '-translate-x-full lg:translate-x-0'
          }
        `}
      >

        {/* ================= HEADER ================= */}
        <div
          className={`
            h-20
            px-5
            flex
            items-center
            border-b
            border-white/10
            ${isOpen ? 'justify-between' : 'justify-center'}
          `}
        >

          {isOpen && (
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-[#DDC7BB] text-[#4F3527] flex items-center justify-center font-bold text-lg">
                D
              </div>

              <div>
                <h1 className="font-bold text-lg">
                  Dwello
                </h1>

                <p className="text-xs text-white/50">
                  Admin Panel
                </p>
              </div>

            </div>
          )}


          {/* Desktop collapse button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              hidden lg:flex
              w-9 h-9
              items-center
              justify-center
              rounded-xl
              bg-white/10
              hover:bg-white/20
              transition
            "
          >
            <MdKeyboardArrowLeft
              size={22}
              className={`
                transition-transform
                duration-300
                ${!isOpen ? 'rotate-180' : ''}
              `}
            />
          </button>

        </div>


        {/* ================= NAVIGATION ================= */}
        <nav className="px-3 py-6">

          {isOpen && (
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 px-3 mb-4">
              Main Menu
            </p>
          )}

          <ul className="space-y-2">

            {links.map(({ title, path, icon }) => {

              const isActive =
                location.pathname === path;

              return (
                <li key={path}>

                  <Link
                    to={path}
                    onClick={() => {
                      // Close sidebar on mobile after navigation
                      if (window.innerWidth < 1024) {
                        setIsOpen(false);
                      }
                    }}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      ${isOpen ? 'gap-4 px-4' : 'justify-center'}
                      py-3.5
                      rounded-xl
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? 'bg-[#DDC7BB] text-[#4F3527] shadow-lg'
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                      }
                    `}
                  >

                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 bg-[#4F3527] rounded-r-full" />
                    )}

                    <span
                      className={`
                        text-xl
                        shrink-0
                        transition-transform
                        duration-200
                        group-hover:scale-110

                        ${
                          isActive
                            ? 'text-[#4F3527]'
                            : 'text-[#DDC7BB]'
                        }
                      `}
                    >
                      {icon}
                    </span>


                    {isOpen && (
                      <span className="font-medium text-sm">
                        {title}
                      </span>
                    )}


                    {/* Tooltip when collapsed */}
                    {!isOpen && (
                      <span
                        className="
                          absolute
                          left-16
                          opacity-0
                          group-hover:opacity-100
                          pointer-events-none
                          whitespace-nowrap
                          bg-gray-900
                          text-white
                          text-xs
                          px-3
                          py-2
                          rounded-lg
                          shadow-lg
                          transition
                          z-50
                        "
                      >
                        {title}
                      </span>
                    )}

                  </Link>

                </li>
              );
            })}

          </ul>
        </nav>


        {/* ================= BOTTOM USER CARD ================= */}
        {isOpen && (
          <div className="absolute bottom-5 left-4 right-4">

            <div className="bg-white/10 border border-white/10 rounded-2xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-[#DDC7BB] text-[#4F3527] flex items-center justify-center font-bold">
                  A
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">
                    Admin
                  </p>

                  <p className="text-xs text-white/50 truncate">
                    Administrator
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

      </aside>
    </>
  );
}
