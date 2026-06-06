import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Toppers from './components/Toppers';
import WhySSI from './components/WhySSI';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Admissions from './components/Admissions';
import Branches from './components/Branches';
import CTAFooter from './components/CTAFooter';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen relative">
      {/* Sticky Top Navbar */}
      <Navbar />
      
      {/* Home (Hero Section) */}
      <div id="home">
        <Hero />
      </div>
      
      {/* Stats strip below Hero */}
      <StatsBar />
      
      {/* Courses Academic Section */}
      <div id="courses">
        <Courses />
      </div>
      
      {/* Faculty Mentors Section */}
      <div id="faculty">
        <Faculty />
      </div>
      
      {/* Toppers Hall of Fame Section */}
      <div id="results">
        <Toppers />
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
      
      {/* Admissions Countdown & Schedule */}
      <div id="admissions">
        <Admissions />
      </div>
      
      {/* Branches Locations Section */}
      <div id="branches">
        <Branches />
      </div>
      
      {/* CTA strip and footer */}
      <CTAFooter />
      
      {/* WhatsApp Floating Icon */}
      <WhatsAppWidget />
    </div>
  );
}

export default App;
