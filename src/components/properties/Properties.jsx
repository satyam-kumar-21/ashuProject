import React from 'react';
import { Link } from 'react-router-dom';

function Properties() {
  const properties = [
    {
      id: 1,
      image: 'https://media.istockphoto.com/id/1990444472/photo/scandinavian-style-cozy-living-room-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=F5A3eF6myaJpITu5ABnGqNjacGWYskuxeZviU-KpxPE=', // Replace with actual image URL
      title: 'Luxury Villa in Greater Noida',
      location: 'Greater Noida, Uttar Pradesh',
    },
    {
      id: 2,
      image: 'https://media.istockphoto.com/id/1182454305/photo/bohemian-living-room-interior-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=gm7CG5v-lxJV_fWucJ1_5guO91WXJOgYewtK93q3yB0=', // Replace with actual image URL
      title: 'Modern Apartment in Saket, Delhi',
      location: 'Saket, New Delhi',
    },
    {
      id: 3,
      image: 'https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nk1uLgimD0AG9ADjHPx1iLvhZnm28YW6VRZr7uGwvS0=', // Replace with actual image URL
      title: 'Beachfront House in Patna',
      location: 'Patna, Bihar',
    },
    {
      id: 4,
      image: 'https://media.istockphoto.com/id/1220882375/photo/living-space-with-no-furniture.webp?a=1&b=1&s=612x612&w=0&k=20&c=FgcOm8g2lJP7rU1Ry2ix9XWLfl_eZn4bTs1Wj7sG9DM=', // Replace with actual image URL
      title: 'Penthouse in Connaught Place, Delhi',
      location: 'Connaught Place, New Delhi',
    },
    {
      id: 5,
      image: 'https://media.istockphoto.com/id/1042424568/photo/3d-rendering-luxury-modern-bedroom-suite-tv-with-wardrobe-and-walk-in-closet.jpg?s=612x612&w=0&k=20&c=AGoD3syG6mjPqWcqFVrcpzgFK_nt5SgwlVcsmyPoLbk=', // Replace with actual image URL
      title: 'Cozy Cottage in Ghaziabad',
      location: 'Ghaziabad, Uttar Pradesh',
    },
  ];

  return (
    <div className="py-16 px-6 bg-gradient-to-r from-green-500 to-blue-600 text-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">Our Luxury properties</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-[200px] object-cover transition-all duration-300 group-hover:opacity-80"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">{property.title}</h3>
                <p className="text-lg text-gray-600 mt-2">{property.location}</p>

                <div className="flex justify-between gap-4 mt-6">
                  <Link
                    to={`/property-details/${property.id}`} // Replace with actual property details route
                    className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-6 rounded-lg text-lg font-medium shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Property Details
                  </Link>
                  <Link
                    to="/enquiry" // Replace with actual enquiry page route
                    className="bg-green-600 hover:bg-green-800 text-white py-2 px-6 rounded-lg text-lg font-medium shadow-xl transform hover:scale-110 hover:brightness-110 transition-all duration-300"
                  >
                    Enquiry Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Properties;
