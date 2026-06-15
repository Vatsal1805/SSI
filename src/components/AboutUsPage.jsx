import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Star, Award, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import Avatar from './Avatar';
import Faculty from './Faculty';

const directors = [
  {
    name: 'S.J. Maurya',
    subject: 'Physics Expert',
    experience: '16+ Years Teaching Experience',
    qualification: 'M.Tech.',
    image: 'sjmaurya.png',
    bio: 'Dedicated to simplifying complex physics concepts from first principles. Passionate about helping students develop intuitive analytical skills for entrance tests.'
  },
  {
    name: 'Manish Sir (M.V.R.)',
    subject: 'Chemistry Mentor',
    experience: '16+ Years Teaching Experience',
    qualification: 'M.Tech.',
    image: 'mvr.png',
    bio: 'Expert in Organic and Physical Chemistry. Specializes in building systematic learning patterns that make equations and reactions easy to recall and apply.'
  },
  {
    name: 'Krunal Somani',
    subject: 'Mathematics Lead',
    experience: '22+ Years Teaching Experience',
    qualification: 'M.Sc., B.Ed.',
    image: 'ks.png',
    bio: 'Veteran mathematics educator. Believes in teaching mathematical logic and problem-solving strategies that help students crack competitive JEE entrance papers.'
  }
];

const milestones = [
  { year: '2010', title: 'Institute Founded', desc: 'Started with a single batch of 12 students in Vastral, focused on GSEB boards.' },
  { year: '2015', title: 'Expansion to Entrance Prep', desc: 'Introduced targeted coaching modules for JEE and NEET with premium study materials.' },
  { year: '2019', title: 'Karnavati Mega Mall Campus', desc: 'Launched a state-of-the-art center with smart boards and air-conditioned classrooms.' },
  { year: '2024', title: 'Launch of Personal Study App', desc: 'Integrated digital analytics and daily performance reports for parents.' },
  { year: '2026', title: '15+ Years Legacy', desc: 'Celebrating a consistent track record of boarding toppers and entrance selections.' }
];

