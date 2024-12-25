import React from 'react';

function About() {
  return (
    <div className="w-full py-16 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section with Gallery Images */}
        <div className="space-y-6">
          {/* Top row of images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://via.placeholder.com/500x300" // Replace with your image URL
              alt="Image 1"
              className="w-full h-60 object-cover rounded-lg"
            />
            <img
              src="https://via.placeholder.com/500x400" // Replace with your image URL
              alt="Image 2"
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
          {/* Bottom row of images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://via.placeholder.com/500x500" // Replace with your image URL
              alt="Image 3"
              className="w-full h-60 object-cover rounded-lg"
            />
            <img
              src="https://via.placeholder.com/500x350" // Replace with your image URL
              alt="Image 4"
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Section with Text */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg sm:text-xl mb-6">
            We are a leading real estate agency dedicated to helping you find your dream home. Whether you are looking for a home for sale or rent, we provide personalized services to meet your needs. Our team of experts works with you to ensure you find the best property suited to your preferences and budget.
          </p>
          <p className="text-lg sm:text-xl mb-6">
            With years of experience in the industry, we pride ourselves on our commitment to excellence and customer satisfaction. Let us help you make the process of buying, renting, or selling property easy and stress-free.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg">
              Learn More
            </button>
            <button className="bg-transparent border-2 border-blue-500 hover:bg-blue-100 text-blue-500 py-3 px-6 rounded-full text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
