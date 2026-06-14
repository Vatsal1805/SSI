import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Timezone-locked IST deadline
const deadline = new Date('2026-06-30T23:59:59+05:30');

const batchSchedule = [
  { name: 'JEE 2027 – New Batch', date: '21st May 2026' },
  { name: 'NEET 2027 – New Batch', date: '21st May 2026' },
  { name: '10th & 12th – New Batches', date: '23rd April 2026' },
  { name: 'STD 5th–9th & 11th', date: '21st May 2026' }
];

export default function Admissions() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +deadline - +new Date();
      let tempTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        tempTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      setTimeLeft(tempTimeLeft);
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-bg-primary border-b border-[#263266] py-16 md:py-24 px-5 md:px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          {/* Section Label */}
          <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-medium block mb-2">
            ADMISSIONS OPEN
          </span>

          {/* Section Heading */}
          <h2 className="font-space font-bold text-text-primary text-[clamp(28px,4vw,44px)] leading-tight mb-4">
            New Admissions Closing — 30th June 2026
          </h2>

          {/* Subtitle */}
          <p className="font-space text-text-secondary text-base leading-relaxed max-w-[620px] mx-auto">
            5th to 10th · 11th–12th Science & Commerce · JEE · NEET · GUJCET
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Countdown */}
          <div className="flex flex-col text-left">
            <h3 className="font-space font-semibold text-text-primary text-base mb-6 uppercase tracking-wider">
              Admission Countdown
            </h3>

            {/* Countdown Boxes */}
            <div className="grid grid-cols-4 gap-3 md:gap-4 mb-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Mins', value: timeLeft.minutes },
                { label: 'Secs', value: timeLeft.seconds }
              ].map((box) => (
                <div 
                  key={box.label}
                  className="bg-bg-card border border-border-subtle border-t-[3px] border-t-accent-orange rounded-lg p-4 md:py-5 md:px-4 flex flex-col items-center justify-center shadow-lg shadow-black/10"
                >
                  <span 
                    className="font-space font-bold text-3xl md:text-4xl text-accent-orange leading-none mb-1"
                    style={{ textShadow: '0 0 30px rgba(249,115,22,0.5)' }}
                  >
                    {String(box.value).padStart(2, '0')}
                  </span>
                  <span className="font-space font-normal text-[10px] md:text-[11px] text-text-muted uppercase tracking-wider">
                    {box.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Helper Text */}
            <p className="font-space text-text-muted text-[13px] leading-relaxed">
              Limited seats per batch. Enrollment is on a first-come, first-served basis.
            </p>
          </div>

          {/* Right Column - Batch Schedule */}
          <div className="flex flex-col text-left bg-bg-card border border-border-subtle rounded-xl p-6 md:p-8 shadow-xl shadow-black/10">
            <h3 className="font-space font-semibold text-text-primary text-[16px] mb-6">
              New Batch Schedule
            </h3>

            {/* Batches list */}
            <div className="flex flex-col gap-4 mb-8">
              {batchSchedule.map((batch, index) => (
                <div key={index} className="flex justify-between items-center border-b border-border-subtle/30 pb-3 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0" />
                    <span className="font-space text-sm text-text-primary font-medium">
                      {batch.name}
                    </span>
                  </div>
                  <span className="font-space text-xs md:text-sm text-accent-orange font-semibold tracking-wide">
                    {batch.date}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://wa.me/+919033655556"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-space font-semibold text-[15px] h-12 rounded-lg flex items-center justify-center transition-colors duration-200 w-full mb-4 shadow-lg shadow-accent-orange/15"
            >
              Reserve Your Seat →
            </motion.a>

            {/* WhatsApp Support Line */}
            <p className="font-space text-text-muted text-[13px] text-center">
              Or WhatsApp us directly:{' '}
              <a 
                href="https://wa.me/+919033655556" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent-orange hover:underline font-semibold"
              >
                +91 90336 55556
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
