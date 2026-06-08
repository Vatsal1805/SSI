import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function CTAFooter() {
  return (
    <div className="w-full flex flex-col">
      
      {/* CTA STRIP */}
      <section className="bg-[#0f172a] border-t border-[#334155] py-20">
        <div className="max-w-[640px] mx-auto px-6 text-center">

          {/* Label */}
          <p className="text-[11px] tracking-[0.15em] uppercase text-[#f97316] font-['Space_Grotesk'] mb-4">
            LIMITED SEATS AVAILABLE
          </p>

          {/* Heading */}
          <h2 className="font-['Space_Grotesk'] font-bold text-[#f8fafc] mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Start Your Journey to Academic Excellence
          </h2>

          {/* Sub */}
          <p className="font-['Space_Grotesk'] text-[#94a3b8] text-[16px] mb-10">
            Free demo class for every new enrollment. Book your seat before June 30th, 2026.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#admissions"
              className="bg-[#f97316] text-[#0f172a] font-['Space_Grotesk'] font-semibold
              text-[15px] px-8 py-3.5 rounded-lg hover:bg-[#ea6c0a] transition-colors w-full sm:w-auto text-center shadow-lg shadow-accent-orange/10">
              Apply for Admission
            </a>
            <a href="https://wa.me/+919033655556"
              target="_blank"
              className="border border-[#334155] text-[#f8fafc] font-['Space_Grotesk']
              font-medium text-[15px] px-8 py-3.5 rounded-lg hover:border-[#64748b]
              hover:bg-[#1e293b] transition-colors w-full sm:w-auto text-center">
              WhatsApp Us
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0f1e] border-t border-[#1e293b] pt-[60px] pb-8 px-6 md:px-8 text-left">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Col 1 — Brand */}
          <div className="flex flex-col">
            <img 
              src="https://shreesaiinstitute.in/images/ssilogofull1.png" 
              width="160px" 
              style={{ filter: 'brightness(1.1)' }}
              alt="SSI logo"
              className="h-auto object-contain"
            />
            <p className="font-['Space_Grotesk'] text-[#64748b] text-[13px] mt-3 mb-4 leading-relaxed">
              Building tomorrow's rankers since 2010.
            </p>
            {/* Social Icons Row */}
            <div className="flex gap-4 mt-4">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-bg-primary/50 border border-border-subtle flex items-center justify-center text-[#64748b] hover:text-[#f97316] transition-all duration-150" aria-label="Facebook">
                <svg className="w-[18px] h-[18px] fill-currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-bg-primary/50 border border-border-subtle flex items-center justify-center text-[#64748b] hover:text-[#f97316] transition-all duration-150" aria-label="Instagram">
                <svg className="w-[18px] h-[18px] fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-bg-primary/50 border border-border-subtle flex items-center justify-center text-[#64748b] hover:text-[#f97316] transition-all duration-150" aria-label="YouTube">
                <svg className="w-[18px] h-[18px] fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              {/* Telegram (Send) */}
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-bg-primary/50 border border-border-subtle flex items-center justify-center text-[#64748b] hover:text-[#f97316] transition-all duration-150" aria-label="Telegram">
                <svg className="w-[18px] h-[18px] fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2L1.5 9.8l6.7 2.5L18 4.5l-8.3 8.3 8.3 8.3z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Courses */}
          <div className="flex flex-col">
            <h4 className="font-['Space_Grotesk'] font-semibold text-[12px] text-[#94a3b8] tracking-[0.1em] uppercase mb-4">
              COURSES
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: 'JEE Main & Advanced', href: '#courses' },
                { name: 'NEET UG', href: '#courses' },
                { name: 'GUJCET', href: '#courses' },
                { name: '11th–12th Science', href: '#courses' },
                { name: '11th–12th Commerce', href: '#courses' },
                { name: 'Foundation 5th–10th', href: '#courses' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#64748b] text-[14px] hover:text-[#f97316] block transition-colors duration-150"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-['Space_Grotesk'] font-semibold text-[12px] text-[#94a3b8] tracking-[0.1em] uppercase mb-4">
              QUICK LINKS
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Our Results', href: '#results' },
                { name: 'Faculty', href: '#faculty' },
                { name: 'Why Us', href: '#why-us' },
                { name: 'Contact', href: '#branches' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#64748b] text-[14px] hover:text-[#f97316] block transition-colors duration-150"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col">
            <h4 className="font-['Space_Grotesk'] font-semibold text-[12px] text-[#94a3b8] tracking-[0.1em] uppercase mb-4">
              CONTACT US
            </h4>
            <div className="flex flex-col gap-3 text-[13px] text-[#64748b] leading-relaxed">
              
              {/* Row 1 */}
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#64748b] shrink-0 mt-1" />
                <span>2nd Floor, Karnavati Mega Mall-2, Vastral – 382418</span>
              </div>
              {/* Row 2 */}
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#64748b] shrink-0" />
                <a href="tel:+919033655556" className="hover:text-[#f97316]">
                  +91 90336 55556
                </a>
              </div>

              {/* Row 3 */}
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#64748b] shrink-0 mt-1" />
                <span>4th Floor, Shashwat Mahadev Complex, Vastral – 382418</span>
              </div>
              {/* Row 4 */}
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#64748b] shrink-0" />
                <a href="tel:+919099655556" className="hover:text-[#f97316]">
                  +91 90996 55556
                </a>
              </div>

              {/* Row 5 */}
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#64748b] shrink-0" />
                <a href="mailto:info@shreesaiinstitute.in" className="hover:text-[#f97316]">
                  info@shreesaiinstitute.in
                </a>
              </div>

              {/* Row 6 */}
              <div className="flex items-center gap-2.5">
                <Clock size={14} className="text-[#64748b] shrink-0" />
                <span>Mon–Sat: 9:00 AM – 8:30 PM</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="max-w-[1280px] mx-auto border-t border-[#1e293b] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[#64748b] text-[12px]">
            © 2026 Shree Sai Institute. All rights reserved.
          </p>
          <p className="font-['Space_Grotesk'] text-[#64748b] text-[12px]">
            Designed by{' '}
            <span className="text-[#f97316] font-medium">Converge Digitals</span>
          </p>
        </div>
      </footer>

    </div>
  );
}
