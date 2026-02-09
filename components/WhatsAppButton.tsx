
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-subtle group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-charcoal px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;
