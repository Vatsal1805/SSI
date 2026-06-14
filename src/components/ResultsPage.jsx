import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, CheckCircle, ShieldCheck, ChevronRight, Check } from 'lucide-react';
import Avatar from './Avatar';

const boardToppers = [
  { name: 'Dhruv Modi', exam: '12th Science 2026', score: '99.41 PR', label: 'PERCENTILE', rank: '1st MADHAV', image: 'Dhruv.png', quote: 'The conceptual clarity built by Shailendra Sir made physics my strongest subject. The continuous test sheets helped me overcome exam pressure.' },
  { name: 'Yuvraj Shekhawat', exam: '12th Science 2026', score: '99.21 PR', label: 'PERCENTILE', rank: '1st SHARDABA', image: 'Yuvraj.png', quote: 'Regular mock exams scheduled on Sundays gave me a real feel of GSEB board patterns. Faculty support was outstanding.' }
];

const entranceToppers = [
  { name: 'Ayush Patel', exam: 'JEE Advanced 2026', score: 'AIR 3371', label: 'ALL INDIA RANK', rank: 'JEE ADVANCED QUALIFIED', image: 'Ayush1.png', quote: 'The intensive JEE worksheets and late-evening doubt solving desks allowed me to solve complex math and physics questions easily.' },
  { name: 'Jiya Panchal', exam: 'NEET UG 2026', score: '675 / 720', label: 'NEET SCORE', rank: 'NEET TOPPER', image: 'Jiya.png', quote: 'Structured biology prep, conceptual worksheets, and systematic feedback sessions with teachers were key to my NEET score.' }
];

const resultsDatabase = [
  { name: 'Dhruv Modi', school: 'Madhav School', stream: '12th Science', score: '99.41 PR', type: 'board' },
  { name: 'Yuvraj Shekhawat', school: 'Shardaba School', stream: '12th Science', score: '99.21 PR', type: 'board' },
  { name: 'Priya Patel', school: 'Karnavati School', stream: '12th Science', score: '98.85 PR', type: 'board' },
  { name: 'Rohan Sharma', school: 'New RTO School', stream: '12th Science', score: '98.50 PR', type: 'board' },
  { name: 'Ayush Patel', school: 'Madhav School', stream: 'JEE Advanced', score: 'AIR 3371', type: 'entrance' },
  { name: 'Jiya Panchal', school: 'Shardaba School', stream: 'NEET UG', score: '675 / 720', type: 'entrance' },
  { name: 'Nikhil Shah', school: 'Karnavati School', stream: 'JEE Main', score: '98.15 Percentile', type: 'entrance' },
  { name: 'Kavita Dave', school: 'New RTO School', stream: 'NEET UG', score: '612 / 720', type: 'entrance' },
  { name: 'Meera Vyas', school: 'Madhav School', stream: '12th Commerce', score: '99.10 PR', type: 'board' },
  { name: 'Harsh Vardhan', school: 'Shardaba School', stream: '12th Commerce', score: '98.60 PR', type: 'board' }
];

