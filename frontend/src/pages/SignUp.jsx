import React, { useEffect, useState } from "react";
import SubHero from "../components/SubHero";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.png";

import {
  FaArrowRight,
  FaCheck,
  FaEnvelope,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { toast } from "react-toastify";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "https://dwello-backend-tau.vercel.app/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);

        setName("");
        setEmail("");
        setPassword("");

        navigate("/login");
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";

      toast.success(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="bg-[#4F3527]">
  <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex items-center justify-between">

    <Link to="/">
      <img
        src={logo}
        alt="Dwello"
        className="h-9"
      />
    </Link>

    <Link
      to="/"
      className="text-sm font-medium text-white hover:text-[#DDC7BB] transition"
    >
      ← Back to Home
    </Link>

  </div>
</header>

 <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <SubHero title="Sign Up" />

      {/* Signup Section */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100">

            {/* ================= LEFT SIDE ================= */}
            <div
              data-aos="fade-right"
              className="relative bg-[#4F3527] p-8 md:p-12 lg:p-14 overflow-hidden"
            >
              {/* Decorative circles */}
              <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-white/10" />

              <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full border border-white/10" />

              <div className="absolute -left-24 -bottom-28 w-72 h-72 rounded-full bg-white/[0.03]" />

              <div className="relative z-10 h-full flex flex-col justify-between">

                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-[#DDC7BB] text-xs font-semibold uppercase tracking-[0.15em]">
                    Join Dwello
                  </span>

                  <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-6">
                    Your Dream Home
                    <br />
                    Starts Here.
                  </h1>

                  <p className="text-white/65 mt-5 leading-7 max-w-md">
                    Create your Dwello account and start exploring beautiful
                    properties, connecting with agents, and finding a place
                    that feels like home.
                  </p>
                </div>

                {/* Benefits */}
                <div className="mt-12 space-y-5">

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-[#DDC7BB]">
                      <FaCheck className="text-sm" />
                    </div>

                    <div>
                      <h4 className="text-white font-semibold">
                        Explore Properties
                      </h4>

                      <p className="text-white/50 text-sm mt-1">
                        Discover homes that match your lifestyle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-[#DDC7BB]">
                      <FaUser className="text-sm" />
                    </div>

                    <div>
                      <h4 className="text-white font-semibold">
                        Connect With Agents
                      </h4>

                      <p className="text-white/50 text-sm mt-1">
                        Get professional guidance from our experts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-[#DDC7BB]">
                      <FaLock className="text-sm" />
                    </div>

                    <div>
                      <h4 className="text-white font-semibold">
                        Secure Account
                      </h4>

                      <p className="text-white/50 text-sm mt-1">
                        Your account information stays protected.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div
              data-aos="fade-left"
              className="p-7 md:p-10 lg:p-14"
            >
              <div className="max-w-md mx-auto">

                {/* Heading */}
                <div className="mb-8">
                  <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#703c29]">
                    Create Account
                  </span>

                  <h2 className="text-3xl font-bold text-[#4F3527] mt-2">
                    Get Started
                  </h2>

                  <p className="text-gray-500 text-sm mt-2">
                    Create your account and begin your property journey.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSignup} className="space-y-5">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#4F3527] mb-2">
                      Full Name
                    </label>

                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                      <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] py-3.5 pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-[#4F3527] focus:ring-4 focus:ring-[#4F3527]/10 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#4F3527] mb-2">
                      Email Address
                    </label>

                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                      <input
                        type="email"
                        placeholder="you@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] py-3.5 pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-[#4F3527] focus:ring-4 focus:ring-[#4F3527]/10 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-semibold text-[#4F3527] mb-2">
                      Password
                    </label>

                    <div className="relative">
                      <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                      <input
                        type="password"
                        placeholder="Create a password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] py-3.5 pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-[#4F3527] focus:ring-4 focus:ring-[#4F3527]/10 placeholder:text-gray-400"
                      />
                    </div>

                    <p className="text-xs text-gray-400 mt-2">
                      Choose a strong password to keep your account secure.
                    </p>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 accent-[#4F3527]"
                    />

                    <p className="text-xs text-gray-500 leading-5">
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        className="text-[#703c29] font-semibold hover:underline"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-[#703c29] font-semibold hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-center gap-3 bg-[#4F3527] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#2f211b] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Creating Account..." : "Create Account"}

                    {!loading && (
                      <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <FaArrowRight className="text-xs" />
                      </span>
                    )}
                  </button>
                </form>

                {/* Login */}
                <p className="text-center text-sm text-gray-500 mt-7">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-[#703c29] hover:text-[#4F3527] hover:underline transition"
                  >
                    Login
                  </Link>
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
   
  );
}

export default SignUp;