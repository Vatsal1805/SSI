import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/+919033655556"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-[52px] h-[52px] bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20ba5a] transition-colors duration-200 cursor-pointer"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ 
        repeat: Infinity, 
        duration: 2, 
        ease: "easeInOut" 
      }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="fill-white/10" />
    </motion.a>
  );
}