const reviews = [
  { parent: 'Mr. Modi (Father of Dhruv Modi)', quote: 'The personalized feedback and reports we received via the SSI app kept us updated on Dhruv\'s test records weekly. Shailendra Sir\'s personal attention is unmatched.', result: 'Son scored 99.41 PR' },
  { parent: 'Mrs. Shekhawat (Mother of Yuvraj Shekhawat)', quote: 'Yuvraj joined for boards and JEE. The teachers are highly professional and conceptually strong. Their Sunday mock test model prepared him perfectly.', result: 'Son scored 99.21 PR' },
  { parent: 'Mr. Patel (Father of Ayush Patel)', quote: 'Doubt clearing sessions held after 8:00 PM helped Ayush solve advanced JEE level physics and maths queries. We highly recommend this institute.', result: 'Son qualified JEE Advanced' }
];

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState('board');

  const databaseFiltered = resultsDatabase.filter(r => r.type === activeTab);

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
            HALL OF FAME
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-space font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
          >
            Our Proud <span className="text-accent-orange">Academic Achievers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-space text-text-secondary text-base sm:text-lg max-w-[620px] mx-auto leading-relaxed"
          >
            We celebrate the dedication, conceptual focus, and standard records of students who proved their academic index in boards and entrance exams.
          </motion.p>
        </div>
      </section>

      {/* 2. TOPPER SPOTLIGHT GRID */}
      <section className="bg-bg-light py-20 px-6 border-b border-[#263266]">
        <div className="max-w-[1280px] mx-auto">
          
          <div className="text-center mb-16">
            <span className="font-space text-xs tracking-wider text-accent-orange uppercase font-bold block mb-3">
              SPOTLIGHT
            </span>
            <h2 className="font-space font-bold text-[#131B3A] text-3xl sm:text-4xl leading-tight mb-4">
              Topper Stories & Journeys
            </h2>
            <p className="font-space text-text-on-light-secondary text-sm max-w-[480px] mx-auto">
              Read how conceptual clarity and regular doubt solving helped our students reach top marks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
            {boardToppers.concat(entranceToppers).map((topper, index) => (
              <motion.div
                key={topper.name}
                whileHover={{ y: -6 }}
                className="bg-bg-light-card border border-border-light rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start text-left hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-accent-orange/10 flex items-center justify-center shrink-0 overflow-hidden relative border border-border-light shadow-sm">
                  <Avatar
                    src={topper.image}
                    name={topper.name}
                    sizeClass="w-full h-full object-cover"
                    fallbackBg="bg-accent-orange"
                    fallbackText="text-bg-primary text-3xl font-bold font-space"
                  />
                  <span className="absolute bottom-1 right-1 bg-accent-orange text-white rounded-full p-0.5">
                    <Award size={10} />
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="font-space font-bold text-[9px] tracking-wider text-accent-orange uppercase block mb-1">
                    {topper.rank}
                  </span>
                  <h3 className="font-space font-bold text-[#131B3A] text-lg mb-1">
                    {topper.name}
                  </h3>
                  <span className="font-space text-text-on-light-muted text-xs block mb-4">
                    {topper.exam} · <strong className="text-accent-orange">{topper.score}</strong>
                  </span>
                  
                  <div className="relative border-l-2 border-accent-orange/30 pl-4">
                    <p className="font-space text-text-on-light-secondary text-xs sm:text-sm italic leading-relaxed">
                      "{topper.quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. VERIFIED RESULTS DATABASE */}
      <section className="bg-bg-primary py-20 px-6 border-b border-[#263266]">
        <div className="max-w-[960px] mx-auto">
          
          <div className="text-center mb-12">
            <span className="font-space text-xs tracking-wider text-accent-orange uppercase font-bold block mb-3">
              DATABASE
            </span>
            <h2 className="font-space font-bold text-text-primary text-3xl sm:text-4xl leading-tight mb-6">
              Verified Achievement Index
            </h2>
            
            {/* Filter buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTab('board')}
                className={`font-space font-medium text-xs md:text-sm tracking-wider uppercase py-2.5 px-6 rounded-lg transition-colors border duration-200 ${
                  activeTab === 'board'
                    ? 'bg-[#f97316] border-[#f97316] text-[#ffffff] font-semibold shadow-md shadow-accent-orange/15'
                    : 'bg-bg-card border-border-subtle text-text-secondary hover:border-accent-orange hover:text-text-primary'
                }`}
              >
                Board Achievers 2026
              </button>
              <button
                onClick={() => setActiveTab('entrance')}
                className={`font-space font-medium text-xs md:text-sm tracking-wider uppercase py-2.5 px-6 rounded-lg transition-colors border duration-200 ${
                  activeTab === 'entrance'
                    ? 'bg-[#f97316] border-[#f97316] text-[#ffffff] font-semibold shadow-md shadow-accent-orange/15'
                    : 'bg-bg-card border-border-subtle text-text-secondary hover:border-accent-orange hover:text-text-primary'
                }`}
              >
                JEE & NEET Selections
              </button>
            </div>
          </div>

          {/* Database Table */}
          <div className="bg-bg-card border border-border-subtle rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-space border-collapse">
                <thead>
                  <tr className="bg-bg-primary/60 border-b border-border-subtle/85 text-xs text-text-secondary font-semibold uppercase tracking-wider">
                    <th className="py-4 px-6">Student Name</th>
                    <th className="py-4 px-6">School / Center</th>
                    <th className="py-4 px-6">Stream</th>
                    <th className="py-4 px-6 text-right">Score / Rank</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-border-subtle/40">
                  {databaseFiltered.map((row, idx) => (
                    <tr key={idx} className="hover:bg-bg-primary/20 transition-colors">
                      <td className="py-4 px-6 font-semibold text-text-primary">{row.name}</td>
                      <td className="py-4 px-6 text-text-secondary">{row.school}</td>
                      <td className="py-4 px-6 text-text-muted">{row.stream}</td>
                      <td className="py-4 px-6 text-right text-accent-orange font-bold">{row.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-5 h-5 rounded-full bg-accent-orange/15 border border-accent-orange/30 flex items-center justify-center">
              <Check size={12} className="text-accent-orange" />
            </div>
            <span className="font-space text-xs text-text-muted">
              Above credentials are fully mapped and verified with official admit cards.
            </span>
          </div>

        </div>
      </section>

      {/* 4. PARENT REVIEWS */}
      <section className="bg-bg-light py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          
          <div className="text-center mb-16">
            <span className="font-space text-xs tracking-wider text-accent-orange uppercase font-bold block mb-3">
              PARENT REASSURANCE
            </span>
            <h2 className="font-space font-bold text-[#131B3A] text-3xl sm:text-4xl leading-tight mb-4">
              What Parents Say About Us
            </h2>
            <p className="font-space text-text-on-light-secondary text-sm max-w-[480px] mx-auto">
              Real opinions from parents on the structural support, doubt desking, and reports updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, i) => (
              <div 
                key={i} 
                className="bg-bg-light-card border border-border-light rounded-xl p-6 text-left flex flex-col justify-between"
              >
                <p className="font-space text-text-on-light-secondary text-sm italic leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
                <div>
                  <h4 className="font-space font-bold text-sm text-[#131B3A]">
                    {rev.parent}
                  </h4>
                  <span className="font-space text-[11px] text-accent-orange block mt-1">
                    {rev.result}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
