import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Courses', href: '#courses' },
  { name: 'Faculty', href: '#faculty' },
  { name: 'Results', href: '#results' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#branches' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-[12px] border-b border-[#334155] py-4 px-6 md:px-8">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img 
              src="https://shreesaiinstitute.in/images/ssilogofull1.png" 
              alt="Shree Sai Institute" 
              className="h-10 md:h-11 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-space text-sm font-medium text-text-secondary hover:text-accent-orange transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:block">
            <a
              href="#admissions"
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
              className="lg:hidden bg-[#0f172a] border-t border-border-subtle/50 mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4 px-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-space text-base font-medium text-text-secondary hover:text-accent-orange transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#admissions"
                  onClick={() => setIsOpen(false)}
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
