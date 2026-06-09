import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'foundation', label: '5th-10th' },
  { id: 'science', label: '11th-12th Science' },
  { id: 'commerce', label: '11th-12th Commerce' },
  { id: 'jeeneet', label: 'JEE / NEET' },
  { id: 'gujcet', label: 'GUJCET' }
];

const coursesData = {
  foundation: {
    title: '5th – 10th Foundation',
    badge: 'EARLY PREP',
    description: 'Build unbreakable academic foundations with concept-first teaching. Early preparation for competitive exams through structured learning paths.',
    tags: ['Concept Building', 'Olympiad Prep', 'Board Excellence'],
    subjects: ['Mathematics', 'Science', 'English', 'Social Science'],
    details: [
      { label: 'Duration', value: '1 Year' },
      { label: 'Batch Size', value: 'Small batches' },
      { label: 'Focus', value: 'Concept clarity, study habits' },
      { label: 'Exam Target', value: 'Board + Olympiad' }
    ],
    icon: (
      <svg className="w-10 h-10 text-accent-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  science: {
    title: '11th – 12th Science',
    badge: 'PCM / PCB',
    description: 'Comprehensive Physics, Chemistry, Biology & Mathematics coaching aligned with GSEB/CBSE board guidelines and competitive exam preparation.',
    tags: ['PCM & PCB Streams', 'Board + Competitive', 'Weekly Mock Exams'],
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'PCM (Group A)', 'PCB (Group B)'],
    details: [
      { label: 'Duration', value: '2 Years' },
      { label: 'Batch Size', value: 'Limited seats' },
      { label: 'Focus', value: 'Board + JEE/NEET foundation' },
      { label: 'Exam Target', value: 'GSEB / CBSE + JEE / NEET' }
    ],
    icon: (
      <svg className="w-10 h-10 text-accent-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  commerce: {
    title: '11th – 12th Commerce',
    badge: 'COMMERCE',
    description: 'Accounts, Economics, Business Studies and Statistics — expert coaching for GSEB & CBSE board excellence.',
    tags: ['Accounts & Stats', 'Economics & BST', 'Board Excellence'],
    subjects: ['Accountancy', 'Economics', 'Business Studies', 'Statistics'],
    details: [
      { label: 'Duration', value: '2 Years' },
      { label: 'Batch Size', value: 'Limited seats' },
      { label: 'Focus', value: 'Board mastery' },
      { label: 'Exam Target', value: 'GSEB / CBSE Commerce' }
    ],
    icon: (
      <svg className="w-10 h-10 text-accent-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  jeeneet: {
    title: 'JEE Main & Advanced + NEET UG',
    badge: 'IIT · MEDICAL',
    description: 'Rigorous JEE and NEET preparation with daily problem solving, mock tests, and mentorship from experienced faculty. Biology-first approach for NEET with AIIMS-level practice.',
    tags: ['2-Year / 1-Year', 'Mock Tests', 'Rank Predictor'],
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    details: [
      { label: 'Duration', value: '1 or 2 Years' },
      { label: 'Batch Size', value: 'Small batches' },
      { label: 'Focus', value: 'Deep concept + problem solving' },
      { label: 'Exam Target', value: 'JEE Main, JEE Advanced, NEET UG' }
    ],
    icon: (
      <svg className="w-10 h-10 text-accent-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    details: [
      { label: 'Duration', value: '6 Months / 1 Year' },
      { label: 'Batch Size', value: 'Limited seats' },
      { label: 'Focus', value: 'Gujarat exam pattern' },
      { label: 'Exam Target', value: 'GUJCET 2026–27' }
    ],
    icon: (
      <svg className="w-10 h-10 text-accent-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  }
};

export default function Courses() {
  const [activeTab, setActiveTab] = useState('foundation');

  const course = coursesData[activeTab];

  return (
    <section className="bg-bg-light border-b border-[#334155] py-16 md:py-24 px-5 md:px-6 relative">
      <div className="max-w-[1280px] mx-auto text-center">
        
        {/* Section Label */}
        <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-medium block mb-2">
          ACADEMIC PROGRAMS
        </span>

        {/* Section Heading */}
        <h2 className="font-space font-bold text-[#0f172a] text-[clamp(28px,4vw,44px)] leading-tight mb-4">
          Courses Designed to Win
        </h2>

        {/* Sub-heading */}
        <p className="font-space text-[#475569] text-base leading-relaxed max-w-[520px] mx-auto mb-12">
          From foundation to advanced competitive preparation — structured for peak performance.
        </p>

        {/* Tab Switcher (Responsive Grid on Mobile, Flex Row on Desktop) */}
        <div className="flex justify-center mb-12 w-full">
          <div className="grid grid-cols-2 md:flex md:flex-row md:justify-center gap-2.5 w-full max-w-[480px] md:max-w-full px-4 md:px-0">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === tab.id;
              const isLastMobile = idx === tabs.length - 1;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative font-space font-medium text-[13px] md:text-sm rounded-lg py-2.5 px-3 md:px-5 transition-all duration-200 focus:outline-none border ${
                    isLastMobile 
                      ? 'col-span-2 w-full md:w-auto md:col-span-1 justify-self-center' 
                      : 'w-full md:w-auto'
                  } ${
                    isActive 
                      ? 'text-[#ffffff] border-[#f97316] z-10' 
                      : 'text-[#475569] border-border-light hover:border-[#cbd5e1] hover:text-[#0f172a] bg-bg-light-card'
                  }`}
                >
                  {/* Sliding active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-[#f97316] rounded-[7px] z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
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
              className="bg-bg-light-card border border-border-light border-l-[3px] border-l-[#f97316] rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 text-left transition-all duration-300"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
            >
              {/* Left Column (Info) */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {course.icon}
                    <span className="font-space font-semibold text-[10px] text-[#f97316] bg-accent-orange/10 px-2.5 py-1 rounded border border-accent-orange/20 tracking-wider uppercase">
                      {course.badge}
                    </span>
                  </div>
                  
                  <h3 className="font-space font-bold text-[#0f172a] text-xl md:text-2xl mb-3">
                    {course.title}
                  </h3>
                  
                  <p className="font-space text-[#475569] text-[15px] leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Subjects Covered Section (Fills Desktop Empty Space) */}
                  <div className="mb-6">
                    <h4 className="font-space font-semibold text-xs text-[#94a3b8] uppercase tracking-wider mb-3">
                      Subjects Covered
                    </h4>
                    {activeTab === 'science' ? (
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-space text-[10px] md:text-xs font-bold text-accent-orange uppercase tracking-wide mb-2.5">
                            PCM Group (Group A)
                          </h5>
                          <div className="flex flex-col gap-2 md:gap-2.5">
                            {['Physics', 'Chemistry', 'Mathematics'].map((subj) => (
                              <div 
                                key={subj} 
                                className="font-space text-[11px] md:text-[14px] font-medium text-accent-orange md:text-[#0f172a] bg-accent-orange/5 md:bg-transparent border border-accent-orange/20 md:border-0 px-3 md:px-0 py-1.5 md:py-0.5 rounded-md md:rounded-none flex items-center gap-1.5 md:gap-2.5"
                              >
                                <svg className="w-3.5 h-3.5 text-accent-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{subj}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-space text-[10px] md:text-xs font-bold text-accent-orange uppercase tracking-wide mb-2.5">
                            PCB Group (Group B)
                          </h5>
                          <div className="flex flex-col gap-2 md:gap-2.5">
                            {['Physics', 'Chemistry', 'Biology'].map((subj) => (
                              <div 
                                key={subj} 
                                className="font-space text-[11px] md:text-[14px] font-medium text-accent-orange md:text-[#0f172a] bg-accent-orange/5 md:bg-transparent border border-accent-orange/20 md:border-0 px-3 md:px-0 py-1.5 md:py-0.5 rounded-md md:rounded-none flex items-center gap-1.5 md:gap-2.5"
                              >
                                <svg className="w-3.5 h-3.5 text-accent-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{subj}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap md:flex-col gap-2 md:gap-3">
                        {course.subjects.map((subj) => (
                          <div 
                            key={subj} 
                            className="font-space text-[11px] md:text-[14px] font-medium text-accent-orange md:text-[#0f172a] bg-accent-orange/5 md:bg-transparent border border-accent-orange/20 md:border-0 px-3 md:px-0 py-1.5 md:py-0.5 rounded-md md:rounded-none flex items-center gap-1.5 md:gap-2.5 animate-fade-in"
                          >
                            <svg className="w-3.5 h-3.5 text-accent-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{subj}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {course.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="font-space text-[11px] text-[#64748b] bg-bg-light border border-border-light px-3 py-1.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column (Details - Mobile 2x2 Grid, Desktop Vertical List) */}
              <div className="w-full md:w-[320px] bg-bg-light border border-border-light rounded-lg p-5 flex flex-col justify-between">
                <div>
                  <h4 className="font-space font-semibold text-xs text-[#94a3b8] uppercase tracking-wider mb-4">
                    Program Structure
                  </h4>
                  
                  {/* Grid on Mobile, List on Desktop */}
                  <div className="grid grid-cols-2 md:flex md:flex-col gap-3 md:gap-4">
                    {course.details.map((detail) => (
                      <div 
                        key={detail.label} 
                        className="bg-bg-light-card md:bg-transparent border border-border-light md:border-0 md:border-b md:border-border-light/60 p-3 md:p-0 md:pb-3 rounded-lg md:rounded-none last:border-0 last:pb-0 text-left flex flex-col justify-center"
                      >
                        <span className="font-space text-[10px] md:text-xs text-[#94a3b8] block uppercase tracking-wide leading-none">
                          {detail.label}
                        </span>
                        <span className="font-space text-xs md:text-sm font-semibold text-[#0f172a] mt-1.5 block leading-tight">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA inside the card, full-width on mobile */}
                <div className="mt-6 md:mt-8 flex items-center justify-end w-full">
                  <a
                    href="#admissions"
                    className="bg-[#f97316] text-[#ffffff] font-space font-semibold text-xs md:text-sm rounded-lg px-5 py-3 hover:bg-[#ea6c0a] transition-all flex items-center gap-1 group shadow-md shadow-accent-orange/10 w-full md:w-auto justify-center"
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
