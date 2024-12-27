import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg w-full fixed top-0 z-50">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <div className="text-4xl font-extrabold">LOGO</div>
        
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/home" className="relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/properties" className="relative group">
            Properties
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/vlog" className="relative group">
            Vlog
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
         
          <Link to="/contact" className="relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/sell" className="relative group">
            Sell With Us
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/faq" className="relative group">
            FAQ
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/enquiry" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
            Enquiry Now
          </Link>
        </nav>
        
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes className="text-3xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-3xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute bg-white w-full top-20 left-0 shadow-xl ${menuOpen ? 'block' : 'hidden'}`}
      >
        <nav className="flex flex-col space-y-6 p-6 text-lg font-medium">
          <Link to="/" className="hover:text-blue-600" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="hover:text-blue-600" onClick={closeMenu}>About</Link>
          <Link to="/properties" className="hover:text-blue-600" onClick={closeMenu}>Properties</Link>
          <Link to="/vlog" className="hover:text-blue-600" onClick={closeMenu}>Vlog</Link>
          
          <Link to="/contact" className="hover:text-blue-600" onClick={closeMenu}>Contact</Link>
          <Link to="/sell" className="hover:text-blue-600" onClick={closeMenu}>Sell With Us</Link>
          <Link to="/faq" className="hover:text-blue-600" onClick={closeMenu}>FAQ</Link>
          <Link to="/enquiry" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all" onClick={closeMenu}>Enquiry Now</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

