import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', id: 'home', href: '#home' },
  { name: 'Courses', id: 'courses', href: '#courses' },
  { name: 'About Us', id: 'about', href: '#about-us' },
  { name: 'Results', id: 'results', href: '#results' }
];

export default function Navbar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetId);
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#131B3A]/95 backdrop-blur-[12px] border-b border-[#263266] py-4 px-6 md:px-8">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, 'home')} 
            className="flex items-center"
          >
            <img 
              src="https://shreesaiinstitute.in/images/ssilogofull1.png" 
              alt="Shree Sai Institute" 
              className="h-10 md:h-11 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`font-space text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-accent-orange font-semibold border-b-2 border-accent-orange pb-0.5' 
                      : 'text-text-secondary hover:text-accent-orange'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden lg:block">
            <a
              href="#admissions"
              onClick={(e) => {
                // If on homepage, standard scroll. If on other page, navigate to admissions form.
                if (currentPage !== 'home') {
                  handleLinkClick(e, 'home');
                  setTimeout(() => {
                    document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  e.preventDefault();
                  document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-space font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-text-primary hover:text-accent-orange transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-[#131B3A] border-t border-border-subtle/50 mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4 px-2">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className={`font-space text-base font-medium transition-colors duration-200 ${
                        isActive ? 'text-accent-orange font-semibold' : 'text-text-secondary hover:text-accent-orange'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
                <a
                  href="#admissions"
                  onClick={(e) => {
                    setIsOpen(false);
                    if (currentPage !== 'home') {
                      handleLinkClick(e, 'home');
                      setTimeout(() => {
                        document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      e.preventDefault();
                      document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-space font-semibold text-base py-3 px-5 rounded-lg text-center transition-colors duration-200 mt-2"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
