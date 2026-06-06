import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const usps = [
  {
    num: '01',
    title: 'Expert Faculty',
    desc: 'Well experienced team of engineers and highly qualified professionals with 128+ combined years.'
  },
  {
    num: '02',
    title: 'Personal Attention',
    desc: 'Small batch sizes ensure every student receives individual mentoring and progress tracking.'
  },
  {
    num: '03',
    title: 'Smart Classrooms',
    desc: 'Digital boards, concept videos, and interactive problem sessions for deep understanding.'
  },
  {
    num: '04',
    title: 'Weekly Tests',
    desc: 'Exam-pattern tests every week with detailed performance analysis and weak area identification.'
  },
  {
    num: '05',
    title: 'Doubt Solving',
    desc: 'Daily doubt sessions and WhatsApp support so no question goes unanswered.'
  },
  {
    num: '06',
    title: 'Parent Reporting',
    desc: 'Monthly performance reports shared directly with parents — full transparency, no surprises.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const rowVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function WhySSI() {
  const listRef = useRef(null);
  const isInView = useInView(listRef, { once: true, margin: '-100px' });

  return (
    <section className="bg-bg-primary py-16 md:py-24 px-5 md:px-6 relative border-t border-border-subtle/20">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          {/* Section Label */}
          <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-medium block mb-2">
            SSI ADVANTAGE
          </span>

          {/* Section Heading */}
          <h2 className="font-space font-bold text-text-primary text-[clamp(28px,4vw,44px)] leading-tight">
            Why Students Choose SSI
          </h2>
        </div>

        {/* Numbered List */}
        <motion.div
          ref={listRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col w-full"
        >
          {usps.map((usp, index) => {
            const isLast = index === usps.length - 1;
            return (
              <motion.div
                key={usp.num}
                variants={rowVariants}
                className={`flex items-center gap-6 md:gap-10 py-6 md:py-8 px-4 md:px-8 border-b transition-colors duration-300 group ${
                  isLast ? 'border-b-0' : 'border-b-border-subtle'
                } hover:bg-bg-card rounded-xl`}
              >
                {/* Number (Left) */}
                <span className="font-space font-bold text-[clamp(48px,6vw,72px)] text-bg-card leading-none select-none tracking-tighter group-hover:text-accent-orange transition-colors duration-300 shrink-0 min-w-[70px] md:min-w-[90px] text-center">
                  {usp.num}
                </span>

                {/* Content (Right) */}
                <div className="text-left flex-1">
                  <h3 className="font-space font-semibold text-text-primary text-base md:text-[18px] leading-tight mb-2">
                    {usp.title}
                  </h3>
                  <p className="font-space text-text-secondary text-xs md:text-sm leading-relaxed">
                    {usp.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
