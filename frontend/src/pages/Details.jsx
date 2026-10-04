import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubHero from '../components/SubHero';

function Details() {
  const { slug } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProperty = async () => {
    try {
      const response = await axios.get(`https://dwello-backend-tau.vercel.app/api/property/${slug}`);
      if (response.data.success) {
        setProperty(response.data.property);
      } else {
        setError("Property not found");
      }
    } catch (err) {
      setError("Failed to load property");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-600 py-10">{error}</div>;

  return (
    <div>
      <SubHero title={property.name} />

      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="w-full">
          <img src={property.image} alt={property.name} className="rounded-lg w-full object-cover" />
        </div>

        {/* Property Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{property.name}</h2>
          <h2 className="">{property.about}</h2>
          <p className="text-gray-600">{property.location}</p>
          <h3 className="text-xl text-green-700 font-bold">Price: {property.price}</h3>

          <ul className="mt-4 space-y-2">
            <li><strong>Rooms:</strong> {property.rooms}</li>
            <li><strong>Size:</strong> {property.size}</li>
          </ul>

          {property.author && (
            <div className="mt-6 border-t pt-4">
              <h4 className="text-lg font-medium">Listed by</h4>
              <p className="text-gray-700">{property.author.name || 'Agent'}</p>
              <p className="text-gray-500 text-sm">{property.author.email || 'Email not available'}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Details;
