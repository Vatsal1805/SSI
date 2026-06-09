import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import Avatar from './Avatar';

const boardToppers = [
  { name: 'Dhruv Modi', exam: '12th Science 2026', score: '99.41 PR', label: 'PERCENTILE', rank: '1st MADHAV', image: 'Dhruv.png' },
  { name: 'Yuvraj Shekhawat', exam: '12th Science 2026', score: '99.21 PR', label: 'PERCENTILE', rank: '1st SHARDABA', image: 'Yuvraj.png' }
];

const competitiveToppers = [
  { name: 'Ayush Patel', exam: 'JEE Advanced 2026', score: 'AIR 3371', label: 'ALL INDIA RANK', image: 'Ayush1.png' },
  { name: 'Jiya Panchal', exam: 'NEET UG 2026', score: '675 / 720', label: 'NEET SCORE', image: 'Jiya.png' }
];

export default function Toppers() {
  const [activeTab, setActiveTab] = useState('board');

  return (
    <section className="bg-bg-light py-16 md:py-24 px-5 md:px-6 relative border-b border-[#334155]">
      <div className="max-w-[1280px] mx-auto text-center">
        
        {/* Section Label */}
        <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-medium block mb-2">
          HALL OF FAME
        </span>

        {/* Section Heading */}
        <h2 className="font-space font-bold text-[#0f172a] text-[clamp(28px,4vw,44px)] leading-tight mb-8">
          Our Toppers
        </h2>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('board')}
            className={`font-space font-medium text-xs md:text-sm tracking-wider uppercase py-2.5 px-6 rounded-lg transition-colors border duration-200 ${
              activeTab === 'board'
                ? 'bg-[#f97316] border-[#f97316] text-[#ffffff] font-semibold'
                : 'bg-bg-light-card border-border-light text-[#475569] hover:border-[#cbd5e1] hover:text-[#0f172a]'
            }`}
          >
            12th Science 2026
          </button>
          
          <button
            onClick={() => setActiveTab('competitive')}
            className={`font-space font-medium text-xs md:text-sm tracking-wider uppercase py-2.5 px-6 rounded-lg transition-colors border duration-200 ${
              activeTab === 'competitive'
                ? 'bg-[#f97316] border-[#f97316] text-[#ffffff] font-semibold'
                : 'bg-bg-light-card border-border-light text-[#475569] hover:border-[#cbd5e1] hover:text-[#0f172a]'
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
                className="grid grid-cols-2 max-w-[800px] mx-auto gap-5 md:gap-8"
              >
                {boardToppers.map((topper) => (
                  <div
                    key={topper.name}
                    className="group relative border border-border-light hover:border-[#f97316] rounded-2xl p-6 md:py-10 md:px-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 will-change-transform"
                    style={{ 
                      background: 'linear-gradient(135deg, #fff7ed 0%, #f4f3ee 100%)', 
                      boxShadow: '0 10px 40px rgba(0,0,0,0.04)' 
                    }}
                  >
                    {/* Rank Badge */}
                    {topper.rank && (
                      <span className="absolute top-4 right-4 bg-accent-orange text-white font-space font-bold text-[9px] md:text-[10px] px-2.5 py-1 rounded tracking-wide uppercase leading-none shadow-sm z-10">
                        {topper.rank}
                      </span>
                    )}

                    {/* Photo */}
                    <Avatar
                      src={topper.image}
                      name={topper.name}
                      sizeClass="w-20 h-20 md:w-24 md:h-24"
                      textClass="text-lg font-semibold"
                      borderClass="border-2 border-border-light group-hover:border-[#f97316] transition-colors duration-300"
                      fallbackBg="bg-accent-orange"
                      fallbackText="text-bg-primary"
                      className="mb-5 border-2 border-border-light group-hover:border-[#f97316] transition-colors duration-300 shadow-md"
                    />

                    {/* Name */}
                    <h3 className="font-space font-semibold text-[#0f172a] text-[16px] md:text-lg leading-snug mb-1.5">
                      {topper.name}
                    </h3>

                    {/* Exam Name */}
                    <p className="font-space text-[#94a3b8] text-xs md:text-sm mb-6">
                      {topper.exam}
                    </p>

                    {/* Score */}
                    <span className="font-space font-bold text-[clamp(24px,4vw,34px)] text-accent-orange leading-none mt-auto block">
                      {topper.score}
                    </span>

                    {/* Score Label */}
                    <span className="font-space font-normal text-[10px] md:text-xs text-[#94a3b8] uppercase tracking-wider block mt-2 leading-none">
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
                className="grid grid-cols-2 max-w-[800px] mx-auto gap-5 md:gap-8"
              >
                {competitiveToppers.map((topper) => (
                  <div
                    key={topper.name}
                    className="group relative border border-border-light hover:border-[#f97316] rounded-2xl p-6 md:py-10 md:px-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 will-change-transform w-full"
                    style={{ 
                      background: 'linear-gradient(135deg, #fff7ed 0%, #f4f3ee 100%)', 
                      boxShadow: '0 10px 40px rgba(0,0,0,0.04)' 
                    }}
                  >
                    {/* Photo */}
                    <Avatar
                      src={topper.image}
                      name={topper.name}
                      sizeClass="w-20 h-20 md:w-24 md:h-24"
                      textClass="text-lg font-semibold"
                      borderClass="border-2 border-border-light group-hover:border-[#f97316] transition-colors duration-300"
                      fallbackBg="bg-accent-orange"
                      fallbackText="text-bg-primary"
                      className="mb-5 border-2 border-border-light group-hover:border-[#f97316] transition-colors duration-300 shadow-md"
                    />

                    {/* Name */}
                    <h3 className="font-space font-semibold text-[#0f172a] text-[16px] md:text-lg leading-snug mb-1.5">
                      {topper.name}
                    </h3>

                    {/* Exam */}
                    <p className="font-space text-[#94a3b8] text-xs md:text-sm mb-6">
                      {topper.exam}
                    </p>

                    {/* Score */}
                    <span className="font-space font-bold text-[clamp(24px,4vw,34px)] text-accent-orange leading-none mt-auto block">
                      {topper.score}
                    </span>

                    {/* Score Label */}
                    <span className="font-space font-normal text-[10px] md:text-xs text-[#94a3b8] uppercase tracking-wider block mt-2 leading-none">
                      {topper.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Verification Bottom Label */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <div className="w-5 h-5 rounded-full bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center">
            <Check size={12} className="text-accent-orange font-bold" />
          </div>
          <span className="font-space text-[13px] text-[#94a3b8]">
            Above results are verified from official marksheets and admit cards.
          </span>
        </div>

      </div>
    </section>
  );
}
