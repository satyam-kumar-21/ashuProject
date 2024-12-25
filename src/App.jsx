import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Header from './components/header/Header';
import Home from './components/home/Home';
import PropertiesMain from './components/properties/PropertiesMain';
import Vlog from './components/blog/Blog';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import SellWithUs from './components/sellWithUs/SellWithUs';
import FAQ from './components/faq/FAQ';
import Enquiry from './components/enquiry/Enquiry';
import SocialMedia from './components/SocialMedia';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <div className="font-sans antialiased">
        {/* Header Section */}
        <Header />
        
        {/* Scroll To Top */}
        <ScrollToTop />

        {/* Social Media Floating Buttons */}
        <SocialMedia />

        {/* Main Content */}
        <main className="mt-20">
          {/* Routes for the different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<PropertiesMain />} />
            <Route path="/vlog" element={<Vlog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sell" element={<SellWithUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/enquiry" element={<Enquiry />} />
            
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
