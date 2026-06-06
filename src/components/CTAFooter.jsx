import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTAFooter() {
  return (
    <div className="w-full flex flex-col">
      {/* CTA Strip Above Footer */}
      <section className="bg-bg-primary border-t border-border-subtle py-20 px-5 md:px-6 text-center">
        <div className="max-w-[1280px] mx-auto">
          {/* Label */}
          <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-semibold block mb-3">
            LIMITED SEATS AVAILABLE
          </span>

          {/* Heading */}
          <h2 className="font-space font-bold text-text-primary text-[clamp(28px,4vw,44px)] leading-tight mb-4">
            Start Your Journey to Academic Excellence
          </h2>

          {/* Subtitle */}
          <p className="font-space text-text-secondary text-[16px] max-w-[600px] mx-auto mb-8 leading-relaxed">
            Free demo class for every new enrollment. Book your seat before June 30th, 2026.
          </p>

          {/* Button Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#admissions"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-space font-medium text-[15px] rounded-lg py-[14px] px-[28px] transition-colors duration-200 w-full sm:w-auto text-center"
            >
              Apply for Admission
            </motion.a>
            <motion.a
              href="https://wa.me/+919033655556"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-transparent border border-border-subtle text-text-primary hover:border-text-muted hover:bg-bg-card font-space font-medium text-[15px] rounded-lg py-[14px] px-[28px] transition-all duration-200 w-full sm:w-auto text-center"
            >
              WhatsApp Us
            </motion.a>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#0a0f1e] border-t border-bg-card py-16 px-5 md:px-8 text-left">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1 - Brand */}
          <div className="flex flex-col">
            <img 
              src="https://shreesaiinstitute.in/images/ssilogofull1.png" 
              alt="Shree Sai Institute logo" 
              className="w-[160px] h-auto mb-4 object-contain brightness-95"
            />
            <p className="font-space text-[13px] text-text-muted mb-6 max-w-[240px] leading-relaxed">
              Building tomorrow's rankers since 2010.
            </p>
            {/* Social Icons (custom SVG to ensure Lucide constraints) */}
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-bg-primary border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-orange hover:border-accent-orange transition-all duration-150" aria-label="Facebook">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-bg-primary border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-orange hover:border-accent-orange transition-all duration-150" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-bg-primary border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-orange hover:border-accent-orange transition-all duration-150" aria-label="YouTube">
                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              {/* Telegram */}
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-bg-primary border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-orange hover:border-accent-orange transition-all duration-150" aria-label="Telegram">
                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2L1.5 9.8l6.7 2.5L18 4.5l-8.3 8.3 8.3 8.3z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Courses */}
          <div className="flex flex-col">
            <h4 className="font-space font-semibold text-[13px] text-text-secondary tracking-[0.1em] uppercase mb-5">
              Courses
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { name: 'JEE Main & Advanced', href: '#courses' },
                { name: 'NEET UG', href: '#courses' },
                { name: 'GUJCET', href: '#courses' },
                { name: '11th – 12th Science', href: '#courses' },
                { name: '11th – 12th Commerce', href: '#courses' },
                { name: 'Foundation 5th – 10th', href: '#courses' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-space text-sm text-[#64748b] hover:text-accent-orange transition-colors duration-150"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-space font-semibold text-[13px] text-text-secondary tracking-[0.1em] uppercase mb-5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Our Results', href: '#results' },
                { name: 'Faculty', href: '#faculty' },
                { name: 'Why Us', href: '#why-us' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#branches' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-space text-sm text-[#64748b] hover:text-accent-orange transition-colors duration-150"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div className="flex flex-col">
            <h4 className="font-space font-semibold text-[13px] text-text-secondary tracking-[0.1em] uppercase mb-5">
              Contact Us
            </h4>
            
            <div className="flex flex-col gap-5 text-[13px] text-[#64748b] font-space leading-relaxed">
              
              {/* Branch 1 info */}
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-accent-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block text-text-secondary font-medium">SSI Karnavati:</span>
                  <span>2nd Floor, Karnavati Mega Mall-2, Vastral, Ahmedabad – 382418</span>
                  <a href="tel:+919033655556" className="block text-accent-orange font-medium hover:underline mt-1">
                    +91 90336 55556
                  </a>
                </div>
              </div>

              {/* Branch 2 info */}
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-accent-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block text-text-secondary font-medium">SSI Shashwat:</span>
                  <span>4th Floor, Shashwat Mahadev Complex, RTO Road, Vastral, Ahmedabad – 382418</span>
                  <a href="tel:+919099655556" className="block text-accent-orange font-medium hover:underline mt-1">
                    +91 90996 55556
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-accent-orange shrink-0" />
                <a href="mailto:info@shreesaiinstitute.in" className="hover:text-accent-orange hover:underline">
                  info@shreesaiinstitute.in
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-accent-orange shrink-0" />
                <span>Mon–Sat: 9:00 AM – 8:30 PM</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom copyright strip */}
        <div className="max-w-[1280px] mx-auto border-t border-border-subtle/30 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="font-space text-[12px] text-[#64748b] tracking-wide">
            © 2026 Shree Sai Institute. All rights reserved.
          </p>
          <p className="font-space text-[12px] text-[#64748b] tracking-wide">
            Designed by{' '}
            <span className="text-accent-orange font-semibold">Converge Digitals</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
