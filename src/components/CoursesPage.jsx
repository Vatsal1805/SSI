import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Award, CheckCircle2, ChevronDown, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

const courses = {
  science: {
    title: '11th & 12th Science (GSEB / CBSE)',
    subtitle: 'Comprehensive Board & Entrance (JEE/NEET/GUJCET) Preparation',
    badge: 'BOARD + ENTRANCE BATCH',
    subjects: [
      { name: 'Physics', topics: 'Mechanics, Electrodynamics, Optics, Thermodynamics, Modern Physics' },
      { name: 'Chemistry', topics: 'Physical Chemistry, Inorganic Chemistry, Organic Chemistry' },
      { name: 'Mathematics', topics: 'Calculus, Algebra, Coordinate Geometry, Trigonometry, Vectors' },
      { name: 'Biology', topics: 'Human Physiology, Plant Physiology, Genetics, Ecology, Cell Biology' }
    ],
    features: [
      'Experienced engineers and senior subject mentors',
      'Classroom lectures with interactive digital smart boards',
      'Daily Practice Sheets (DPQ) and board-oriented test papers',
      'Weekly Sunday mock test series mimicking board & competitive exams',
      'Specialized doubt solving desks active after 8:00 PM'
    ],
    schedule: 'Monday to Saturday: 4:30 PM – 8:00 PM | Sunday: Weekly Mock Tests'
  },
  commerce: {
    title: '11th & 12th Commerce (GSEB / CBSE)',
    subtitle: 'Structured Board Preparation for Professional Careers',
    badge: 'BOARD SPECIALIST BATCH',
    subjects: [
      { name: 'Accounts', topics: 'Partnership Accounts, Company Accounts, Financial Statements, Ratios' },
      { name: 'Statistics', topics: 'Probability, Index Numbers, Linear Regression, Correlation' },
      { name: 'Economics', topics: 'Microeconomics, Macroeconomics, Money & Banking, Indian Economy' },
      { name: 'Organization of Commerce', topics: 'Management Principles, Marketing, Planning & Organizing' }
    ],
    features: [
      'Taught by qualified M.Com, M.Phil, and B.Ed professional educators',
      'Comprehensive focus on textbook exercises and GSEB board patterns',
      'Regular board-specimen paper writing sessions under exam conditions',
      'Detailed study notes and daily practice worksheets',
      'Personal attention and doubt solving classes'
    ],
    schedule: 'Monday to Saturday: 5:00 PM – 7:30 PM | Sunday: Assessment'
  },
  foundation: {
    title: 'Foundation Class 5th to 10th (CBSE / GSEB)',
    subtitle: 'Building Strong Concept-First Fundamentals',
    badge: 'FOUNDATION BATCH',
    subjects: [
      { name: 'Mathematics', topics: 'Arithmetic, Basic Algebra, Geometry, Mensuration' },
      { name: 'Science', topics: 'Physics basics, Chemistry basics, Biology basics' },
      { name: 'English Grammar', topics: 'Composition, Sentence structure, Vocabulary, Verb tenses' }
    ],
    features: [
      'Strong concept building to prepare for future Science/Commerce streams',
      'Interactive visual learning to build real curiosity in students',
      'Mental maths and basic analytical training exercises',
      'Regular feedback reports sent directly to parents via our study app',
      'Warm and disciplined learning environment'
    ],
    schedule: 'Monday to Friday: 5:00 PM – 7:00 PM'
  }
};

