import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Award, CheckCircle2, ChevronDown, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

const courses = {
  foundation: {
    title: 'Class 5th to 10th Foundation (CBSE / GSEB)',
    subtitle: 'Building Strong Concept-First Fundamentals for School and Future Streams',
    badge: 'FOUNDATION BATCH',
    subjects: [
      { name: 'Mathematics', topics: 'Arithmetic, Basic Algebra, Geometry, Mensuration, Logical Puzzles' },
      { name: 'Science', topics: 'Physics basics, Chemistry fundamentals, Biology & Life sciences' },
      { name: 'English Grammar', topics: 'Composition, Sentence structures, Vocabulary building, Reading drills' },
      { name: 'Social Studies', topics: 'History timeline, Civics, Geography fundamentals, General Knowledge' }
    ],
    features: [
      'Concept-building lectures designed to prep for future Science/Commerce choices',
      'Interactive visual learning to build real curiosity in young minds',
      'Mental maths sessions and analytical thinking drills',
      'Regular performance reports and progress logs sent directly to parents',
      'Disciplined, safe, and motivating classroom environment'
    ],
    schedule: 'Monday to Friday: 5:00 PM – 7:00 PM'
  },
  science: {
    title: '11th & 12th Science (GSEB / CBSE)',
    subtitle: 'Comprehensive Board Preparation with Deep Conceptual Mastery',
    badge: 'BOARD SPECIALIST BATCH',
    subjects: [
      { name: 'Physics', topics: 'Mechanics, Electrodynamics, Optics, Thermodynamics, Modern Physics' },
      { name: 'Chemistry', topics: 'Physical Chemistry, Inorganic Chemistry, Organic Reactions & Synthesis' },
      { name: 'Mathematics', topics: 'Calculus, Algebra, Coordinate Geometry, Trigonometry, Vectors' },
      { name: 'Biology', topics: 'Human Physiology, Plant Anatomy, Genetics, Ecology, Cell Biology' }
    ],
    features: [
      'Lectures led by senior subject specialists and post-graduate engineers',
      'Detailed board textbook exercise drills and daily classwork review',
      'Regular GSEB/CBSE specimen paper mock exams under strict conditions',
      'Chapter-wise reference modules and custom study binders',
      'Separate doubt solving counters active after 8:00 PM daily'
    ],
    schedule: 'Monday to Saturday: 4:30 PM – 8:00 PM | Sunday: Mock Tests'
  },
  commerce: {
    title: '11th & 12th Commerce (GSEB / CBSE)',
    subtitle: 'Structured Board Coaching for Professional and Accounting Careers',
    badge: 'BOARD SPECIALIST BATCH',
    subjects: [
      { name: 'Accountancy', topics: 'Partnership Accounts, Company Accounts, Financial Statements, Ratio Analysis' },
      { name: 'Statistics', topics: 'Probability distributions, Index Numbers, Linear Regression, Correlation' },
      { name: 'Economics', topics: 'Microeconomics, Macroeconomics, Money & Banking, Indian Economy' },
      { name: 'Organization of Commerce', topics: 'Management Principles, Marketing, Planning, Organising & Staffing' }
    ],
    features: [
      'Coaching from qualified M.Com, M.Phil, and B.Ed professional educators',
      'Specialized focus on board specimen writing and stateboard patterns',
      'Regular writing practices to build speed and accuracy under exam pressure',
      'Detailed summary notes for quick revision before exams',
      'Individual attention to clear personal conceptual doubts'
    ],
    schedule: 'Monday to Saturday: 5:00 PM – 7:30 PM'
  },
  jee: {
    title: 'JEE (Main & Advanced) Preparation',
    subtitle: 'Targeted Entrance Coaching for IITs, NITs, and National Engineering Colleges',
    badge: 'ENGINEERING ENTRANCE BATCH',
    subjects: [
      { name: 'JEE Physics', topics: 'Rotational Dynamics, Electrostatics, Magnetism, Modern Physics, Numerical Practice' },
      { name: 'JEE Chemistry', topics: 'Chemical Bonding, Organic Synthesis, Reaction Mechanisms, Physical Chemistry formulas' },
      { name: 'JEE Mathematics', topics: 'Calculus tricks, Vectors & 3D Geometry, Permutations, Complex Numbers' }
    ],
    features: [
      'Advanced problem-solving worksheets and Daily Practice Questions (DPQ)',
      'Regular computer-based online test mocks to mimic actual JEE interface',
      'In-depth error analysis and personal performance metrics',
      'Specialized mock test evaluation by IITian/M.Tech senior faculty',
      'Desks open for high-level numerical doubt clearance'
    ],
    schedule: 'Tuesday, Thursday, Saturday: 2:00 PM – 6:30 PM | Sunday: National Mocks'
  },
  neet: {
    title: 'NEET (UG) Preparation',
    subtitle: 'Focused Coaching for Top Medical Colleges, AIIMS, and State Admissions',
    badge: 'MEDICAL ENTRANCE BATCH',
    subjects: [
      { name: 'NEET Biology', topics: 'Human Physiology, Plant Diversity, Genetics, Biotechnology, Ecology (NCERT-focused)' },
      { name: 'NEET Physics', topics: 'Kinematics, Thermodynamics, Waves, Optics, Semiconductors, Speed-solving methods' },
      { name: 'NEET Chemistry', topics: 'Mole Concept, Equilibrium, Coordination Compounds, Named Organic Reactions' }
    ],
    features: [
      'Completely NCERT-centric core lectures ensuring high scores in Biology',
      'Speed-solving drills and elimination techniques for multiple-choice questions',
      'Weekly Sunday NEET-pattern mocks with detailed answer key review',
      'Personal rank index tracking and error analytics',
      'Experienced medical prep mentors available for doubt solving'
    ],
    schedule: 'Monday, Wednesday, Friday: 2:00 PM – 6:30 PM | Sunday: Mock Tests'
  },
  gujcet: {
    title: 'GUJCET Preparation Crash-Course',
    subtitle: 'Targeted Gujarat State Entrance Prep for Engineering & Pharmacy Seats',
    badge: 'STATE LEVEL ENTRANCE BATCH',
    subjects: [
      { name: 'GUJCET Physics', topics: 'GSEB textbook oriented formulas, quick numerical solving, speed drills' },
      { name: 'GUJCET Chemistry', topics: 'Inorganic reactions, Organic conversion shortcuts, Physical formulas' },
      { name: 'GUJCET Mathematics / Biology', topics: 'Fast calculation tricks and key objective textbook questions' }
    ],
    features: [
      'Highly optimized crash course modules customized for GUJCET state patterns',
      'Emphasis on past 10 years\' actual GUJCET papers and time-saving shortcuts',
      'Multiple full-length stateboard-aligned speed mock tests',
      'Strategic guidance to maximize state merit score index',
      'Course starts immediately following standard board examinations'
    ],
    schedule: 'Mon, Wed, Fri: 4:30 PM – 7:30 PM (Crash course options available)'
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
  const [activeTab, setActiveTab] = useState('foundation');
  const [openFaq, setOpenFaq] = useState(null);

  const roadmapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start 75%", "end 60%"]
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
          
          {/* Tabs switch - Horizontally scrollable on mobile, centered grid/flex on desktop */}
          <div 
            className="flex overflow-x-auto md:justify-center gap-3 pb-4 md:pb-0 mb-12 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-none flex-nowrap md:flex-wrap"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              { id: 'foundation', label: 'Class 5th-10th' },
              { id: 'science', label: '11th & 12th Science' },
              { id: 'commerce', label: '11th & 12th Commerce' },
              { id: 'jee', label: 'JEE (Main/Adv)' },
              { id: 'neet', label: 'NEET (UG)' },
              { id: 'gujcet', label: 'GUJCET' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-space font-medium text-xs md:text-sm tracking-wider uppercase py-3 px-6 rounded-lg transition-all duration-200 border shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-[#f97316] border-[#f97316] text-[#ffffff] font-semibold shadow-md shadow-accent-orange/15 scale-[1.02]'
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
                className="bg-bg-light-card border border-border-light border-l-[4px] border-l-accent-orange rounded-2xl p-4 sm:p-6 md:p-10 text-left shadow-lg"
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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
                  
                  {/* Left block - Subjects */}
                  <div className="lg:col-span-7 flex flex-col gap-5">
                    <h3 className="font-space font-bold text-[#131B3A] text-lg mb-2">
                      Subjects & Chapters
                    </h3>
                    <div className="flex flex-col gap-4">
                      {selected.subjects.map((sub) => (
                        <div key={sub.name} className="border-b border-[#cbd5e1]/45 pb-3.5 last:border-b-0 last:pb-0">
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
                  <div className="lg:col-span-5 bg-white/70 md:bg-white border border-border-light rounded-xl p-4 sm:p-6 flex flex-col justify-between shadow-sm">
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
        <div className="max-w-[1000px] mx-auto text-center">
          <span className="font-space text-xs tracking-wider text-accent-orange uppercase font-bold block mb-3">
            ACADEMIC roadmap
          </span>
          <h2 className="font-space font-bold text-text-primary text-3xl sm:text-4xl leading-tight mb-16">
            The Roadmap of a Ranker
          </h2>

          <div ref={roadmapRef} className="relative mt-20 text-left">
            {/* Background vertical line (dim grey-blue) */}
            <div className="absolute left-5 md:left-1/2 top-2 bottom-2 w-[2px] bg-border-subtle/40 transform md:-translate-x-1/2" />
            
            {/* Active animated progress line (glowing orange) */}
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-5 md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-orange to-accent-orange-hover transform md:-translate-x-1/2 shadow-[0_0_10px_rgba(249,115,22,0.6)]"
            />

            {[
              { phase: 'Phase 1', title: 'Conceptual Lectures', desc: 'Starting from fundamental syllabus topics, establishing structural and numerical understanding.' },
              { phase: 'Phase 2', title: 'Worksheets & DPQs', desc: 'Daily worksheets are assigned to practice problem-solving strategies, ensuring board specs are met.' },
              { phase: 'Phase 3', title: 'Sunday Mock Tests', desc: 'Weekly tests to map grading progress under absolute exam scenarios, building time management skills.' },
              { phase: 'Phase 4', title: 'Revisions & Specimen Papers', desc: 'Final months focus on writing Specimen Board Papers, mock board exams, and full-length entrance mocks.' }
            ].map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative flex flex-col md:flex-row items-stretch md:items-center justify-between mb-16 last:mb-0 w-full min-h-[120px]">
                  
                  {/* Left side card box (desktop only if even, on mobile hidden but flex order applies) */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'order-1 text-left md:text-right' : 'order-2 hidden md:block'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="pl-12 md:pl-0"
                      >
                        <div 
                          className="bg-bg-card border border-border-subtle/70 rounded-xl p-6 hover:border-accent-orange/40 transition-all duration-300 shadow-xl relative overflow-hidden group text-left md:text-right"
                          style={{ background: 'linear-gradient(135deg, #1d264f 0%, #131b3a 100%)' }}
                        >
                          <div className="absolute top-0 right-0 w-1 h-full bg-accent-orange transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                          <span className="font-space font-bold text-accent-orange text-[10px] md:text-xs tracking-widest uppercase block mb-1">
                            {step.phase}
                          </span>
                          <h3 className="font-space font-semibold text-text-primary text-base md:text-lg mb-2 group-hover:text-accent-orange transition-colors duration-200">
                            {step.title}
                          </h3>
                          <p className="font-space text-text-secondary text-xs md:text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Middle dot container positioned relative to the timeline line */}
                  <div className="absolute left-5 md:left-1/2 top-[28px] md:top-1/2 w-[16px] h-[16px] rounded-full bg-[#131B3A] border-2 border-accent-orange transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center shadow-[0_0_8px_rgba(249,115,22,0.4)]">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0.5 }}
                      whileInView={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="w-1.5 h-1.5 rounded-full bg-accent-orange shadow-[0_0_6px_rgba(249,115,22,0.8)]"
                    />
                  </div>

                  {/* Right side card box (desktop only if odd, visible on mobile for odd, and aligns cleanly) */}
                  <div className={`w-full md:w-[45%] ${!isEven ? 'order-1 md:order-2 text-left' : 'order-1 md:order-2 hidden md:block'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="pl-12 md:pl-0"
                      >
                        <div 
                          className="bg-bg-card border border-border-subtle/70 rounded-xl p-6 hover:border-accent-orange/40 transition-all duration-300 shadow-xl relative overflow-hidden group text-left"
                          style={{ background: 'linear-gradient(135deg, #1d264f 0%, #131b3a 100%)' }}
                        >
                          <div className="absolute top-0 left-0 w-1 h-full bg-accent-orange transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                          <span className="font-space font-bold text-accent-orange text-[10px] md:text-xs tracking-widest uppercase block mb-1">
                            {step.phase}
                          </span>
                          <h3 className="font-space font-semibold text-text-primary text-base md:text-lg mb-2 group-hover:text-accent-orange transition-colors duration-200">
                            {step.title}
                          </h3>
                          <p className="font-space text-text-secondary text-xs md:text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
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
