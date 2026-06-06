import React from 'react';

export default function Gallery() {
  return (
    <section className="bg-bg-primary py-16 px-5 border-t border-border-subtle/20 flex flex-col items-center justify-center text-center">
      <div className="max-w-[600px] mx-auto py-12 px-6 border border-dashed border-border-subtle/50 rounded-xl bg-bg-card/20 w-full shadow-lg shadow-black/5">
        <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-semibold block mb-3">
          GALLERY
        </span>
        <p className="font-space text-text-secondary text-sm md:text-base leading-relaxed">
          Coming Soon — A glimpse of our smart classrooms, practical labs, and vibrant student life.
        </p>
      </div>
    </section>
  );
}
