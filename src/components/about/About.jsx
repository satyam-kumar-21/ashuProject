import React from 'react';

function About() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-600 to-blue-400 text-white">
      {/* Section with About Us Title */}
      <div className="w-full md:h-[20vh] h-[15vh] flex items-center justify-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold">About Us</h2>
      </div>
      
      {/* Main Content Section */}
      <div className="md:py-12 py-8 md:px-6 px-3 bg-white text-gray-800">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section with Single Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://www.shutterstock.com/image-photo/new-modern-block-flats-green-600nw-2501530247.jpg" // Replace with your image URL
              alt="About Us Image"
              className="w-full max-w-md md:max-w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right Section with Text */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              We are a leading real estate agency dedicated to helping you find your dream home. Whether you are looking for a home for sale or rent, we provide personalized services to meet your needs. Our team of experts works with you to ensure you find the best property suited to your preferences and budget.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              With years of experience in the industry, we pride ourselves on our commitment to excellence and customer satisfaction. Let us help you make the process of buying, renting, or selling property easy and stress-free.
            </p>
            <div className="flex justify-center md:justify-start gap-6 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg shadow-md transition-transform transform hover:scale-105">
                Learn More
              </button>
              <button className="bg-transparent border-2 border-blue-600 hover:bg-blue-100 text-blue-600 py-3 px-6 rounded-full text-lg shadow-md transition-transform transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
