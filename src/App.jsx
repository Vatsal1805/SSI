import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Toppers from './components/Toppers';
import WhySSI from './components/WhySSI';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Admissions from './components/Admissions';
import Branches from './components/Branches';
import EnquiryMap from './components/EnquiryMap';
import CTAFooter from './components/CTAFooter';
import WhatsAppWidget from './components/WhatsAppWidget';

// Import newly created dedicated page views
import AboutUsPage from './components/AboutUsPage';
import CoursesPage from './components/CoursesPage';
import ResultsPage from './components/ResultsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen relative">
      {/* Sticky Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      
      {currentPage === 'home' && (
        <>
          {/* Home (Hero Section) */}
          <Hero />
          
          {/* Stats strip below Hero */}
          <StatsBar />
          
          {/* About Us Section */}
          <div id="about-us">
            <AboutUs onNavigate={navigateTo} />
          </div>
          
          {/* Courses Academic Section */}
          <div id="courses">
            <Courses onNavigate={navigateTo} />
          </div>
          
          {/* Toppers Hall of Fame Section */}
          <div id="results">
            <Toppers onNavigate={navigateTo} />
          </div>
          
          {/* Why Us Advantage Section */}
          <div id="why-us">
            <WhySSI />
          </div>
          
          {/* Testimonials Slideshow */}
          <Testimonials />
          
          {/* Gallery Section */}
          <div id="gallery">
            <Gallery />
          </div>
          
          {/* Branches Locations Section */}
          <div id="branches">
            <Branches />
          </div>
          
          {/* Enquiry Form and Location Map Section */}
          <div id="admissions">
            <EnquiryMap />
          </div>
        </>
      )}

      {currentPage === 'about' && (
        <AboutUsPage onNavigate={navigateTo} />
      )}

      {currentPage === 'courses' && (
        <CoursesPage onNavigate={navigateTo} />
      )}

      {currentPage === 'results' && (
        <ResultsPage onNavigate={navigateTo} />
      )}
      
      {/* Render EnquiryMap on inner subpages to keep admissions call-to-action active */}
      {currentPage !== 'home' && (
        <div id="admissions">
          <EnquiryMap />
        </div>
      )}

      {/* CTA strip and footer */}
      <CTAFooter onNavigate={navigateTo} />
      
      {/* WhatsApp Floating Icon */}
      <WhatsAppWidget />
    </div>
  );
}

export default App;
