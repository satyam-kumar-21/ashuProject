import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-blue-600 text-white text-center">
      <div className="max-w-md w-full">
        <h1 className="text-6xl font-extrabold mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-6">कार्य प्रगति पर है।</h2>
        <p className="text-lg mb-6">
          खेद है! जो पृष्ठ आप ढूंढ रहे हैं, वह उपलब्ध नहीं है।
        </p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          होम पेज पर वापस जाएं
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
