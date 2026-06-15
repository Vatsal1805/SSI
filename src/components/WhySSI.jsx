import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import appMockup from '../assets/ssi_app_mockup.png';
import booksMockup from '../assets/ssi_books_mockup.png';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function WhySSI() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="bg-bg-primary border-b border-[#263266] py-20 px-5 md:px-6 relative overflow-hidden">
      
      {/* Background radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.02),transparent_60%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-medium block mb-2">
            SSI ADVANTAGE
          </span>
          <h2 className="font-space font-bold text-text-primary text-[clamp(28px,4vw,44px)] leading-tight">
            Why Students Choose SSI
          </h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          {/* Card 1 — Expert Faculty (Spans 2 columns) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-2 bg-bg-card border border-border-subtle hover:border-accent-orange rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 transition-[border-color,box-shadow,background-color] duration-300 hover:shadow-xl hover:shadow-accent-orange/5 group"
          >
            <div className="text-left max-w-[420px]">
              <div className="flex flex-row items-center gap-3 mb-4 md:flex-col md:items-start md:gap-0">
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 md:mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-4-9 4 9 5zm0 0l-9-4.243V17a4 4 0 004 4h10a4 4 0 004-4v-7.243L12 14z" />
                  </svg>
                </div>
                <h3 className="font-space font-bold text-text-primary text-lg sm:text-xl">
                  Expert Faculty
                </h3>
              </div>
              <p className="font-space text-text-secondary text-sm leading-relaxed">
                Well-experienced team of engineers and highly qualified professionals with a 16+ year average experience in academic coaching and leadership.
              </p>
            </div>
            
            {/* Visual Stat Widget */}
            <div className="bg-bg-primary/50 border border-border-subtle rounded-xl p-5 flex flex-col items-center justify-center text-center shrink-0 w-full sm:w-[160px] aspect-square">
              <span className="font-space font-bold text-4xl text-accent-orange tracking-tight">
                16+
              </span>
              <span className="font-space text-[10px] text-text-muted uppercase tracking-wider mt-2 block leading-snug">
                Years Avg Exp
              </span>
            </div>
          </motion.div>

          {/* Card 2 — Personal Learning App (Spans 1 column) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-1 bg-bg-card border border-border-subtle hover:border-accent-orange rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 transition-[border-color,box-shadow,background-color] duration-300 hover:shadow-xl hover:shadow-accent-orange/5 group"
          >
            <div className="text-left">
              <div className="flex flex-row items-center gap-3 mb-4 md:flex-col md:items-start md:gap-0">
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 md:mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-space font-bold text-text-primary text-lg sm:text-xl">
                  Personal Learning App
                </h3>
              </div>
              <p className="font-space text-text-secondary text-sm leading-relaxed">
                Dedicated student-parent application. Get instant access to daily reports, attendance tracking, and premium PYQ materials.
              </p>
            </div>

            {/* Visual Phone App Mockup Image */}
            <div className="bg-bg-primary/40 border border-border-subtle/60 rounded-xl overflow-hidden h-[130px] flex items-center justify-center">
              <img 
                src={appMockup} 
                alt="SSI Personal Learning App Mockup" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </motion.div>

          {/* Card 3 — Smart Classrooms (Spans 1 column) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-1 bg-bg-card border border-border-subtle hover:border-accent-orange rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 transition-[border-color,box-shadow,background-color] duration-300 hover:shadow-xl hover:shadow-accent-orange/5 group"
          >
            <div className="text-left">
              <div className="flex flex-row items-center gap-3 mb-4 md:flex-col md:items-start md:gap-0">
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 md:mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-space font-bold text-text-primary text-lg sm:text-xl">
                  Smart Classrooms
                </h3>
              </div>
              <p className="font-space text-text-secondary text-sm leading-relaxed">
                Digital interactive boards, concept animations, and smart study spaces for deep understanding.
              </p>
            </div>

            {/* Smart Board SVG drawing */}
            <div className="bg-bg-primary/50 border border-border-subtle rounded-xl p-3 flex items-center justify-center aspect-[16/9] relative overflow-hidden">
              <div className="w-full h-full border border-border-subtle/50 rounded flex items-center justify-center bg-bg-primary/80">
                <span className="text-[10px] font-space text-accent-orange font-mono">
                  [Interactive Board]
                </span>
                {/* Visual chemistry molecule */}
                <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                  <svg className="w-16 h-16 stroke-current text-text-primary" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="4" cy="6" r="2" />
                    <circle cx="20" cy="6" r="2" />
                    <circle cx="12" cy="20" r="2" />
                    <line x1="12" y1="9" x2="12" y2="18" />
                    <line x1="5.5" y1="7" x2="10.5" y2="11" />
                    <line x1="18.5" y1="7" x2="13.5" y2="11" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 — Weekly Tests & Doubt Solving (Spans 2 columns) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-2 bg-bg-card border border-border-subtle hover:border-accent-orange rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 transition-[border-color,box-shadow,background-color] duration-300 hover:shadow-xl hover:shadow-accent-orange/5 group"
          >
            <div className="text-left max-w-[420px]">
              <div className="flex flex-row items-center gap-3 mb-4 md:flex-col md:items-start md:gap-0">
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 md:mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-space font-bold text-text-primary text-lg sm:text-xl">
                  Weekly Tests & Doubt Solving
                </h3>
              </div>
              <p className="font-space text-text-secondary text-sm leading-relaxed">
                Regular exam-pattern tests with diagnostic reports, paired with daily doubt-solving support via WhatsApp to keep study momentum high.
              </p>
            </div>

            {/* Combined Sparkline & Doubt Desk Widgets */}
            <div className="flex flex-col xs:flex-row gap-4 shrink-0 w-full sm:w-auto">
              
              {/* Sparkline Graph Widget */}
              <div className="bg-bg-primary/50 border border-border-subtle rounded-xl p-4 flex flex-col justify-between w-full sm:w-[170px] h-[130px]">
                <div className="flex justify-between items-center text-[10px] font-space text-text-muted">
                  <span>Score Trend:</span>
                  <span className="text-[#10b981] font-semibold">+35% Growth</span>
                </div>
                <div className="w-full h-12 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    <path d="M 0 35 L 25 32 L 50 20 L 75 14 L 100 4" fill="none" stroke="var(--accent-orange)" strokeWidth="2" />
                    <circle cx="100" cy="4" r="3" fill="var(--accent-orange)" />
                  </svg>
                </div>
                <div className="flex justify-between text-[9px] font-space text-text-muted mt-1">
                  <span>Week 1</span>
                  <span>Week 4</span>
                </div>
              </div>

              {/* Chat Desk Widget */}
              <div className="bg-bg-primary/50 border border-border-subtle rounded-xl p-4 flex flex-col justify-between w-full sm:w-[170px] h-[130px]">
                <div className="relative w-8 h-8 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
                  </svg>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-bg-card animate-pulse" />
                </div>
                <div className="text-left mt-2">
                  <span className="block font-space font-bold text-xs text-text-primary">Doubt Desk Live</span>
                  <span className="block font-space text-[10px] text-text-muted mt-1">Mentors active on WhatsApp 24/7</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Card 5 — In-House Practice Books (Spans 1 column) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-1 bg-bg-card border border-border-subtle hover:border-accent-orange rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 transition-[border-color,box-shadow,background-color] duration-300 hover:shadow-xl hover:shadow-accent-orange/5 group"
          >
            <div className="text-left">
              <div className="flex flex-row items-center gap-3 mb-4 md:flex-col md:items-start md:gap-0">
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 md:mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-space font-bold text-text-primary text-lg sm:text-xl">
                  In-House Practice Books
                </h3>
              </div>
              <p className="font-space text-text-secondary text-sm leading-relaxed">
                Authored by SSI specialists for 9th–12th. Rigorous material optimized for Boards & competitive exams (JEE, NEET, GUJCET).
              </p>
            </div>

            {/* Visual Book Stack Mockup Image */}
            <div className="bg-bg-primary/40 border border-border-subtle/60 rounded-xl overflow-hidden h-[130px] flex items-center justify-center">
              <img 
                src={booksMockup} 
                alt="SSI In-House Practice Books Mockup" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </motion.div>

          {/* Card 6 — Parent Reporting (Spans 2 columns) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-2 bg-bg-card border border-border-subtle hover:border-accent-orange rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 transition-[border-color,box-shadow,background-color] duration-300 hover:shadow-xl hover:shadow-accent-orange/5 group"
          >
            <div className="text-left max-w-[420px]">
              <div className="flex flex-row items-center gap-3 mb-4 md:flex-col md:items-start md:gap-0">
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 md:mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-space font-bold text-text-primary text-lg sm:text-xl">
                  Parent Reporting
                </h3>
              </div>
              <p className="font-space text-text-secondary text-sm leading-relaxed">
                Monthly performance reports and attendance logs shared directly with parents to ensure complete transparency.
              </p>
            </div>

            {/* Visual Report Card Widget */}
            <div className="bg-bg-primary/50 border border-border-subtle rounded-xl p-4 flex flex-col gap-2 shrink-0 w-full sm:w-[200px]">
              <div className="flex justify-between items-center text-[10px] font-space text-text-muted pb-1 border-b border-border-subtle/50">
                <span>Monthly Status:</span>
                <span className="text-green-500 font-semibold uppercase text-[9px] tracking-wider">Delivered</span>
              </div>
              
              {/* Report list rows */}
              <div className="flex flex-col gap-1.5 text-[10px] font-space">
                <div className="flex justify-between text-text-secondary">
                  <span>Class Attendance:</span>
                  <span className="text-text-primary font-bold">98.4%</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Test Attendance:</span>
                  <span className="text-text-primary font-bold">100%</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Test Avg Grade:</span>
                  <span className="text-accent-orange font-bold">A+ (92/100)</span>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
