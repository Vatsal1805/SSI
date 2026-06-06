import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-background-pattern flex items-center justify-center py-12 md:py-20 overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-6 flex flex-col md:flex-row items-center gap-12 md:gap-8 justify-between z-10">
        
        {/* Left Column - Content (55% width on desktop) */}
        <motion.div 
          className="w-full md:w-[55%] flex flex-col justify-center text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-medium">
              CENTRE OF EXCELLENCE  ·  VASTRAL, AHMEDABAD
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="hero-headline text-text-primary leading-tight font-bold">
              SUCCESS की शुरुआत,
              <br />
              सिर्फ <span className="text-accent-orange">EXPERTS</span> के साथ
            </h1>
          </motion.div>

          {/* Subline */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="font-space text-[16px] text-text-secondary leading-[1.6] max-w-[480px]">
              JEE · NEET · GUJCET · Boards · Foundation — structured batches, expert faculty, and a result record that speaks for itself.
            </p>
          </motion.div>

          {/* Buttons Row */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-accent-orange text-bg-primary font-space font-medium text-[15px] rounded-lg py-[14px] px-[28px] hover:bg-accent-orange-hover transition-colors duration-200 w-full sm:w-auto text-center"
            >
              Explore Programs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-transparent border border-border-subtle text-text-primary font-space font-medium text-[15px] rounded-lg py-[14px] px-[28px] hover:border-text-muted hover:bg-bg-card transition-all duration-200 w-full sm:w-auto text-center"
            >
              View Results
            </motion.button>
          </motion.div>

          {/* Micro-Stats Row */}
          <motion.div variants={itemVariants} className="flex flex-row flex-wrap items-center gap-6 border-t border-border-subtle/40 pt-8">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <span className="font-space font-semibold text-[14px] md:text-[18px] text-text-primary">
                99.41 PR
              </span>
              <span className="font-space font-normal text-[11px] text-text-muted uppercase tracking-[0.08em] mt-1">
                12TH BOARD 2026
              </span>
            </div>
            
            <span className="hidden sm:block w-[1px] h-8 bg-border-subtle" />

            {/* Stat 2 */}
            <div className="flex flex-col">
              <span className="font-space font-semibold text-[14px] md:text-[18px] text-text-primary">
                AIR 3371 JEE Adv.
              </span>
              <span className="font-space font-normal text-[11px] text-text-muted uppercase tracking-[0.08em] mt-1">
                JEE ADVANCED 2026
              </span>
            </div>

            <span className="hidden sm:block w-[1px] h-8 bg-border-subtle" />

            {/* Stat 3 */}
            <div className="flex flex-col">
              <span className="font-space font-semibold text-[14px] md:text-[18px] text-text-primary">
                4.7★ Google
              </span>
              <span className="font-space font-normal text-[11px] text-text-muted uppercase tracking-[0.08em] mt-1">
                213 REVIEWS
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Topper Cards (45% width on desktop) */}
        <motion.div 
          className="w-full md:w-[45%] flex flex-col justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex flex-col w-full">
            {/* Card 1 (Largest / Hero) */}
            <motion.div
              whileHover={{ y: -4, borderColor: '#f97316' }}
              transition={{ duration: 0.2 }}
              className="bg-bg-card border border-border-subtle rounded-xl p-5 md:py-5 md:px-6 w-full flex items-center justify-between border-l-[3px] border-l-accent-orange shadow-lg shadow-black/20"
            >
              <div className="flex items-center gap-4">
                {/* Circular Avatar */}
                <div className="w-12 h-12 rounded-full bg-bg-primary border-2 border-accent-orange flex items-center justify-center shrink-0">
                  <span className="text-accent-orange font-space font-medium text-sm">DM</span>
                </div>
                {/* Details */}
                <div className="text-left">
                  <h4 className="font-space font-semibold text-[15px] text-text-primary">Dhruv Modi</h4>
                  <p className="font-space font-normal text-xs text-text-muted mt-0.5">12th Science Board · 2026</p>
                </div>
              </div>
              {/* Score */}
              <div className="text-right">
                <span className="font-space font-bold text-xl md:text-2xl text-accent-orange block leading-none">99.41 PR</span>
                <span className="font-space font-normal text-[10px] text-text-muted uppercase tracking-wider block mt-1">PERCENTILE</span>
              </div>
            </motion.div>

            {/* Card 2 (Medium) */}
            <motion.div
              whileHover={{ y: -4, borderColor: '#f97316' }}
              transition={{ duration: 0.2 }}
              className="hidden md:flex bg-bg-card border border-border-subtle rounded-xl p-4 md:py-4 md:px-5 w-[90%] ml-auto -mt-3 items-center justify-between shadow-lg shadow-black/20 z-10"
            >
              <div className="flex items-center gap-4">
                {/* Circular Avatar */}
                <div className="w-12 h-12 rounded-full bg-bg-primary border-2 border-accent-orange flex items-center justify-center shrink-0">
                  <span className="text-accent-orange font-space font-medium text-sm">YS</span>
                </div>
                {/* Details */}
                <div className="text-left">
                  <h4 className="font-space font-semibold text-[15px] text-text-primary">Yuvraj Shekhawat</h4>
                  <p className="font-space font-normal text-xs text-text-muted mt-0.5">JEE Main · 2026</p>
                </div>
              </div>
              {/* Score */}
              <div className="text-right">
                <span className="font-space font-bold text-xl md:text-2xl text-accent-orange block leading-none">98 PR</span>
              </div>
            </motion.div>

            {/* Card 3 (Smallest) */}
            <motion.div
              whileHover={{ y: -4, borderColor: '#f97316' }}
              transition={{ duration: 0.2 }}
              className="hidden md:flex bg-bg-card border border-border-subtle rounded-xl p-3.5 md:py-3.5 md:px-[18px] w-[82%] ml-auto -mt-2 items-center justify-between shadow-lg shadow-black/20 z-0"
            >
              <div className="flex items-center gap-4">
                {/* Circular Avatar */}
                <div className="w-12 h-12 rounded-full bg-bg-primary border-2 border-accent-orange flex items-center justify-center shrink-0">
                  <span className="text-accent-orange font-space font-medium text-sm">AP</span>
                </div>
                {/* Details */}
                <div className="text-left">
                  <h4 className="font-space font-semibold text-[15px] text-text-primary">Ayush Patel</h4>
                  <p className="font-space font-normal text-xs text-text-muted mt-0.5">JEE Advanced · 2026</p>
                </div>
              </div>
              {/* Score */}
              <div className="text-right">
                <span className="font-space font-bold text-xl md:text-2xl text-accent-orange block leading-none">AIR 3371</span>
              </div>
            </motion.div>
          </div>

          {/* Footer Line below cards */}
          <div className="mt-4 flex justify-end">
            <div className="font-space text-[12px] text-text-muted hover:text-accent-orange transition-colors duration-200 cursor-pointer inline-flex items-center gap-1">
              <span>+6 more toppers this year</span>
              <span className="text-accent-orange font-bold font-sans">→</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
