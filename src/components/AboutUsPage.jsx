import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Award, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import Avatar from './Avatar';

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
                whileHover={{ y: -6 }}
                className="bg-bg-card border border-border-subtle rounded-2xl p-6 md:p-8 text-left hover:border-accent-orange transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Avatar
                    src={director.image}
                    name={director.name}
                    sizeClass="w-16 h-16"
                    borderClass="border-2 border-accent-orange/40"
                    fallbackBg="bg-bg-primary"
                    fallbackText="text-accent-orange text-lg"
                  />
                  <div>
                    <h3 className="font-space font-bold text-text-primary text-lg leading-tight">
                      {director.name}
                    </h3>
                    <span className="font-space text-xs text-accent-orange block mt-1">
                      {director.subject}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border-subtle/50 pt-4 mt-2">
                  <span className="font-space text-xs text-text-muted block mb-3 font-semibold">
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
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-6">
                  <BookOpen size={20} />
                </div>
                <h3 className="font-space font-bold text-[#131B3A] text-xl mb-3">
                  01. Conceptual Board & Entrance Lectures
                </h3>
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
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-6">
                  <Clock size={20} />
                </div>
                <h3 className="font-space font-bold text-[#131B3A] text-xl mb-3">
                  02. Daily Practice & Books
                </h3>
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
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-6">
                  <Award size={20} />
                </div>
                <h3 className="font-space font-bold text-[#131B3A] text-xl mb-3">
                  03. Weekly Assessment Tests
                </h3>
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
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-6">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-space font-bold text-[#131B3A] text-xl mb-3">
                  04. Evening Doubt Solving Desks & Study App
                </h3>
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
        <div className="max-w-[800px] mx-auto">
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

          <div className="relative border-l border-border-subtle/50 ml-4 md:ml-6">
            {milestones.map((item, i) => (
              <div key={i} className="mb-10 ml-6 md:ml-8 relative">
                {/* Timeline circle */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#131B3A] border-2 border-accent-orange flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                </div>
                
                {/* Milestone year */}
                <span className="font-space font-bold text-accent-orange text-sm tracking-wider uppercase block mb-1">
                  {item.year}
                </span>
                
                {/* Milestone content */}
                <h3 className="font-space font-semibold text-text-primary text-lg mb-2">
                  {item.title}
                </h3>
                <p className="font-space text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
