import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Avatar from './Avatar';

const facultyData = [
  { name: 'S.J. Maurya', subject: 'Physics', experience: '16+ Years Experience', qualification: 'M.Tech.', image: 'sjmaurya.png' },
  { name: 'Manish Sir (M.V.R.)', subject: 'Chemistry', experience: '16+ Years Experience', qualification: 'M.Tech.', image: 'mvr.png' },
  { name: 'Krunal Somani', subject: 'Mathematics', experience: '22+ Years Experience', qualification: 'M.Sc., B.Ed.', image: 'ks.png' },
  { name: 'Vikas Shukla', subject: 'Mathematics', experience: '9+ Years Experience', qualification: 'B.Tech.', image: 'vvs.png' },
  { name: 'Raj Sir', subject: 'Biology', experience: '22+ Years Experience', qualification: 'M.Sc., B.Ed.', image: 'raj.png' },
  { name: 'Chirag Patel', subject: 'Accounts & Statistics', experience: '18+ Years Experience', qualification: 'M.Com., M.Ed.', image: 'cp.png' },
  { name: 'Pravin Chudasama', subject: 'Economics & Org. of Comm.', experience: '25+ Years Experience', qualification: 'M.Com., M.Phil., M.Ed.', image: 'pc.png' }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function Faculty() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="bg-bg-primary border-b border-[#263266] py-16 md:py-24 px-5 md:px-6 relative">
      <div className="max-w-[1280px] mx-auto text-center">
        
        {/* Section Label */}
        <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-medium block mb-2">
          MEET THE MENTORS
        </span>

        {/* Section Heading */}
        <h2 className="font-space font-bold text-text-primary text-[clamp(28px,4vw,44px)] leading-tight mb-4">
          Expert Faculty
        </h2>

        {/* Sub-heading */}
        <p className="font-space text-text-secondary text-base leading-relaxed max-w-[540px] mx-auto mb-16">
          Experienced engineers and highly qualified professionals — the people behind every result.
        </p>

        {/* Faculty Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {facultyData.map((mentor) => (
            <motion.div
              key={mentor.name}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="group bg-bg-card border border-transparent hover:border-[#f97316] rounded-xl p-7 flex flex-col items-center text-center transition-[border-color,box-shadow,background-color] duration-300 will-change-transform"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
            >
              {/* Profile Photo - 100px circle */}
              <Avatar
                src={mentor.image}
                name={mentor.name}
                sizeClass="w-[100px] h-[100px]"
                textClass="text-xl font-semibold"
                borderClass="border-[3px] border-[#1D264F] group-hover:border-[#f97316] transition-all duration-300"
                fallbackBg="bg-bg-primary"
                fallbackText="text-accent-orange"
                className="mb-4 border-[3px] border-[#1D264F] group-hover:border-[#f97316] transition-all duration-300"
              />

              {/* Name */}
              <h3 className="font-space font-semibold text-text-primary text-[17px] leading-tight mb-2">
                {mentor.name}
              </h3>

              {/* Subject Badge */}
              <div className="mb-4">
                <span className="inline-block font-space font-medium text-[11px] text-accent-orange bg-bg-primary border border-accent-orange rounded-md px-2.5 py-1 leading-none uppercase tracking-wide">
                  {mentor.subject}
                </span>
              </div>

              {/* Experience */}
              <p className="font-space text-text-secondary text-[13px] leading-snug mt-auto">
                {mentor.experience}
              </p>

              {/* Qualification */}
              <p className="font-space text-text-muted text-[12px] mt-1 leading-none">
                ({mentor.qualification})
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Teaching Stat */}
        <div className="border-t border-border-subtle/30 pt-8 mt-12">
          <p className="font-space text-[14px] text-text-muted">
            Combined 128+ years of teaching experience across Science, Commerce and Competitive Exams.
          </p>
        </div>

      </div>
    </section>
  );
}