const faqs = [
  { q: 'What is the batch strength at Shree Sai Institute?', a: 'To ensure personalized mentoring, we limit our batch strength to 35-40 students per division. This allows directors to keep a personal tab on every student\'s conceptual index.' },
  { q: 'Do you provide study materials and textbooks?', a: 'Yes, we provide custom-printed study books, reference modules, and Daily Practice Questions (DPQ) folders for all subjects in Science, Commerce, and Foundation streams.' },
  { q: 'How do parents track their children\'s daily progress?', a: 'We have a dedicated personal study app where parents receive daily reports containing attendance sheets, marks secured in Sunday tests, and homework submission status.' },
  { q: 'What are the timings for the Doubt Solving Desks?', a: 'Our subject mentors are available at the institute after 8:00 PM daily. Students can drop in to resolve doubts individually with their teachers.' },
  { q: 'Is there a demo class available for new enrollments?', a: 'Yes, we offer free trial sessions for three days across all streams. Parents and students can attend the lectures, evaluate the study atmosphere, and then finalize their admissions.' }
];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('science');
  const [openFaq, setOpenFaq] = useState(null);

  const selected = courses[activeTab];

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden hero-background-pattern border-b border-[#263266]">
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-space text-xs tracking-[0.2em] text-accent-orange uppercase font-bold block mb-4"
          >
            ACADEMIC PROGRAMS
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-space font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
          >
            Courses Designed <span className="text-accent-orange">to Succeed</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-space text-text-secondary text-base sm:text-lg max-w-[600px] mx-auto leading-relaxed"
          >
            Select your academic stream below to view detailed subjects, board structures, schedules, and learning materials.
          </motion.p>
        </div>
      </section>

      {/* 2. INTERACTIVE STREAM SELECTOR */}
      <section className="bg-bg-light py-20 px-6 border-b border-[#263266]">
        <div className="max-w-[1280px] mx-auto">
          
          {/* Tabs switch */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: 'science', label: '11th & 12th Science' },
              { id: 'commerce', label: '11th & 12th Commerce' },
              { id: 'foundation', label: 'Class 5th - 10th Foundation' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-space font-medium text-xs md:text-sm tracking-wider uppercase py-3 px-6 rounded-lg transition-colors border duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#f97316] border-[#f97316] text-[#ffffff] font-semibold shadow-md shadow-accent-orange/15'
                    : 'bg-bg-light-card border-border-light text-[#475569] hover:border-[#cbd5e1] hover:text-[#131B3A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Details Card Panel */}
          <div className="max-w-[980px] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-bg-light-card border border-border-light border-l-[4px] border-l-accent-orange rounded-2xl p-6 md:p-10 text-left shadow-lg"
              >
                
                <span className="font-space font-bold text-[11px] text-accent-orange bg-[#f97316]/10 px-3 py-1.5 rounded border border-accent-orange/20 tracking-wider uppercase block mb-4 w-fit">
                  {selected.badge}
                </span>

                <h2 className="font-space font-bold text-[#131B3A] text-2xl md:text-3xl mb-2">
                  {selected.title}
                </h2>
                <p className="font-space text-text-on-light-secondary text-sm md:text-base mb-8">
                  {selected.subtitle}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  
                  {/* Left block - Subjects */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <h3 className="font-space font-bold text-[#131B3A] text-lg mb-2">
                      Subjects & Chapters
                    </h3>
                    <div className="flex flex-col gap-4">
                      {selected.subjects.map((sub) => (
                        <div key={sub.name} className="border-b border-[#cbd5e1]/45 pb-3 last:border-b-0">
                          <h4 className="font-space font-bold text-sm text-[#131B3A] flex items-center gap-2">
                            <BookOpen size={14} className="text-accent-orange" />
                            {sub.name}
                          </h4>
                          <p className="font-space text-text-on-light-muted text-xs leading-relaxed mt-1">
                            {sub.topics}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right block - Features & timings */}
                  <div className="lg:col-span-5 bg-white border border-border-light rounded-xl p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="font-space font-bold text-[#131B3A] text-base mb-4">
                        Batch Highlights
                      </h3>
                      <div className="flex flex-col gap-3">
                        {selected.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-accent-orange shrink-0 mt-0.5" />
                            <span className="font-space text-xs text-text-on-light-secondary leading-relaxed">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border-t border-[#cbd5e1]/40 pt-4">
                      <span className="font-space text-[10px] text-text-on-light-muted uppercase tracking-wider block mb-1">
                        Batch Timings
                      </span>
                      <span className="font-space text-xs font-semibold text-[#131B3A]">
                        {selected.schedule}
                      </span>
                    </div>

                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. ROADMAP (STUDENT JOURNEY) */}
      <section className="bg-bg-primary py-20 px-6 border-b border-[#263266]">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-space text-xs tracking-wider text-accent-orange uppercase font-bold block mb-3">
            ACADEMIC roadmap
          </span>
          <h2 className="font-space font-bold text-text-primary text-3xl sm:text-4xl leading-tight mb-16">
            The Roadmap of a Ranker
          </h2>

          <div className="relative border-l border-border-subtle/50 ml-4 md:ml-6 text-left">
            {[
              { phase: 'Phase 1', title: 'Conceptual Lectures', desc: 'Starting from fundamental syllabus topics, establishing structural and numerical understanding.' },
              { phase: 'Phase 2', title: 'Worksheets & DPQs', desc: 'Daily worksheets are assigned to practice problem-solving strategies, ensuring board specs are met.' },
              { phase: 'Phase 3', title: 'Sunday Mock Tests', desc: 'Weekly tests to map grading progress under absolute exam scenarios, building time management skills.' },
              { phase: 'Phase 4', title: 'Revisions & Specimen Papers', desc: 'Final months focus on writing Specimen Board Papers, mock board exams, and full-length entrance mocks.' }
            ].map((step, i) => (
              <div key={i} className="mb-10 ml-6 md:ml-8 relative">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#131B3A] border-2 border-accent-orange flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                </div>
                <span className="font-space font-bold text-accent-orange text-xs tracking-wider uppercase block mb-1">
                  {step.phase}
                </span>
                <h3 className="font-space font-semibold text-text-primary text-lg mb-1">
                  {step.title}
                </h3>
                <p className="font-space text-text-secondary text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="bg-bg-light py-20 px-6">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-space text-xs tracking-wider text-accent-orange uppercase font-bold block mb-3">
              COMMON QUESTIONS
            </span>
            <h2 className="font-space font-bold text-[#131B3A] text-3xl sm:text-4xl leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-space text-text-on-light-secondary text-sm max-w-[440px] mx-auto">
              Got questions? We have answers. Find general details about admissions, batches, and doubts here.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i} 
                  className="bg-bg-light-card border border-border-light rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-space font-semibold text-sm sm:text-base text-[#131B3A] leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-text-on-light-muted shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-accent-orange' : ''}`} 
                    />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-[#cbd5e1]/20">
                          <p className="font-space text-xs sm:text-sm text-text-on-light-secondary leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
