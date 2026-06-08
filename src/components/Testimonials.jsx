import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Avatar from './Avatar';

const testimonials = [
  {
    name: 'Yuvraj Shekhawat',
    image: 'Yuvraj.png',
    quote: 'SSI completely transformed my JEE preparation. The faculty dedication and weekly tests helped me identify weak areas. I secured 98 Percentile in JEE Main 2026.',
    achievement: 'JEE Main 2026 – 98 PR · Board – 99.21 PR'
  },
  {
    name: 'Ayush Patel',
    image: 'Ayush1.png',
    quote: 'Physics, Chemistry and Maths classes are extraordinary. They made complex concepts feel simple. The doubt-solving sessions after 8PM were a lifesaver.',
    achievement: 'JEE Advanced – AIR 3371 · JEE Main – 98 PR'
  },
  {
    name: 'Dhruv Modi',
    image: 'Dhruv.png',
    quote: "Shailendra Sir's Physics approach was unlike anything I'd seen — first principles, every time. Weekly tests felt exactly like the real exam. Best decision of my life.",
    achievement: 'Board 2026 – 99.41 PR · JEE Main – 93 PR'
  },
  {
    name: 'Jiya Panchal',
    image: 'Jiya.png',
    quote: 'The structured methodology, regular assessments, and individual attention played a major role in my success. Faculty were always available whenever I needed help.',
    achievement: 'Board 2026 – 97.18 PR · GUJCET – 106.25/120'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay with cleanup and hover pause
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isHovering]);

  const active = testimonials[currentIndex];

  // Animation variants for the active showcase card
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3, ease: 'easeIn' }
    }
  };

  return (
    <section className="bg-bg-light py-20 px-5 md:px-6 relative border-b border-[#cbd5e1]/40">
      <div className="max-w-[1100px] mx-auto text-center">
        
        {/* Section Label */}
        <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-semibold block mb-2">
          STUDENT STORIES
        </span>

        {/* Section Heading */}
        <h2 className="font-space font-bold text-[#0f172a] text-[clamp(28px,4vw,44px)] leading-tight mb-12">
          Our Student Stories That <span className="text-accent-orange">Inspire You!</span>
        </h2>

        {/* Main Showcase Box */}
        <div 
          className="relative max-w-[960px] mx-auto mb-10"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-14 pointer-events-none z-20">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-bg-light border border-border-light flex items-center justify-center text-[#0f172a] hover:bg-accent-orange hover:text-[#ffffff] hover:border-accent-orange transition-all duration-200 pointer-events-auto shadow-md"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-bg-light border border-border-light flex items-center justify-center text-[#0f172a] hover:bg-accent-orange hover:text-[#ffffff] hover:border-accent-orange transition-all duration-200 pointer-events-auto shadow-md"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Active Card Frame */}
          <div className="bg-bg-light-card border border-border-light rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col md:flex-row gap-8 items-center text-left"
              >
                
                {/* Left Side: Large Student Photo */}
                <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-2xl bg-[#fbeedb] flex items-center justify-center shrink-0 overflow-hidden relative shadow-md">
                  <Avatar
                    src={active.image}
                    name={active.name}
                    sizeClass="w-full h-full object-cover"
                    borderClass=""
                    fallbackBg="bg-accent-orange"
                    fallbackText="text-bg-primary text-6xl font-bold font-space"
                  />
                </div>

                {/* Right Side: Text & Content */}
                <div className="flex-1 flex flex-col justify-center relative">
                  
                  {/* Big Quote Symbol */}
                  <div className="text-accent-orange/15 font-serif leading-none select-none text-[120px] absolute -top-8 -left-4 pointer-events-none">
                    “
                  </div>
                  
                  {/* Quote Text */}
                  <p className="font-space text-text-light-secondary text-[16px] sm:text-[18px] leading-relaxed italic mb-6 relative z-10 pl-6">
                    {active.quote}
                  </p>

                  <div className="pl-6 border-l-2 border-accent-orange/40">
                    <h4 className="font-space font-bold text-lg text-text-light-primary">
                      {active.name}
                    </h4>
                    <p className="font-space font-semibold text-xs md:text-sm text-accent-orange mt-1">
                      {active.achievement}
                    </p>
                  </div>
                  
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Small Selection Previews Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[960px] mx-auto mb-6">
          {testimonials.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.name}
                onClick={() => setCurrentIndex(idx)}
                className={`text-left rounded-xl p-4 transition-all duration-300 flex flex-col justify-between border ${
                  isActive 
                    ? 'border-accent-orange bg-accent-orange/5 ring-1 ring-accent-orange shadow-sm' 
                    : 'border-border-light bg-bg-light hover:bg-bg-light-card hover:border-border-light-hover'
                }`}
              >
                {/* Quote Snippet */}
                <p className="font-space text-xs text-text-light-secondary italic mb-4 line-clamp-2 leading-relaxed">
                  "{item.quote}"
                </p>
                
                {/* Student Info */}
                <div className="flex items-center gap-2.5 mt-auto pt-3 border-t border-border-light/60">
                  <Avatar
                    src={item.image}
                    name={item.name}
                    sizeClass="w-7 h-7"
                    borderClass="border border-border-light"
                    fallbackBg="bg-accent-orange"
                    fallbackText="text-bg-primary text-xs font-semibold"
                  />
                  <div className="overflow-hidden">
                    <h5 className="font-space font-bold text-xs text-text-light-primary truncate">
                      {item.name}
                    </h5>
                    <p className="font-space text-[10px] text-text-light-muted truncate mt-0.5">
                      {item.achievement.split(' · ')[0]}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Page Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-accent-orange' : 'bg-border-light hover:bg-[#cbd5e1]'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
