import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Avatar from './Avatar';

const testimonials = [
  {
    name: 'Yuvraj Shekhawat',
    image: 'Yuvraj.png',
    quote: 'SSI completely transformed my JEE preparation. The faculty dedication and weekly tests helped me identify weak areas. I secured 98 Percentile in JEE Main 2026.',
    achievement: 'JEE Main 2026 – 98 PR · Board 2026 – 99.21 PR · GUJCET – 112.5/120'
  },
  {
    name: 'Ayush Patel',
    image: 'Ayush1.png',
    quote: 'Physics, Chemistry and Maths classes are extraordinary. They made complex concepts feel simple. The doubt-solving sessions after 8PM were a lifesaver.',
    achievement: 'JEE Advanced 2026 – AIR 3371 · JEE Main 2026 – 98 PR'
  },
  {
    name: 'Dhruv Modi',
    image: 'Dhruv.png',
    quote: "Shailendra Sir's Physics approach was unlike anything I'd seen — first principles, every time. Weekly tests felt exactly like the real exam. Best decision of my life.",
    achievement: 'Board 2026 – 99.41 PR · JEE Main – 93 PR · GUJCET – 107.5/120'
  },
  {
    name: 'Jiya Panchal',
    image: 'Jiya.png',
    quote: 'The structured methodology, regular assessments, and individual attention played a major role in my success. Faculty were always available whenever I needed help.',
    achievement: 'Board 2026 – 97.18 PR · GUJCET 2026 – 106.25/120'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Check window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay with cleanup and hover pause
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isHovering]);

  // Determine which testimonials are currently visible
  const getVisibleIndices = () => {
    if (isMobile) {
      return [currentIndex];
    } else {
      return [currentIndex, (currentIndex + 1) % testimonials.length];
    }
  };

  const visibleIndices = getVisibleIndices();

  // Animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    })
  };

  return (
    <section className="bg-bg-primary py-16 md:py-24 px-5 md:px-6 relative border-t border-border-subtle/20">
      <div className="max-w-[1100px] mx-auto text-center">
        
        {/* Section Label */}
        <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-medium block mb-2">
          STUDENT STORIES
        </span>

        {/* Section Heading */}
        <h2 className="font-space font-bold text-text-primary text-[clamp(28px,4vw,44px)] leading-tight mb-2">
          Hear it from our Students
        </h2>
        
        {/* Subtitle */}
        <p className="font-space text-text-secondary text-base mb-12">
          Real students. Real results.
        </p>

        {/* Carousel Frame */}
        <div 
          className="relative min-h-[300px] mb-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-12 pointer-events-none z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center text-text-primary hover:border-accent-orange hover:text-accent-orange transition-colors pointer-events-auto shadow-md"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center text-text-primary hover:border-accent-orange hover:text-accent-orange transition-colors pointer-events-auto shadow-md"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Cards Area */}
          <div className="overflow-hidden py-4 px-2">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {visibleIndices.map((idx) => {
                  const item = testimonials[idx];
                  return (
                    <div
                      key={item.name}
                      className="bg-bg-card border border-border-subtle rounded-xl p-6 md:p-8 flex flex-col justify-between text-left shadow-lg shadow-black/10 min-h-[220px]"
                    >
                      {/* Top: 5 Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={15} className="text-accent-orange fill-accent-orange" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="font-space text-text-secondary text-[15px] leading-relaxed italic mb-6">
                        "{item.quote}"
                      </p>

                      {/* Bottom Info */}
                      <div className="flex items-center gap-3 mt-auto">
                        <Avatar
                          src={item.image}
                          name={item.name}
                          sizeClass="w-10 h-10"
                          borderClass="border border-border-subtle"
                          fallbackBg="bg-accent-orange"
                          fallbackText="text-bg-primary"
                        />
                        <div className="text-left">
                          <h4 className="font-space font-semibold text-sm text-text-primary">{item.name}</h4>
                          <p className="font-space font-normal text-[11px] md:text-xs text-text-muted mt-0.5">{item.achievement}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-5 bg-accent-orange' : 'bg-border-subtle'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
