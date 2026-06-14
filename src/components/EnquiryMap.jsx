import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EnquiryMap() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been submitted successfully. Our counselor will contact you soon.");
  };

  return (
    <section className="bg-bg-primary py-16 md:py-24 px-5 md:px-6 relative border-b border-[#263266]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(249,115,22,0.015),transparent_60%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-space text-[11px] tracking-[0.15em] text-accent-orange uppercase font-medium block mb-2">
            ADMISSIONS open
          </span>
          <h2 className="font-space font-bold text-text-primary text-[clamp(28px,4vw,44px)] leading-tight mb-4">
            Enquire & Visit Us
          </h2>
          <p className="font-space text-text-secondary text-base leading-relaxed max-w-[540px] mx-auto">
            Get your academic doubts solved. Fill out the form or drop by one of our branches in Vastral.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Enquiry Form (Spans 7) */}
          <div className="lg:col-span-7 bg-bg-card border border-border-subtle rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl text-left">
            <div>
              <h3 className="font-space font-bold text-text-primary text-xl md:text-2xl mb-2">
                Send a Message
              </h3>
              <p className="font-space text-text-secondary text-sm mb-8">
                Fill in the details below to request a callback or book a free demo session.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="student-name" className="block font-space font-medium text-xs text-text-secondary uppercase tracking-wider mb-2">
                    Student Full Name
                  </label>
                  <input
                    type="text"
                    id="student-name"
                    required
                    placeholder="e.g. Ramesh Patel"
                    className="w-full font-space bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-orange transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="student-phone" className="block font-space font-medium text-xs text-text-secondary uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="student-phone"
                      required
                      placeholder="e.g. +91 90336 55556"
                      className="w-full font-space bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-orange transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="student-course" className="block font-space font-medium text-xs text-text-secondary uppercase tracking-wider mb-2">
                      Course of Interest
                    </label>
                    <select
                      id="student-course"
                      required
                      className="w-full font-space bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-orange transition-colors"
                    >
                      <option value="">Choose a program</option>
                      <option value="foundation">5th - 10th Foundation</option>
                      <option value="science-pcm">11th - 12th Science (PCM)</option>
                      <option value="science-pcb">11th - 12th Science (PCB)</option>
                      <option value="commerce">11th - 12th Commerce</option>
                      <option value="jeeneet">JEE Main & Advanced / NEET UG</option>
                      <option value="gujcet">GUJCET Coaching</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="student-message" className="block font-space font-medium text-xs text-text-secondary uppercase tracking-wider mb-2">
                    Your Message / Query
                  </label>
                  <textarea
                    id="student-message"
                    rows="4"
                    placeholder="Enter any specific requirements or details you'd like to share..."
                    className="w-full font-space bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-orange transition-colors resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="bg-accent-orange hover:bg-accent-orange-hover text-bg-primary font-space font-semibold text-sm rounded-lg py-4 transition-colors w-full shadow-lg shadow-accent-orange/10 flex items-center justify-center gap-2 mt-2"
                >
                  Submit Enquiry
                </motion.button>
              </form>
            </div>
          </div>

          {/* Right Column: Address Cards & Map (Spans 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contacts Panel */}
            <div className="bg-bg-card border border-border-subtle rounded-2xl p-6 text-left flex flex-col gap-4 shadow-md">
              <h3 className="font-space font-bold text-text-primary text-lg mb-1">
                Reach Us Directly
              </h3>
              
              <div className="flex flex-col gap-3.5 text-xs md:text-sm font-space">
                {/* Branch 1 */}
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-text-primary block mb-0.5">Karnavati Mega Mall Branch</span>
                    <span className="text-text-secondary">2nd Floor, Karnavati Mega Mall-2, Vastral, Ahmedabad</span>
                  </div>
                </div>
                
                {/* Branch 2 */}
                <div className="flex items-start gap-3 border-t border-border-subtle/50 pt-3.5">
                  <MapPin size={16} className="text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-text-primary block mb-0.5">Shashwat Complex Branch</span>
                    <span className="text-text-secondary">4th Floor, Shashwat Mahadev Complex, Vastral, Ahmedabad</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Frame */}
            <div className="flex-1 min-h-[260px] bg-bg-card border border-border-subtle rounded-2xl overflow-hidden relative shadow-md">
              <iframe
                title="Shree Sai Institute Vastral Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.181816723223!2d72.6548777!3d22.9987258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871fcb9e83cf%3A0xe541c6fdfa7f8582!2sShree%20Sai%20Institute!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 grayscale invert-[0.9] contrast-[1.2]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
