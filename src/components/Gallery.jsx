import React from 'react';

export default function Gallery() {
  return (
    <section className="bg-bg-light py-16 px-5 border-b border-[#263266] flex flex-col items-center justify-center text-center">
      <div className="max-w-[600px] mx-auto py-12 px-6 border border-dashed border-[#e2e8f0] rounded-xl bg-[#f8fafc] w-full shadow-sm">
        <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-semibold block mb-3">
          GALLERY
        </span>
        <p className="font-space text-[#475569] text-sm md:text-base leading-relaxed">
          Coming Soon — A glimpse of our smart classrooms, practical labs, and vibrant student life.
        </p>
      </div>
    </section>
  );
}
