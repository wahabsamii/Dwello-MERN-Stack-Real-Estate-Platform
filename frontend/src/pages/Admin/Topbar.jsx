
import React from 'react';
import { useLocation } from 'react-router-dom';


export default function Topbar() {
  const location = useLocation();

  const currentPage =
    location.pathname
      .split('/')
      .filter(Boolean)
      .pop() || 'dashboard';

  const pageTitle =
    currentPage.charAt(0).toUpperCase() +
    currentPage.slice(1);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100">

      <div className="h-20 px-5 md:px-8 flex items-center justify-between gap-6">

        {/* ================= LEFT ================= */}
        <div className="min-w-0">

          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400 mb-1">
            <span>Admin</span>
            <span>/</span>
            <span className="text-[#4F3527] font-medium">
              {pageTitle}
            </span>
          </div>

          <h2 className="text-lg md:text-xl font-bold text-[#4F3527] truncate">
            {pageTitle === 'Dashboard'
              ? 'Admin Dashboard'
              : pageTitle}
          </h2>

        </div>

      </div>

    </header>
  );
}