export default function AboutUsPage() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"]
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden hero-background-pattern border-b border-[#263266]">
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-space text-xs tracking-[0.2em] text-accent-orange uppercase font-bold block mb-4"
          >
            OUR HERITAGE & VISION
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-space font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
          >
            A Legacy of <span className="text-accent-orange">Academic Leadership</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-space text-text-secondary text-base sm:text-lg max-w-[640px] mx-auto leading-relaxed"
          >
            Since 2010, Shree Sai Institute has been the cornerstone of high-standard education in Vastral, Ahmedabad—shaping the rankers of tomorrow.
          </motion.p>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="bg-bg-light py-20 px-6 border-b border-[#263266]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 text-left">
            <span className="font-space text-xs tracking-wider text-accent-orange uppercase font-bold block mb-3">
              ESTABLISHED IN 2010
            </span>
            <h2 className="font-space font-bold text-[#131B3A] text-3xl sm:text-4xl leading-tight mb-6">
              Our Journey Toward Conceptual Excellence
            </h2>
            <p className="font-space text-text-on-light-secondary text-base leading-relaxed mb-6">
              Shree Sai Institute was founded on a simple principle: education is not about memorization, it is about understanding. In a competitive academic landscape, we noticed a major conceptual gap in school-level tuitions. We designed our classrooms to bring first-principles teaching to students in Vastral.
            </p>
            <p className="font-space text-text-on-light-secondary text-base leading-relaxed mb-8">
              Over the last 15 years, our senior faculty team has created a structured ecosystem that guides students through their board examinations and competitive medical/engineering entrance tests (JEE, NEET, GUJCET) with absolute confidence.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-[#cbd5e1]/40 pt-6">
              <div>
                <span className="font-space font-bold text-3xl text-[#131B3A]">15+</span>
                <span className="font-space text-xs text-text-on-light-muted block mt-1">Years Legacy</span>
              </div>
              <div>
                <span className="font-space font-bold text-3xl text-[#131B3A]">5000+</span>
                <span className="font-space text-xs text-text-on-light-muted block mt-1">Alumni Trained</span>
              </div>
              <div>
                <span className="font-space font-bold text-3xl text-[#131B3A]">95%</span>
                <span className="font-space text-xs text-text-on-light-muted block mt-1">Success Ratio</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-[480px] h-[340px] sm:h-[400px]">
              <div className="absolute top-[10%] left-0 w-[45%] h-[65%] bg-accent-orange rounded-xl -z-10 opacity-80 shadow-lg" />
              <div className="absolute top-0 left-[8%] w-[84%] h-[84%] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" 
                  alt="Classroom Instruction" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FOUNDERS & MENTORS */}
      <section className="bg-bg-primary py-20 px-6 border-b border-[#263266]">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="font-space text-xs tracking-wider text-accent-orange uppercase font-bold block mb-3">
            LEADERSHIP TEAM
          </span>
          <h2 className="font-space font-bold text-text-primary text-3xl sm:text-4xl leading-tight mb-6">
            Meet Our Senior Directors
          </h2>
          <p className="font-space text-text-secondary text-sm sm:text-base max-w-[540px] mx-auto mb-16">
            The mentors driving the intellectual rigor, course structures, and daily performance metrics of Shree Sai Institute.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directors.map((director, i) => (
              <motion.div
                key={director.name}
                whileHover={{ y: -8 }}
                className="bg-bg-card border border-border-subtle hover:border-accent-orange rounded-2xl p-7 md:p-8 text-left transition-all duration-300 shadow-xl"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                  <Avatar
                    src={director.image}
                    name={director.name}
                    sizeClass="w-[84px] h-[84px] md:w-[96px] md:h-[96px]"
                    textClass="text-2xl font-bold"
                    borderClass="border-3 border-accent-orange/50 group-hover:border-accent-orange transition-all duration-300"
                    fallbackBg="bg-bg-primary"
                    fallbackText="text-accent-orange"
                    className="shadow-md"
                  />
                  <div>
                    <h3 className="font-space font-bold text-text-primary text-xl leading-tight">
                      {director.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <span className="font-space text-xs text-accent-orange font-semibold uppercase tracking-wider">
                        {director.subject}
                      </span>
                      <span className="text-text-muted text-xs">•</span>
                      <span className="font-space text-[11px] text-text-secondary bg-[#1D264F] border border-border-subtle rounded px-2 py-0.5 leading-none font-medium">
                        {director.qualification}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border-subtle/50 pt-5">
                  <span className="font-space text-xs text-accent-orange-soft block mb-3 font-semibold tracking-wide uppercase">
                    {director.experience}
                  </span>
                  <p className="font-space text-text-secondary text-sm leading-relaxed">
                    {director.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3b. FULL FACULTY TEAM */}
      <Faculty />

      {/* 4. OUR PEDAGOGY (BENTO STYLE) */}
      <section className="bg-bg-light py-20 px-6 border-b border-[#263266]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-space text-xs tracking-wider text-accent-orange uppercase font-bold block mb-3">
              STUDENT ECOSYSTEM
            </span>
            <h2 className="font-space font-bold text-[#131B3A] text-3xl sm:text-4xl leading-tight mb-4">
              Our 4-Pillar Academic Pedagogy
            </h2>
            <p className="font-space text-text-on-light-secondary text-sm sm:text-base max-w-[500px] mx-auto">
              How we construct conceptual milestones and monitor student improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Pillar 1 */}
            <div className="md:col-span-8 bg-bg-light-card border border-border-light rounded-2xl p-6 md:p-8 text-left flex flex-col justify-between">
              <div>
                <div className="flex flex-row items-center gap-3 mb-6 md:flex-col md:items-start md:gap-0">
                  <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 md:mb-6">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="font-space font-bold text-[#131B3A] text-lg sm:text-xl">
                    Conceptual Board & Entrance Lectures
                  </h3>
                </div>
                <p className="font-space text-text-on-light-secondary text-sm leading-relaxed max-w-[560px]">
                  All lectures are conducted by experienced, post-graduate engineers and field mentors. We explain the "why" before the "how," establishing a powerful foundation in Physics, Chemistry, Maths, and Biology.
                </p>
              </div>
              <div className="flex gap-4 mt-8 flex-wrap">
                <span className="font-space text-xs text-[#131B3A] bg-white border border-border-light px-3 py-1.5 rounded-md">Smart Classrooms</span>
                <span className="font-space text-xs text-[#131B3A] bg-white border border-border-light px-3 py-1.5 rounded-md">Detailed Diagrams</span>
                <span className="font-space text-xs text-[#131B3A] bg-white border border-border-light px-3 py-1.5 rounded-md">Reference Textbooks</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="md:col-span-4 bg-bg-light-card border border-border-light rounded-2xl p-6 md:p-8 text-left flex flex-col justify-between">
              <div>
                <div className="flex flex-row items-center gap-3 mb-6 md:flex-col md:items-start md:gap-0">
                  <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 md:mb-6">
                    <Clock size={20} />
                  </div>
                  <h3 className="font-space font-bold text-[#131B3A] text-lg sm:text-xl">
                    Daily Practice & Books
                  </h3>
                </div>
                <p className="font-space text-text-on-light-secondary text-sm leading-relaxed">
                  We supply custom-printed books, reference material, and Daily Practice Questions (DPQs) customized for 9th to 12th standard GSEB/CBSE boards.
                </p>
              </div>
              <span className="font-space text-xs text-accent-orange font-semibold block mt-8">
                Available for Boards & Competitive Prep →
              </span>
            </div>

            {/* Pillar 3 */}
            <div className="md:col-span-4 bg-bg-light-card border border-border-light rounded-2xl p-6 md:p-8 text-left flex flex-col justify-between">
              <div>
                <div className="flex flex-row items-center gap-3 mb-6 md:flex-col md:items-start md:gap-0">
                  <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 md:mb-6">
                    <Award size={20} />
                  </div>
                  <h3 className="font-space font-bold text-[#131B3A] text-lg sm:text-xl">
                     Weekly Assessment Tests
                  </h3>
                </div>
                <p className="font-space text-text-on-light-secondary text-sm leading-relaxed">
                  Every Sunday features standard testing modules. Results are mapped digitally to track standard errors and weaknesses.
                </p>
              </div>
              <span className="font-space text-xs text-text-on-light-muted block mt-8">
                Reports automatically compiled
              </span>
            </div>

            {/* Pillar 4 */}
            <div className="md:col-span-8 bg-bg-light-card border border-border-light rounded-2xl p-6 md:p-8 text-left flex flex-col justify-between">
              <div>
                <div className="flex flex-row items-center gap-3 mb-6 md:flex-col md:items-start md:gap-0">
                  <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 md:mb-6">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="font-space font-bold text-[#131B3A] text-lg sm:text-xl">
                     Evening Doubt Solving Desks & Study App
                  </h3>
                </div>
                <p className="font-space text-text-on-light-secondary text-sm leading-relaxed max-w-[560px]">
                  Specialized doubt desks are active after 8:00 PM for individual student assistance. Additionally, our mobile app tracks daily performance reports, attendance, and assignments for parents' reassurance.
                </p>
              </div>
              <div className="flex gap-4 mt-8 flex-wrap">
                <span className="font-space text-xs text-[#131B3A] bg-white border border-border-light px-3 py-1.5 rounded-md">8:00 PM onwards desk</span>
                <span className="font-space text-xs text-[#131B3A] bg-white border border-border-light px-3 py-1.5 rounded-md">Parent Reports App</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HISTORY TIMELINE */}
      <section className="bg-bg-primary py-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-space text-xs tracking-wider text-accent-orange uppercase font-bold block mb-3">
              TIMELINE
            </span>
            <h2 className="font-space font-bold text-text-primary text-3xl sm:text-4xl leading-tight mb-4">
              A History of Growth
            </h2>
            <p className="font-space text-text-secondary text-sm max-w-[480px] mx-auto">
              How Shree Sai Institute became Vastral's leading name in school tuitions and competitive preparation.
            </p>
          </div>

          <div ref={timelineRef} className="relative mt-20 text-left">
            {/* Background vertical line (dim grey-blue) */}
            <div className="absolute left-5 md:left-1/2 top-2 bottom-2 w-[2px] bg-border-subtle/40 transform md:-translate-x-1/2" />
            
            {/* Active animated progress line (glowing orange) */}
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-5 md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-orange to-accent-orange-hover transform md:-translate-x-1/2 shadow-[0_0_10px_rgba(249,115,22,0.6)]"
            />

            {milestones.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative flex flex-col md:flex-row items-stretch md:items-center justify-between mb-12 last:mb-0 w-full min-h-[120px]">
                  
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
                          <span className="font-space font-bold text-accent-orange text-xs tracking-wider uppercase block mb-1">
                            {item.year}
                          </span>
                          <h3 className="font-space font-semibold text-text-primary text-base md:text-lg mb-2 group-hover:text-accent-orange transition-colors duration-200">
                            {item.title}
                          </h3>
                          <p className="font-space text-text-secondary text-xs md:text-sm leading-relaxed">
                            {item.desc}
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
                          <span className="font-space font-bold text-accent-orange text-xs tracking-wider uppercase block mb-1">
                            {item.year}
                          </span>
                          <h3 className="font-space font-semibold text-text-primary text-base md:text-lg mb-2 group-hover:text-accent-orange transition-colors duration-200">
                            {item.title}
                          </h3>
                          <p className="font-space text-text-secondary text-xs md:text-sm leading-relaxed">
                            {item.desc}
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

    </div>
  );
}
