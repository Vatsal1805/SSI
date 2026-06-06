import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const branches = [
  {
    badge: 'SSI KARNAVATI',
    title: 'Karnavati Mega Mall',
    address: '2nd Floor, Karnavati Mega Mall – 2, Vastral, Ahmedabad – 382418',
    timing: 'Morning & Evening batches available',
    phones: [
      { display: '90 33 655556', link: 'tel:+919033655556' },
      { display: '70 699 699 70', link: 'tel:+917069969970' }
    ],
    mapUrl: 'https://maps.app.goo.gl/MwmTmau9zsTJ7qvp8'
  },
  {
    badge: 'SSI SHASHWAT',
    title: 'Shashwat Mahadev Complex',
    address: '4th Floor, Shashwat Mahadev Complex, New RTO Road, Vastral, Ahmedabad – 382418',
    timing: 'Morning & Evening batches available',
    phones: [
      { display: '90 99 655556', link: 'tel:+919099655556' },
      { display: '990 990 96 90', link: 'tel:+919909909690' }
    ],
    mapUrl: 'https://maps.app.goo.gl/BipJNDonL67cSfBB9'
  }
];

export default function Branches() {
  return (
    <section className="bg-bg-primary py-16 md:py-24 px-5 md:px-6 relative border-t border-border-subtle/20">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          {/* Section Label */}
          <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-medium block mb-2">
            OUR LOCATIONS
          </span>

          {/* Section Heading */}
          <h2 className="font-space font-bold text-text-primary text-[clamp(28px,4vw,44px)] leading-tight mb-4">
            Two Prime Branches in Vastral
          </h2>

          {/* Subtitle */}
          <p className="font-space text-text-secondary text-base leading-relaxed max-w-[580px] mx-auto">
            Both conveniently located in Vastral, Ahmedabad — easily accessible from all areas.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {branches.map((branch) => (
            <div
              key={branch.badge}
              className="bg-bg-card border border-border-subtle rounded-xl p-6 md:p-8 flex flex-col shadow-xl shadow-black/10 hover:border-accent-orange/40 transition-colors duration-200"
            >
              {/* Branch Badge */}
              <span className="font-space font-bold text-[13px] text-accent-orange uppercase tracking-widest block mb-1">
                {branch.badge}
              </span>

              {/* Title */}
              <h3 className="font-space font-semibold text-text-primary text-xl md:text-2xl mb-4 text-left">
                {branch.title}
              </h3>

              {/* Divider */}
              <div className="w-full border-t border-border-subtle/40 mb-6" />

              {/* Details Rows */}
              <div className="flex flex-col gap-4 text-left mb-8">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <MapPin size={18} className="text-accent-orange shrink-0 mt-1" />
                  <span className="font-space text-sm text-text-secondary leading-relaxed">
                    {branch.address}
                  </span>
                </div>

                {/* Timing */}
                <div className="flex items-center gap-3.5">
                  <Clock size={18} className="text-accent-orange shrink-0" />
                  <span className="font-space text-sm text-text-secondary">
                    {branch.timing}
                  </span>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3.5">
                  <Phone size={18} className="text-accent-orange shrink-0 mt-1" />
                  <div className="flex flex-col gap-1.5">
                    {branch.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={phone.link}
                        className="font-space font-medium text-sm text-accent-orange hover:text-accent-orange-hover hover:underline transition-colors leading-none"
                      >
                        +91 {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Map Button */}
              <div className="mt-auto pt-4 flex justify-start">
                <motion.a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex border border-border-subtle hover:border-accent-orange hover:text-accent-orange text-text-secondary font-space font-medium text-sm rounded-lg py-2.5 px-5 transition-all duration-200"
                >
                  View on Google Maps →
                </motion.a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
