import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'foundation', label: 'Foundation' },
  { id: 'science', label: 'Science 11-12' },
  { id: 'commerce', label: 'Commerce' },
  { id: 'jeeneet', label: 'JEE / NEET' },
  { id: 'gujcet', label: 'GUJCET' }
];

const coursesData = {
  foundation: {
    title: '5th – 10th Foundation',
    badge: 'EARLY PREP',
    description: 'Build unbreakable academic foundations with concept-first teaching. Early preparation for competitive exams through structured learning paths.',
    tags: ['Concept Building', 'Olympiad Prep', 'Board Excellence'],
    details: [
      { label: 'Duration', value: '1 Year' },
      { label: 'Batch Size', value: 'Small batches' },
      { label: 'Focus', value: 'Concept clarity, study habits' },
      { label: 'Exam Target', value: 'Board + Olympiad' }
    ],
    // Book icon SVG
    icon: (
      <svg className="w-10 h-10 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  science: {
    title: '11th – 12th Science',
    badge: 'PCM / PCB',
    description: 'Comprehensive Physics, Chemistry & Biology/Mathematics coaching aligned with CBSE/GSEB boards and competitive exam syllabi.',
    tags: ['PCM / PCB', 'Board + Competitive', 'Weekly Tests'],
    details: [
      { label: 'Duration', value: '2 Years' },
      { label: 'Batch Size', value: 'Limited seats' },
      { label: 'Focus', value: 'Board + JEE/NEET foundation' },
      { label: 'Exam Target', value: 'GSEB / CBSE + JEE / NEET' }
    ],
    // Atom icon SVG
    icon: (
      <svg className="w-10 h-10 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  commerce: {
    title: '11th – 12th Commerce',
    badge: 'COMMERCE',
    description: 'Accounts, Economics, Business Studies and Statistics — expert coaching for board excellence and competitive commerce exams.',
    tags: ['Accounts', 'Economics', 'BST & Stats'],
    details: [
      { label: 'Duration', value: '2 Years' },
      { label: 'Batch Size', value: 'Limited seats' },
      { label: 'Focus', value: 'Board mastery' },
      { label: 'Exam Target', value: 'GSEB / CBSE Commerce' }
    ],
    // Chart Bar icon SVG
    icon: (
      <svg className="w-10 h-10 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  jeeneet: {
    title: 'JEE Main & Advanced + NEET UG',
    badge: 'IIT · MEDICAL',
    description: 'Rigorous JEE and NEET preparation with daily problem solving, mock tests, and mentorship from experienced faculty. Biology-first approach for NEET with AIIMS-level practice.',
    tags: ['2-Year / 1-Year', 'Mock Tests', 'Rank Predictor'],
    details: [
      { label: 'Duration', value: '1 or 2 Years' },
      { label: 'Batch Size', value: 'Small batches' },
      { label: 'Focus', value: 'Deep concept + problem solving' },
      { label: 'Exam Target', value: 'JEE Main, JEE Advanced, NEET UG' }
    ],
    // Target icon SVG
    icon: (
      <svg className="w-10 h-10 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" />
      </svg>
    )
  },
  gujcet: {
    title: 'GUJCET Coaching',
    badge: 'GUJARAT PATTERN',
    description: 'Targeted GUJCET preparation with Gujarat-pattern MCQ practice, previous year papers, and high-scoring strategy sessions.',
    tags: ['Gujarat Pattern', 'PYQ Practice', 'Score Strategy'],
    details: [
      { label: 'Duration', value: '6 Months / 1 Year' },
      { label: 'Batch Size', value: 'Limited seats' },
      { label: 'Focus', value: 'Gujarat exam pattern' },
      { label: 'Exam Target', value: 'GUJCET 2026–27' }
    ],
    // Clipboard check SVG
    icon: (
      <svg className="w-10 h-10 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  }
};

export default function Courses() {
  const [activeTab, setActiveTab] = useState('foundation');

  const course = coursesData[activeTab];

  return (
    <section className="bg-bg-primary py-16 md:py-24 px-5 md:px-6 relative">
      <div className="max-w-[1280px] mx-auto text-center">
        
        {/* Section Label */}
        <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-medium block mb-2">
          ACADEMIC PROGRAMS
        </span>

        {/* Section Heading */}
        <h2 className="font-space font-bold text-text-primary text-[clamp(28px,4vw,44px)] leading-tight mb-4">
          Courses Designed to Win
        </h2>

        {/* Sub-heading */}
        <p className="font-space text-text-secondary text-base leading-relaxed max-w-[520px] mx-auto mb-12">
          From foundation to advanced competitive preparation — structured for peak performance.
        </p>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2.5 overflow-x-auto pb-3 px-2 max-w-full no-scrollbar whitespace-nowrap">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative font-space font-medium text-sm rounded-lg py-2.5 px-5 transition-all duration-200 focus:outline-none border ${
                    isActive 
                      ? 'text-bg-primary border-accent-orange' 
                      : 'text-text-muted border-border-subtle hover:border-text-muted hover:text-text-secondary bg-transparent'
                  }`}
                >
                  {/* Sliding active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-accent-orange rounded-[7px] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panel */}
        <div className="max-w-[960px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-bg-card border border-border-subtle rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 text-left shadow-xl shadow-black/10"
            >
              {/* Left Column (Info) */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  {course.icon}
                  <span className="font-space font-semibold text-[10px] text-accent-orange bg-[#f97316]/10 px-2.5 py-1 rounded border border-accent-orange/20 tracking-wider uppercase">
                    {course.badge}
                  </span>
                </div>
                
                <h3 className="font-space font-bold text-text-primary text-xl md:text-2xl mb-3">
                  {course.title}
                </h3>
                
                <p className="font-space text-text-secondary text-[15px] leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {course.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="font-space text-xs text-text-secondary bg-bg-primary border border-border-subtle px-3 py-1.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column (Details) */}
              <div className="w-full md:w-[320px] bg-bg-primary/50 border border-border-subtle/40 rounded-lg p-5 flex flex-col justify-between">
                <div>
                  <h4 className="font-space font-semibold text-xs text-text-muted uppercase tracking-wider mb-4">
                    Program Structure
                  </h4>
                  <div className="flex flex-col gap-4">
                    {course.details.map((detail) => (
                      <div key={detail.label} className="border-b border-border-subtle/20 pb-3 last:border-0 last:pb-0">
                        <span className="font-space text-xs text-text-muted block uppercase tracking-wide">
                          {detail.label}
                        </span>
                        <span className="font-space text-sm font-medium text-text-primary mt-0.5 block">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA inside the card, right-aligned on bottom */}
                <div className="mt-8 flex items-center justify-end">
                  <a
                    href="#admissions"
                    className="font-space font-medium text-xs md:text-sm text-accent-orange hover:text-accent-orange-hover flex items-center gap-1 transition-colors duration-150 group"
                  >
                    <span>Reserve Your Seat</span>
                    <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
