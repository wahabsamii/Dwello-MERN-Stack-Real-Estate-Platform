import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth'

function MyProperties() {
  const [auth] = useAuth()
  const [properties, setProperties] = useState([]);

  const fetchProperty = async () => {
    try {
      const res = await axios.post('https://dwello-backend-tau.vercel.app/api/property/my', { userId: auth?.user?._id })
      if (res.data.success) {
        setProperties(res.data.allproperties)
      }
    } catch (error) {
      console.error('Error fetching properties:', error)
    }
  }

  useEffect(() => {
    if (auth?.user?._id) fetchProperty()
  }, [auth])

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Properties</h2>
      {properties.length === 0 ? (
        <p className="text-gray-600">You haven't added any properties yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {properties.map((property) => (
            <div key={property._id} className="border rounded-lg shadow-md overflow-hidden">
              <img
                src={property.image || '/default-property.jpg'}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{property.name}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-sm text-gray-500 truncate">{property.price}</p>

                <button className='mt-3 bg-red-600 p-2 rounded-sm text-white'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyProperties
