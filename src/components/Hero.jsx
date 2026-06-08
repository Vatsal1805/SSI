import React, { useRef, useState, useEffect } from 'react';
import { MeshGradient } from "@paper-design/shaders-react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function Hero() {
  const sectionRef = useRef(null);

  // Track if the Hero is in view
  const isInView = useInView(sectionRef, { margin: "0px 0px -100px 0px" });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-28 pb-16"
    >

      {/* LAYER 1 — High-Performance WebGL Shader (Active only when visible) / CSS Fallback */}
      <div className="absolute inset-0 overflow-hidden z-0 bg-[#0f172a]">
        <div className="absolute inset-0 w-full h-full">
          {isInView ? (
            <MeshGradient
              style={{ 
                height: "100%", 
                width: "100%", 
                transform: "translate3d(0, 0, 0)",
                willChange: "transform",
                backfaceVisibility: "hidden"
              }}
              distortion={0.35}
              swirl={0.12}
              speed={0.4}
              colors={[
                "#0f172a",
                "#1e3a5f",
                "#0c1929",
                "#162844",
                "#0f172a",
                "#1a2f4a"
              ]}
            />
          ) : (
            <div 
              className="absolute inset-0 w-full h-full opacity-65 pointer-events-none animate-mesh"
              style={{
                backgroundImage: `
                  radial-gradient(at 0% 0%, rgba(30, 58, 95, 0.6) 0px, transparent 50%),
                  radial-gradient(at 100% 0%, rgba(22, 40, 68, 0.6) 0px, transparent 50%),
                  radial-gradient(at 100% 100%, rgba(26, 47, 74, 0.6) 0px, transparent 50%),
                  radial-gradient(at 0% 100%, rgba(12, 25, 41, 0.7) 0px, transparent 50%),
                  radial-gradient(at 50% 50%, rgba(30, 58, 95, 0.4) 0px, transparent 50%)
                `
              }}
            />
          )}
        </div>
      </div>

      {/* LAYER 2 — Dark overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/40 pointer-events-none z-[1]" />

      {/* LAYER 2.5 — Orange Glow */}
      <div
        className="absolute z-[2] pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* LAYER 3 — Centered content */}
      <motion.div
        className="relative z-10 w-full max-w-[760px] mx-auto px-6 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Label */}
        <motion.p
          variants={itemVariants}
          className="text-[11px] tracking-[0.15em] uppercase text-[#f97316] font-['Space_Grotesk'] mb-6"
        >
          CENTRE OF EXCELLENCE · VASTRAL, AHMEDABAD
        </motion.p>

        {/* Hindi Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-['Mukta'] font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          <span className="text-[#f8fafc]">SUCCESS की शुरुआत,</span>
          <br />
          <span className="text-[#f8fafc]">सिर्फ </span>
          <span className="text-[#f97316]">EXPERTS</span>
          <span className="text-[#f8fafc]"> के साथ</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          variants={itemVariants}
          className="font-['Space_Grotesk'] text-[16px] text-[#94a3b8] leading-relaxed max-w-[520px] mb-10"
        >
          JEE · NEET · GUJCET · Boards · Foundation — structured batches,
          expert faculty, and a result record that speaks for itself.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-3 mb-12 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#f97316] text-[#0f172a] font-['Space_Grotesk'] font-medium text-[15px] px-7 py-3.5 rounded-lg hover:bg-[#ea6c0a] transition-colors w-full sm:w-auto text-center"
          >
            Explore Programs
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border border-[#334155] text-[#f8fafc] font-['Space_Grotesk'] font-medium text-[15px] px-7 py-3.5 rounded-lg hover:border-[#64748b] hover:bg-[#1e293b] transition-colors w-full sm:w-auto text-center"
          >
            View Results
          </motion.button>
        </motion.div>

        {/* Micro stats */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6"
        >

          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <span className="font-['Space_Grotesk'] font-semibold text-[18px] text-[#f8fafc]">
              99.41 PR
            </span>
            <span className="font-['Space_Grotesk'] text-[11px] text-[#64748b] uppercase tracking-[0.08em] mt-1">
              12TH BOARD 2026
            </span>
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-[#334155]" />

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <span className="font-['Space_Grotesk'] font-semibold text-[18px] text-[#f8fafc]">
              AIR 3371
            </span>
            <span className="font-['Space_Grotesk'] text-[11px] text-[#64748b] uppercase tracking-[0.08em] mt-1">
              JEE ADVANCED 2026
            </span>
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-[#334155]" />

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <span className="font-['Space_Grotesk'] font-semibold text-[18px] text-[#f8fafc]">
              4.7★
            </span>
            <span className="font-['Space_Grotesk'] text-[11px] text-[#64748b] uppercase tracking-[0.08em] mt-1">
              213 REVIEWS
            </span>
          </div>

        </motion.div>

      </motion.div>

    </section>
  )
}
