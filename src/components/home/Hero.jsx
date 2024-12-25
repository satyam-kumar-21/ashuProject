import React, { useState, useEffect } from 'react';

function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = [
    'Dream Home',
    'Perfect Home',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="relative w-full md:h-screen h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url("https://img.freepik.com/premium-photo/modern-technology-building-house-hologram_693425-11237.jpg")',
        backgroundAttachment: 'fixed', // Make the background image fixed
      }}
    >
      <div className="text-center space-y-6 px-1 md:px-6 md:px-12 pt-1">
        <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold opacity-0 transition-opacity duration-1000 ease-in-out opacity-100">{`Find Your ${textArray[textIndex]}`}</h1>
        <p className="text-lg md:text-xl lg:text-2xl px-6 md:px-12 lg:px-16">We are a real estate agency that will help you find the best residence you dream of, let’s discuss for your dream house?</p>

        {/* Buttons for Rent and Sale */}
        <div className="flex  flex-row justify-center gap-6 mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 sm:px-8 rounded-full text-lg sm:text-xl lg:text-2xl">For Rent</button>
          <button className="border-2 border-green-500 hover:bg-green-100 text-green-500 py-3 px-6 sm:px-8 rounded-full text-lg sm:text-xl lg:text-2xl">For Sale</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
