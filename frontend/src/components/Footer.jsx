import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../assets/logo2.png";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#DDC7BB] text-[#3b2921]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand */}
          <div
            className="lg:col-span-2"
            data-aos="fade-up"
          >
            <Link to="/">
              <img
                src={logo}
                alt="Dwello"
                className="w-36 h-auto"
              />
            </Link>

            <p className="mt-5 text-[#5c4a42] leading-7 max-w-xs">
              Bringing you closer to your dream home, one click at a time.
              Discover beautiful spaces and find a place you can truly call
              home.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center">
                  <MdEmail className="text-[#4F3527]" />
                </div>

                <span>hello@dwello.com</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center">
                  <MdPhone className="text-[#4F3527]" />
                </div>

                <span>+1 234 567 890</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center">
                  <MdLocationOn className="text-[#4F3527]" />
                </div>

                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-lg font-bold text-[#3b2921]">
              About
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-[#5c4a42] hover:text-[#4F3527] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Our Story
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="text-sm text-[#5c4a42] hover:text-[#4F3527] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  to="/team"
                  className="text-sm text-[#5c4a42] hover:text-[#4F3527] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Our Team
                </Link>
              </li>

              <li>
                <Link
                  to="/resources"
                  className="text-sm text-[#5c4a42] hover:text-[#4F3527] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-lg font-bold text-[#3b2921]">
              Support
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/faqs"
                  className="text-sm text-[#5c4a42] hover:text-[#4F3527] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-[#5c4a42] hover:text-[#4F3527] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/help-center"
                  className="text-sm text-[#5c4a42] hover:text-[#4F3527] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  to="/term-services"
                  className="text-sm text-[#5c4a42] hover:text-[#4F3527] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-lg font-bold text-[#3b2921]">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/properties"
                  className="text-sm text-[#5c4a42] hover:text-[#4F3527] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Properties
                </Link>
              </li>

              <li>
                <Link
                  to="/locations"
                  className="text-sm text-[#5c4a42] hover:text-[#4F3527] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Locations
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className="text-sm text-[#5c4a42] hover:text-[#4F3527] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-sm text-[#5c4a42] hover:text-[#4F3527] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div
          className="mt-14 pt-10 border-t border-[#4F3527]/20
                     flex flex-col lg:flex-row
                     lg:items-center lg:justify-between gap-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div>
            <h3 className="text-xl font-bold">
              Stay in the loop
            </h3>

            <p className="text-sm text-[#5c4a42] mt-1">
              Get the latest properties and real estate updates.
            </p>
          </div>

          <div className="flex w-full lg:w-auto max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3.5
                         bg-white/80
                         rounded-l-full
                         outline-none
                         text-sm
                         placeholder:text-gray-400
                         focus:bg-white
                         transition"
            />

            <button
              className="px-5 py-3.5
                         bg-[#4F3527]
                         text-white
                         rounded-r-full
                         flex items-center justify-center
                         hover:bg-[#38251c]
                         transition-all duration-300"
              aria-label="Subscribe"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#4F3527]/20">
        <div
          className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20
                     py-5
                     flex flex-col md:flex-row
                     items-center justify-between gap-4"
        >
          {/* Copyright + Developer */}
          <p className="text-xs md:text-sm text-[#5c4a42] text-center md:text-left">
            © {currentYear} Dwello Property. All rights reserved.
            <span className="mx-2">|</span>
            Developed by{" "}
            <a
              href="https://wahabsami.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#4F3527] hover:text-[#38251c] hover:underline transition-all duration-300"
            >
              Abdul Wahab
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/60
                         flex items-center justify-center
                         text-[#4F3527]
                         hover:bg-[#4F3527]
                         hover:text-white
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/60
                         flex items-center justify-center
                         text-[#4F3527]
                         hover:bg-[#4F3527]
                         hover:text-white
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-white/60
                         flex items-center justify-center
                         text-[#4F3527]
                         hover:bg-[#4F3527]
                         hover:text-white
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/60
                         flex items-center justify-center
                         text-[#4F3527]
                         hover:bg-[#4F3527]
                         hover:text-white
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
