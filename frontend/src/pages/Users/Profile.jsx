import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useAuth } from '../../context/auth'

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(null)
  const [auth, setAuth] = useAuth()
  const [userData, setUserData] = useState({ name: '', email: '', image: '' })

  useEffect(() => {
    if (auth?.user) {
      setUserData({ name: auth.user.name, email: auth.user.email, image: auth.user.photo })
    }
  }, [auth])

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData()
      formData.append("userId", auth.user._id)
      formData.append('name', userData.name)
      formData.append('email', userData.email)
      if (image) formData.append('photo', image)

      const res = await axios.put('https://dwello-backend-tau.vercel.app/api/auth/profile', formData)
      if (res.data.success) {
        toast.success('Profile updated')
        setAuth({ ...auth, user: res.data.user })
        setIsEdit(false)
        setImage(null)
      } else {
        toast.error(res.data.message || 'Update failed')
      }
    } catch (err) {
      console.error(err)
      toast.error('Error updating profile')
    }
  }

  return auth?.user ? (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-center mb-4">
        {isEdit ? (
          <label htmlFor="image" className="cursor-pointer block">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={image ? URL.createObjectURL(image) : userData.image}
              alt="Profile"
            />
            <input type="file" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
          </label>
        ) : (
          <img className="w-24 h-24 rounded-full object-cover" src={userData.image} alt="Profile" />
        )}
      </div>

      <div className="mb-4">
        {isEdit ? (
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        ) : (
          <h2 className="text-2xl font-semibold text-center">{userData.name}</h2>
        )}
      </div>

      <div className="mb-4">
        <p className="text-gray-600 font-medium">Email:</p>
        <p>{userData.email}</p>
      </div>

      {isEdit ? (
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            onClick={updateUserProfileData}
          >
            Save
          </button>
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400"
            onClick={() => setIsEdit(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="w-full bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 mt-4"
          onClick={() => setIsEdit(true)}
        >
          Edit Profile
        </button>
      )}
    </div>
  ) : null
}

export default Profile
