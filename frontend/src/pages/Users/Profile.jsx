import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";

import {
  MdEdit,
  MdEmail,
  MdPerson,
  MdCloudUpload,
  MdVerified,
  MdClose,
  MdSave,
  MdAccountCircle,
} from "react-icons/md";

import { HiOutlineUser } from "react-icons/hi2";
import { FaCamera } from "react-icons/fa6";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [auth, setAuth] = useAuth();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  // ==========================================
  // Load User Data
  // ==========================================
  useEffect(() => {
    if (auth?.user) {
      setUserData({
        name: auth.user.name || "",
        email: auth.user.email || "",
        image: auth.user.photo || "",
      });
    }
  }, [auth]);

  // ==========================================
  // Handle Input
  // ==========================================
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================================
  // Handle Image
  // ==========================================
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (!selectedImage) return;

    if (!selectedImage.type.startsWith("image/")) {
      toast.error("Please select a valid image");
      return;
    }

    if (selectedImage.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    setImage(selectedImage);

    // Preview
    setUserData({
      ...userData,
      image: URL.createObjectURL(selectedImage),
    });
  };

  // ==========================================
  // Update Profile
  // ==========================================
  const updateUserProfileData = async () => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("userId", auth.user._id);
      formData.append("name", userData.name);
      formData.append("email", userData.email);

      if (image) {
        formData.append("photo", image);
      }

      const res = await axios.put(
        "https://dwello-backend-tau.vercel.app/api/auth/profile",
        formData
      );

      if (res.data.success) {
        toast.success("Profile updated successfully");

        setAuth({
          ...auth,
          user: res.data.user,
        });

        setUserData({
          name: res.data.user.name || "",
          email: res.data.user.email || "",
          image: res.data.user.photo || "",
        });

        setIsEdit(false);
        setImage(null);
      } else {
        toast.error(res.data.message || "Update failed");
      }
    } catch (err) {
      console.error(err);

      toast.error(
        err?.response?.data?.message ||
          "Something went wrong while updating profile"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // Cancel Edit
  // ==========================================
  const handleCancel = () => {
    setIsEdit(false);
    setImage(null);

    if (auth?.user) {
      setUserData({
        name: auth.user.name || "",
        email: auth.user.email || "",
        image: auth.user.photo || "",
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* ==========================================
          PAGE HEADER
      ========================================== */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
        "
      >
        <div>
          <p className="text-sm font-medium text-[#9b7763] mb-1">
            Account
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-[#4F3527]">
            My Profile
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage your personal information and account details.
          </p>
        </div>

        {!isEdit && (
          <button
            onClick={() => setIsEdit(true)}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-5
              py-3
              rounded-xl
              bg-[#4F3527]
              text-white
              text-sm
              font-medium
              hover:bg-[#3e291f]
              transition
              shadow-sm
            "
          >
            <MdEdit size={19} />
            Edit Profile
          </button>
        )}
      </div>

      {/* ==========================================
          PROFILE HEADER CARD
      ========================================== */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          bg-[#4F3527]
          p-6
          md:p-8
          text-white
        "
      >
        {/* Decorative Circles */}
        <div
          className="
            absolute
            -right-16
            -top-24
            w-64
            h-64
            rounded-full
            border-[35px]
            border-white/5
          "
        />

        <div
          className="
            absolute
            right-20
            -bottom-24
            w-48
            h-48
            rounded-full
            bg-[#DDC7BB]/10
          "
        />

        <div className="relative flex flex-col sm:flex-row items-center sm:items-center gap-6">

          {/* Profile Image */}
          <div className="relative shrink-0">

            <div
              className="
                w-28
                h-28
                md:w-32
                md:h-32
                rounded-full
                bg-[#DDC7BB]
                p-1
                shadow-xl
              "
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">

                {userData.image ? (
                  <img
                    src={userData.image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <HiOutlineUser
                    size={55}
                    className="text-[#9b7763]"
                  />
                )}

              </div>
            </div>

            {/* Camera Button */}
            {isEdit && (
              <label
                htmlFor="profileImage"
                className="
                  absolute
                  bottom-1
                  right-1
                  w-10
                  h-10
                  rounded-full
                  bg-white
                  text-[#4F3527]
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  shadow-lg
                  hover:scale-105
                  transition
                "
              >
                <FaCamera size={15} />

                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}

          </div>

          {/* User Info */}
          <div className="text-center sm:text-left">

            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2">

              <h2 className="text-2xl md:text-3xl font-bold">
                {userData.name || "User"}
              </h2>

              <span
                className="
                  inline-flex
                  items-center
                  gap-1
                  text-xs
                  font-medium
                  bg-white/10
                  border
                  border-white/10
                  px-2.5
                  py-1
                  rounded-full
                  text-[#DDC7BB]
                "
              >
                <MdVerified size={14} />
                Verified
              </span>

            </div>

            <p className="text-white/60 text-sm mt-2">
              {userData.email}
            </p>

            <p className="text-[#DDC7BB] text-sm mt-3 font-medium">
              Dwello Member
            </p>

          </div>

        </div>
      </div>

      {/* ==========================================
          PROFILE INFORMATION
      ========================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Information Card */}
        <div
          className="
            lg:col-span-2
            bg-white
            rounded-3xl
            border
            border-gray-100
            shadow-sm
            p-6
            md:p-8
          "
        >

          <div className="flex items-center gap-3 mb-7">

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-[#f5ebe5]
                text-[#4F3527]
                flex
                items-center
                justify-center
              "
            >
              <MdAccountCircle size={24} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#4F3527]">
                Personal Information
              </h3>

              <p className="text-xs text-gray-400 mt-0.5">
                Your basic account information
              </p>
            </div>

          </div>

          <div className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              {isEdit ? (
                <div className="relative">

                  <MdPerson
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                    size={20}
                  />

                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      text-gray-700
                      outline-none
                      focus:border-[#9b7763]
                      focus:ring-2
                      focus:ring-[#9b7763]/10
                      transition
                    "
                  />

                </div>
              ) : (
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3.5
                    rounded-xl
                    bg-gray-50
                    border
                    border-gray-100
                  "
                >
                  <MdPerson
                    className="text-[#9b7763]"
                    size={20}
                  />

                  <span className="text-sm text-gray-700">
                    {userData.name || "Not provided"}
                  </span>
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              {isEdit ? (
                <div className="relative">

                  <MdEmail
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                    size={20}
                  />

                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      text-gray-700
                      outline-none
                      focus:border-[#9b7763]
                      focus:ring-2
                      focus:ring-[#9b7763]/10
                      transition
                    "
                  />

                </div>
              ) : (
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3.5
                    rounded-xl
                    bg-gray-50
                    border
                    border-gray-100
                  "
                >
                  <MdEmail
                    className="text-[#9b7763]"
                    size={20}
                  />

                  <span className="text-sm text-gray-700">
                    {userData.email || "Not provided"}
                  </span>
                </div>
              )}
            </div>

          </div>

          {/* Edit Actions */}
          {isEdit && (
            <div
              className="
                flex
                flex-col-reverse
                sm:flex-row
                sm:justify-end
                gap-3
                mt-8
                pt-6
                border-t
                border-gray-100
              "
            >

              <button
                type="button"
                onClick={handleCancel}
                disabled={loading}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  text-gray-600
                  text-sm
                  font-medium
                  hover:bg-gray-50
                  transition
                  disabled:opacity-50
                "
              >
                <MdClose size={19} />
                Cancel
              </button>

              <button
                type="button"
                onClick={updateUserProfileData}
                disabled={loading}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  bg-[#4F3527]
                  text-white
                  text-sm
                  font-medium
                  hover:bg-[#3e291f]
                  transition
                  shadow-sm
                  disabled:opacity-60
                "
              >
                {loading ? (
                  <>
                    <span
                      className="
                        w-4
                        h-4
                        border-2
                        border-white/30
                        border-t-white
                        rounded-full
                        animate-spin
                      "
                    />
                    Saving...
                  </>
                ) : (
                  <>
                    <MdSave size={19} />
                    Save Changes
                  </>
                )}
              </button>

            </div>
          )}

        </div>

        {/* Account Status */}
        <div
          className="
            bg-white
            rounded-3xl
            border
            border-gray-100
            shadow-sm
            p-6
            h-fit
          "
        >

          <div className="flex items-center justify-between mb-6">

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Account
              </p>

              <h3 className="text-lg font-bold text-[#4F3527]">
                Account Status
              </h3>
            </div>

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-green-50
                text-green-600
                flex
                items-center
                justify-center
              "
            >
              <MdVerified size={21} />
            </div>

          </div>

          <div className="space-y-4">

            {/* Status */}
            <div
              className="
                flex
                items-center
                justify-between
                p-4
                rounded-2xl
                bg-gray-50
              "
            >
              <div className="flex items-center gap-3">

                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

                <span className="text-sm text-gray-600">
                  Account
                </span>

              </div>

              <span className="text-sm font-semibold text-green-600">
                Active
              </span>
            </div>

            {/* Role */}
            <div
              className="
                flex
                items-center
                justify-between
                p-4
                rounded-2xl
                bg-gray-50
              "
            >
              <div className="flex items-center gap-3">

                <div
                  className="
                    w-9
                    h-9
                    rounded-xl
                    bg-[#f5ebe5]
                    text-[#4F3527]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <HiOutlineUser size={19} />
                </div>

                <span className="text-sm text-gray-600">
                  Role
                </span>

              </div>

              <span className="text-sm font-semibold text-[#4F3527] capitalize">
                {auth?.user?.role || "User"}
              </span>
            </div>

          </div>

          {/* Upload Hint */}
          {isEdit && (
            <div
              className="
                mt-5
                p-4
                rounded-2xl
                bg-[#fdf7f3]
                border
                border-[#f0dfd5]
              "
            >
              <div className="flex gap-3">

                <MdCloudUpload
                  className="text-[#9b7763] shrink-0"
                  size={22}
                />

                <div>
                  <p className="text-xs font-semibold text-[#4F3527]">
                    Profile Photo
                  </p>

                  <p className="text-xs text-gray-500 mt-1 leading-5">
                    Upload a JPG, PNG or WEBP image up to 5MB.
                  </p>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Profile;
