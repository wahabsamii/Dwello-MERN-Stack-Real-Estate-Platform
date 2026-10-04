
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaArrowRight,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

import SubHero from "../components/SubHero";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    // Connect your API here
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Location",
      value: "123 Main St, San Francisco, CA",
    },
    {
      icon: FaPhoneAlt,
      title: "Phone Number",
      value: "+977-452-7890",
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      value: "hello@dwelloproperties.com",
    },
    {
      icon: FaClock,
      title: "Working Hours",
      value: "Mon – Fri: 9am – 6pm",
    },
  ];

  return (
    <>
      <SubHero title="Contact Us" />

      <section className="bg-[#faf8f5] py-20 md:py-28 px-5 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div
              data-aos="fade-down"
              className="flex items-center justify-center gap-3 mb-4"
            >
              <span className="w-10 h-px bg-[#DDC7BB]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F3527]">
                Get In Touch
              </span>

              <span className="w-10 h-px bg-[#DDC7BB]" />
            </div>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4F3527] leading-tight"
            >
              We'd Love To Hear From You
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-5 text-gray-600 leading-7"
            >
              Whether you're buying, selling, renting, or simply exploring,
              our Dwello team is here to help you make your next property
              decision with confidence.
            </p>
          </div>

          {/* Main Contact Card */}
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100">

            {/* LEFT SIDE */}
            <div
              data-aos="fade-right"
              className="relative bg-[#4F3527] p-7 md:p-10 lg:p-12 overflow-hidden"
            >
              {/* Decorative circles */}
              <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full border border-white/10" />
              <div className="absolute -left-20 -bottom-24 w-64 h-64 rounded-full bg-white/[0.03]" />

              <div className="relative z-10">
                <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-[#DDC7BB] text-xs font-semibold uppercase tracking-wider">
                  Contact Dwello
                </span>

                <h3 className="text-3xl md:text-4xl font-bold text-white mt-6 leading-tight">
                  Let's Start A
                  <br />
                  Conversation
                </h3>

                <p className="text-white/65 mt-5 leading-7 text-sm md:text-base">
                  Have questions about a property or need help finding the
                  right home? Reach out to our team and we'll get back to you
                  as soon as possible.
                </p>

                {/* Contact Details */}
                <div className="mt-9 space-y-5">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-[#DDC7BB] group-hover:bg-[#DDC7BB] group-hover:text-[#4F3527] transition-all duration-300">
                          <Icon className="text-sm" />
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                            {item.title}
                          </p>

                          <p className="text-sm text-white/85">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Icons */}
                <div className="mt-10 pt-7 border-t border-white/10">
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-4">
                    Follow Us
                  </p>

                  <div className="flex gap-3">
                    {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map(
                      (Icon, index) => (
                        <button
                          key={index}
                          className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#DDC7BB] hover:text-[#4F3527] transition-all duration-300"
                        >
                          <Icon className="text-sm" />
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div
              data-aos="fade-left"
              className="p-7 md:p-10 lg:p-12"
            >
              <div className="mb-8">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#703c29]">
                  Send A Message
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4F3527] mt-2">
                  How Can We Help?
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Fill out the form below and our team will contact you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#4F3527] mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-[#4F3527] focus:ring-4 focus:ring-[#4F3527]/10 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#4F3527] mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-[#4F3527] focus:ring-4 focus:ring-[#4F3527]/10 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[#4F3527] mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-[#4F3527] focus:ring-4 focus:ring-[#4F3527]/10 placeholder:text-gray-400"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-[#4F3527] mb-2">
                    Subject
                  </label>

                  <select
                    className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] px-4 py-3.5 text-sm text-gray-600 outline-none transition-all duration-300 focus:border-[#4F3527] focus:ring-4 focus:ring-[#4F3527]/10"
                  >
                    <option value="">Select a subject</option>
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="renting">Rental Inquiry</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#4F3527] mb-2">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us how we can help..."
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 bg-[#faf8f5] px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-[#4F3527] focus:ring-4 focus:ring-[#4F3527]/10 placeholder:text-gray-400"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 w-full md:w-auto bg-[#4F3527] text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#2f211b] transition-all duration-300"
                >
                  Send Message

                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <FaArrowRight className="text-xs" />
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* MAP */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-100"
          >
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
                <div>
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#703c29]">
                    Find Us
                  </span>

                  <h3 className="text-2xl font-bold text-[#4F3527] mt-1">
                    Visit Our Office
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaMapMarkerAlt className="text-[#703c29]" />
                  San Francisco, California
                </div>
              </div>

              <iframe
                className="w-full h-[320px] md:h-[380px] rounded-2xl border-0"
                src="https://maps.google.com/maps?q=San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
                title="Dwello Map"
              />
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            data-aos="fade-up"
            className="relative overflow-hidden mt-10 rounded-3xl bg-[#DDC7BB] px-6 py-10 md:px-12 text-center"
          >
            <div className="absolute -right-16 -top-20 w-52 h-52 rounded-full border border-[#4F3527]/10" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#4F3527]">
                Ready To Find Your Dream Home?
              </h3>

              <p className="mt-3 text-[#4F3527]/70 max-w-xl mx-auto text-sm md:text-base">
                Let our experienced team help you discover a property that
                perfectly matches your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;