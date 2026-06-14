import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function AboutUs({ onNavigate }) {
  return (
    <section className="bg-bg-light py-20 px-5 md:px-6 relative border-b border-[#cbd5e1]/40">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Column — Overlapping Images */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[480px] h-[340px] sm:h-[400px]">
            
            {/* Background Decorative Orange Block */}
            <div className="absolute top-[10%] left-0 w-[45%] h-[65%] bg-accent-orange rounded-xl -z-10 opacity-90 shadow-lg" />
            
            {/* Image 1 (Large back image) */}
            <div className="absolute top-0 left-[8%] w-[68%] h-[78%] rounded-xl overflow-hidden shadow-xl border-4 border-bg-light">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" 
                alt="Interactive smart classroom" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            
            {/* Image 2 (Overlapping front-right image) */}
            <div className="absolute bottom-0 right-[4%] w-[58%] h-[65%] rounded-xl overflow-hidden shadow-2xl border-4 border-bg-light">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" 
                alt="Students studying collaboratively" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80";
                }}
              />
            </div>

            {/* Micro accent items like dots in the reference */}
            <div className="absolute top-[5%] right-0 w-[40px] h-[40px] opacity-20 pointer-events-none hidden sm:block">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="4" height="4" rx="2" fill="var(--accent-orange)" />
                <rect x="12" y="0" width="4" height="4" rx="2" fill="var(--accent-orange)" />
                <rect x="24" y="0" width="4" height="4" rx="2" fill="var(--accent-orange)" />
                <rect x="36" y="0" width="4" height="4" rx="2" fill="var(--accent-orange)" />
                <rect x="0" y="12" width="4" height="4" rx="2" fill="var(--accent-orange)" />
                <rect x="12" y="12" width="4" height="4" rx="2" fill="var(--accent-orange)" />
                <rect x="24" y="12" width="4" height="4" rx="2" fill="var(--accent-orange)" />
                <rect x="36" y="12" width="4" height="4" rx="2" fill="var(--accent-orange)" />
                <rect x="0" y="24" width="4" height="4" rx="2" fill="var(--accent-orange)" />
                <rect x="12" y="24" width="4" height="4" rx="2" fill="var(--accent-orange)" />
                <rect x="24" y="24" width="4" height="4" rx="2" fill="var(--accent-orange)" />
                <rect x="36" y="24" width="4" height="4" rx="2" fill="var(--accent-orange)" />
              </svg>
            </div>
            
          </div>
        </div>
        
        {/* Right Column — Content/Info */}
        <div className="w-full lg:w-1/2 flex flex-col text-left">
          
          {/* Label */}
          <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-semibold block mb-3">
            ABOUT US
          </span>
          
          {/* Heading */}
          <h2 className="font-space font-bold text-text-light-primary text-[clamp(28px,4vw,44px)] leading-tight mb-5">
            The Best Coaching in Vastral for Academic Excellence
          </h2>
          
          {/* Intro Description */}
          <p className="font-space text-text-light-secondary text-base leading-relaxed mb-8">
            At Shree Sai Institute, we believe that quality education shapes a brighter future. As the premier coaching institute in Vastral, Ahmedabad, we provide expert guidance, result-driven learning, and a student-focused approach to help every learner achieve academic success.
          </p>
          
          {/* Features Checklist */}
          <div className="flex flex-col gap-6 mb-10">
            
            {/* Feature 1: Expert Faculty */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center shrink-0 text-accent-orange">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-space font-semibold text-sm md:text-base text-text-light-primary mb-1">
                  Expert Faculty
                </h4>
                <p className="font-space text-xs md:text-sm text-text-light-secondary leading-relaxed">
                  Our highly qualified and experienced teachers ensure conceptual clarity, in-depth understanding, and personalized mentoring, making learning easier and more effective.
                </p>
              </div>
            </div>
            
            {/* Feature 2: Modern Learning Environment */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center shrink-0 text-accent-orange">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-space font-semibold text-sm md:text-base text-text-light-primary mb-1">
                  Modern Learning Environment
                </h4>
                <p className="font-space text-xs md:text-sm text-text-light-secondary leading-relaxed">
                  With state-of-the-art classrooms, interactive digital boards, air-conditioned study spaces, and a disciplined study atmosphere, students get the best facilities to excel.
                </p>
              </div>
            </div>
            
            {/* Feature 3: Career-Oriented Coaching */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center shrink-0 text-accent-orange">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-space font-semibold text-sm md:text-base text-text-light-primary mb-1">
                  Career-Oriented Coaching
                </h4>
                <p className="font-space text-xs md:text-sm text-text-light-secondary leading-relaxed">
                  We offer comprehensive coaching for JEE, NEET, GUJCET, GSEB/CBSE (11th-12th Science & Commerce), and Foundation (5th-10th), ensuring students are ready for future milestones.
                </p>
              </div>
            </div>

          </div>
          
          {/* CTA Button */}
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="#admissions"
              className="inline-flex items-center gap-1.5 bg-[#f97316] text-[#ffffff] font-space font-semibold text-[14px] px-8 py-3.5 rounded-lg hover:bg-[#ea6c0a] transition-all duration-200 shadow-md shadow-accent-orange/10 group"
            >
              <span>Book a Demo Class</span>
              <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <button
              onClick={() => onNavigate && onNavigate('about')}
              className="inline-flex items-center gap-1.5 border border-[#cbd5e1] hover:border-accent-orange hover:bg-white text-text-light-secondary hover:text-accent-orange font-space font-semibold text-[14px] px-8 py-3.5 rounded-lg transition-all duration-200"
            >
              <span>Read Our Story</span>
              <ChevronRight size={16} />
            </button>
          </div>
          
        </div>

      </div>
    </section>
  );
}
