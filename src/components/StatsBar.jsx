import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function CountUp({ end, duration = 1.8 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    // Parse ending number and extract non-numeric symbols (+, %)
    const numericEnd = parseInt(end.replace(/[^0-9]/g, ''), 10);
    const suffix = end.replace(/[0-9]/g, '');
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease out quadratic
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeProgress * numericEnd));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  const suffix = end.replace(/[0-9]/g, '');

  return (
    <span ref={ref} className="font-space font-bold text-accent-orange text-[32px] md:text-[48px] leading-none" style={{ textShadow: '0 0 40px rgba(249,115,22,0.4)' }}>
      {count}{suffix}
    </span>
  );
}

const statsData = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '5000+', label: 'Students Trained' },
  { value: '500+', label: 'Selections in Engineering & Medical' },
  { value: '95%', label: 'Result Ratio' }
];

export default function StatsBar() {
  return (
    <section className="bg-bg-primary border-t border-[#334155] border-b border-[#e2e8f0] py-8 md:py-10 px-5 md:px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-between items-center gap-6 lg:gap-4 text-center">
          {statsData.map((stat, i) => (
            <React.Fragment key={i}>
              {/* Stat Card */}
              <div className="flex flex-col items-center justify-center flex-1 min-w-[140px] px-2">
                <CountUp end={stat.value} />
                <span className="font-space font-normal text-[12px] text-[#64748b] uppercase tracking-[0.08em] mt-2 max-w-[200px] text-center leading-tight">
                  {stat.label}
                </span>
              </div>
              
              {/* Divider (Hidden on Mobile, Visible on Desktop) */}
              {i < statsData.length - 1 && (
                <div className="hidden lg:block w-[1px] h-10 bg-border-subtle" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
