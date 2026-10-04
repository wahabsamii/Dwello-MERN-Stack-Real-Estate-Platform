import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaArrowRight,
  FaLock,
  FaUser,
  FaUserShield,
} from "react-icons/fa";

import SubHero from "../components/SubHero";
import { useAuth } from "../context/auth";
import { toast } from "react-toastify";

function Login() {
  const [auth, setAuth] = useAuth();

  const [name, setName] = useState("");
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

  // Login as Agent
  const handleAgentLogin = () => {
    setName("Sarah Nguyen");
    setPassword("Sarah Nguyen");
  };

  // Login as Admin
  const handleAdminLogin = () => {
    setName("admin");
    setPassword("admin");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!name || !password) {
      alert("Please enter your name and password.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://dwello-backend-tau.vercel.app/api/auth/login",
        {
          name,
          password,
        }
      );

      console.log(res.data);

      if (res.data.success) {
        toast.success("Login successfully");

        setName("");
        setPassword("");

        // Replace this token with the real token
        // returned by your backend when available.
        const token = "04rihficndsicndsijn";

        const authData = {
          user: res.data.user,
          token,
        };

        setAuth(authData);

        localStorage.setItem("auth", JSON.stringify(authData));

        navigate("/");
      } else {
        alert(res.data.message || "Invalid Credentials");
      }
    } catch (error) {
      console.error(error);

      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Login Failed";

      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen">
      {/* Hero */}
      <SubHero title="Login" />

      {/* Login Section */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100">

            {/* LEFT SIDE */}
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
                    Welcome Back
                  </span>

                  <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-6">
                    Find Your
                    <br />
                    Perfect Home.
                  </h1>

                  <p className="text-white/65 mt-5 leading-7 max-w-md">
                    Sign in to your Dwello account and continue exploring
                    properties, managing your listings, and connecting with
                    our real estate team.
                  </p>
                </div>

                {/* Feature */}
                <div className="mt-12 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#DDC7BB]">
                      <FaUser />
                    </div>

                    <div>
                      <p className="text-white font-semibold">
                        Personalized Experience
                      </p>

                      <p className="text-white/50 text-sm">
                        Access your account and preferences
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#DDC7BB]">
                      <FaLock />
                    </div>

                    <div>
                      <p className="text-white font-semibold">
                        Secure Access
                      </p>

                      <p className="text-white/50 text-sm">
                        Your information stays protected
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              data-aos="fade-left"
              className="p-7 md:p-10 lg:p-14"
            >
              <div className="max-w-md mx-auto">

                {/* Heading */}
                <div className="mb-8">
                  <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#703c29]">
                    Account Login
                  </span>

                  <h2 className="text-3xl font-bold text-[#4F3527] mt-2">
                    Welcome Back
                  </h2>

                  <p className="text-gray-500 text-sm mt-2">
                    Enter your credentials to continue.
                  </p>
                </div>

                {/* Quick Login */}
                <div className="mb-7">
                  <p className="text-sm font-semibold text-[#4F3527] mb-3">
                    Quick Login
                  </p>

                  <div className="grid grid-cols-2 gap-3">

                    {/* Agent */}
                    <button
                      type="button"
                      onClick={handleAgentLogin}
                      disabled={loading}
                      className="group flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#DDC7BB] bg-[#fdf3ee] text-[#4F3527] text-sm font-semibold hover:bg-[#4F3527] hover:text-white transition-all duration-300 disabled:opacity-50"
                    >
                      <FaUser className="text-xs" />

                      <span>Login as Agent</span>
                    </button>

                    {/* Admin */}
                    <button
                      type="button"
                      onClick={handleAdminLogin}
                      disabled={loading}
                      className="group flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#4F3527] bg-[#4F3527] text-white text-sm font-semibold hover:bg-[#2f211b] transition-all duration-300 disabled:opacity-50"
                    >
                      <FaUserShield className="text-xs" />

                      <span>Login as Admin</span>
                    </button>

                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-7">
                  <div className="flex-1 h-px bg-gray-200" />

                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    or enter manually
                  </span>

                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-5">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#4F3527] mb-2">
                      Name
                    </label>

                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] py-3.5 pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-[#4F3527] focus:ring-4 focus:ring-[#4F3527]/10 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-center gap-3 bg-[#4F3527] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#2f211b] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Please Wait..." : "Login"}

                    {!loading && (
                      <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <FaArrowRight className="text-xs" />
                      </span>
                    )}
                  </button>
                </form>

                {/* Signup */}
                <p className="text-center text-sm text-gray-500 mt-7">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-semibold text-[#703c29] hover:text-[#4F3527] hover:underline transition"
                  >
                    Create Account
                  </Link>
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;