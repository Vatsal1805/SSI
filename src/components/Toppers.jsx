import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import Avatar from './Avatar';

const boardToppers = [
  { name: 'Dhruv Modi', exam: '12th Science 2026', score: '99.41 PR', label: 'PERCENTILE', rank: '1st MADHAV', image: 'Dhruv.png' },
  { name: 'Yuvraj Shekhawat', exam: '12th Science 2026', score: '99.21 PR', label: 'PERCENTILE', rank: '1st SHARDABA', image: 'Yuvraj.png' },
  { name: 'Jiya Panchal', exam: '12th Science 2026', score: '97.18 PR', label: 'PERCENTILE', image: 'Jiya.png' },
  { name: 'Pratham Panchal', exam: '12th Science 2026', score: '96.29 PR', label: 'PERCENTILE', image: 'Pratham.png' },
  { name: 'Minakshi Sisodiya', exam: '12th Science 2026', score: '94.60 PR', label: 'PERCENTILE', image: 'Minakshi.png' },
  { name: 'Sukrit Agrawal', exam: '12th Science 2026', score: '93.61 PR', label: 'PERCENTILE', image: 'Sukrit.png' },
  { name: 'Sneha Sengar', exam: '12th Science 2026', score: '92.92 PR', label: 'PERCENTILE', image: 'Sneha.png' },
  { name: 'Yug Patel', exam: '12th Science 2026', score: '91.91 PR', label: 'PERCENTILE', image: 'Yug.png' }
];

const competitiveToppers = [
  { name: 'Ayush Patel', exam: 'JEE Advanced 2026', score: 'AIR 3371', label: 'ALL INDIA RANK', image: 'Ayush1.png' }
];

export default function Toppers() {
  const [activeTab, setActiveTab] = useState('board');

  return (
    <section className="bg-bg-primary py-16 md:py-24 px-5 md:px-6 relative border-t border-border-subtle/20">
      <div className="max-w-[1280px] mx-auto text-center">
        
        {/* Section Label */}
        <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-medium block mb-2">
          HALL OF FAME
        </span>

        {/* Section Heading */}
        <h2 className="font-space font-bold text-text-primary text-[clamp(28px,4vw,44px)] leading-tight mb-8">
          Our Toppers
        </h2>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('board')}
            className={`font-space font-medium text-xs md:text-sm tracking-wider uppercase py-2.5 px-6 rounded-lg transition-colors border duration-200 ${
              activeTab === 'board'
                ? 'bg-accent-orange border-accent-orange text-bg-primary font-semibold'
                : 'bg-transparent border-border-subtle text-text-muted hover:border-text-muted hover:text-text-secondary'
            }`}
          >
            12th Science 2026
          </button>
          
          <button
            onClick={() => setActiveTab('competitive')}
            className={`font-space font-medium text-xs md:text-sm tracking-wider uppercase py-2.5 px-6 rounded-lg transition-colors border duration-200 ${
              activeTab === 'competitive'
                ? 'bg-accent-orange border-accent-orange text-bg-primary font-semibold'
                : 'bg-transparent border-border-subtle text-text-muted hover:border-text-muted hover:text-text-secondary'
            }`}
          >
            JEE / NEET 2026
          </button>
        </div>

        {/* Toppers Cards Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'board' ? (
              <motion.div
                key="board-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
              >
                {boardToppers.map((topper) => (
                  <div
                    key={topper.name}
                    className="relative bg-bg-card border border-border-subtle rounded-xl p-5 md:py-6 md:px-5 flex flex-col items-center text-center shadow-lg shadow-black/10 hover:border-accent-orange/60 transition-all duration-200"
                  >
                    {/* Rank Badge */}
                    {topper.rank && (
                      <span className="absolute top-3 right-3 bg-accent-orange text-bg-primary font-space font-bold text-[9px] md:text-[10px] px-2 py-0.5 rounded tracking-wide uppercase leading-none shadow-sm z-10">
                        {topper.rank}
                      </span>
                    )}

                    {/* Photo */}
                    <Avatar
                      src={topper.image}
                      name={topper.name}
                      sizeClass="w-[72px] h-[72px]"
                      textClass="text-base font-semibold"
                      borderClass="border-2 border-border-subtle"
                      fallbackBg="bg-accent-orange"
                      fallbackText="text-bg-primary"
                      className="mb-4"
                    />

                    {/* Name */}
                    <h3 className="font-space font-semibold text-text-primary text-[15px] leading-snug mb-1">
                      {topper.name}
                    </h3>

                    {/* Exam Name */}
                    <p className="font-space text-text-muted text-xs mb-4">
                      {topper.exam}
                    </p>

                    {/* Score */}
                    <span className="font-space font-bold text-[clamp(22px,3vw,28px)] text-accent-orange leading-none mt-auto block">
                      {topper.score}
                    </span>

                    {/* Score Label */}
                    <span className="font-space font-normal text-[10px] text-text-muted uppercase tracking-wider block mt-1 leading-none">
                      {topper.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="competitive-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                {/* Toppers Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[800px] mb-8">
                  {competitiveToppers.map((topper) => (
                    <div
                      key={topper.name}
                      className="bg-bg-card border border-border-subtle rounded-xl p-5 md:py-6 md:px-5 flex flex-col items-center text-center shadow-lg shadow-black/10 hover:border-accent-orange/60 transition-all duration-200 mx-auto w-full"
                    >
                      {/* Photo */}
                      <Avatar
                        src={topper.image}
                        name={topper.name}
                        sizeClass="w-[72px] h-[72px]"
                        textClass="text-base font-semibold"
                        borderClass="border-2 border-border-subtle"
                        fallbackBg="bg-accent-orange"
                        fallbackText="text-bg-primary"
                        className="mb-4"
                      />

                      {/* Name */}
                      <h3 className="font-space font-semibold text-text-primary text-[15px] leading-snug mb-1">
                        {topper.name}
                      </h3>

                      {/* Exam */}
                      <p className="font-space text-text-muted text-xs mb-4">
                        {topper.exam}
                      </p>

                      {/* Score */}
                      <span className="font-space font-bold text-[clamp(22px,3vw,28px)] text-accent-orange leading-none mt-auto block">
                        {topper.score}
                      </span>

                      {/* Score Label */}
                      <span className="font-space font-normal text-[10px] text-text-muted uppercase tracking-wider block mt-1 leading-none">
                        {topper.label}
                      </span>
                    </div>
                  ))}

                  {/* Placeholder Card for update */}
                  <div className="bg-bg-card/40 border border-dashed border-border-subtle rounded-xl p-6 flex flex-col items-center justify-center text-center text-text-muted h-full min-h-[200px] w-full">
                    <span className="font-space text-xs tracking-wider uppercase font-medium text-accent-orange/60 mb-2">
                      Results Update
                    </span>
                    <p className="font-space text-sm leading-relaxed max-w-[220px]">
                      Other JEE/NEET results are currently being compiled and verified from official marksheets.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Verification Bottom Label */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <div className="w-5 h-5 rounded-full bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center">
            <Check size={12} className="text-accent-orange font-bold" />
          </div>
          <span className="font-space text-[13px] text-text-muted">
            Above results are verified from official marksheets and admit cards.
          </span>
        </div>

      </div>
    </section>
  );
}
