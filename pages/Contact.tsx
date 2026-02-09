
import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER, WHATSAPP_URL } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-cream">
       {/* Map Hero */}
       <section className="h-[400px] relative w-full overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.791565507963!2d-106.6713!3d52.127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f69774d081f3%3A0x6b9d6a9e6d0a7a5c!2s140%20Idylwyld%20Dr%20S%2C%20Saskatoon%2C%20SK%20S7L%200Y7%2C%20Canada!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            className="filter grayscale contrast-125 opacity-70"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-cream to-transparent" />
       </section>

       <section className="py-24 container mx-auto px-4 md:px-8 -mt-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             {/* Info Cards */}
             <div className="lg:col-span-1 space-y-8">
                <div className="bg-walnut text-cream p-12 rounded-[3rem] shadow-2xl space-y-8">
                   <h2 className="text-3xl font-serif font-bold text-maple-orange">Contact Details</h2>
                   
                   <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                         <MapPin className="text-maple-amber mt-1 shrink-0" />
                         <div>
                            <h4 className="font-bold text-cream uppercase tracking-widest text-[10px] mb-1">Our Location</h4>
                            <p className="text-warm-gray text-sm">{ADDRESS}</p>
                         </div>
                      </div>
                      <div className="flex items-start space-x-4">
                         <Phone className="text-maple-amber mt-1 shrink-0" />
                         <div>
                            <h4 className="font-bold text-cream uppercase tracking-widest text-[10px] mb-1">Call Us</h4>
                            <p className="text-warm-gray text-sm">{PHONE_NUMBER}</p>
                         </div>
                      </div>
                      <div className="flex items-start space-x-4">
                         <Mail className="text-maple-amber mt-1 shrink-0" />
                         <div>
                            <h4 className="font-bold text-cream uppercase tracking-widest text-[10px] mb-1">Email</h4>
                            <p className="text-warm-gray text-sm">Info@mapleheartrestaurant.com</p>
                         </div>
                      </div>
                      <div className="flex items-start space-x-4">
                         <MessageCircle className="text-maple-amber mt-1 shrink-0" />
                         <div>
                            <h4 className="font-bold text-cream uppercase tracking-widest text-[10px] mb-1">WhatsApp</h4>
                            <p className="text-warm-gray text-sm">Instant Reservations</p>
                         </div>
                      </div>
                   </div>

                   <div className="pt-8 border-t border-cream/10">
                      <h4 className="font-bold text-maple-orange uppercase tracking-widest text-[10px] mb-4">Socials</h4>
                      <div className="flex space-x-4">
                         <a href="https://www.facebook.com/share/1BYQt9XJSb/?mibextid=wwXIfr" className="p-3 bg-white/5 rounded-full hover:bg-maple-amber transition-colors">Facebook</a>
                      </div>
                   </div>
                </div>

                <div className="bg-forest/5 p-10 rounded-[3rem] border border-forest/10">
                   <h3 className="text-xl font-serif font-bold text-walnut mb-6 flex items-center gap-2"><Clock /> Open Today</h3>
                   <ul className="space-y-3 text-sm text-warm-gray">
                      <li className="flex justify-between"><span>Mon–Fri:</span> <span>8:00 AM – 10:00 PM</span></li>
                      <li className="flex justify-between"><span>Sat:</span> <span>9:00 AM – 11:00 PM</span></li>
                      <li className="flex justify-between font-bold text-walnut"><span>Sun:</span> <span>9:00 AM – 9:00 PM</span></li>
                   </ul>
                </div>
             </div>

             {/* Form */}
             <div className="lg:col-span-2 bg-white p-12 md:p-20 rounded-[3rem] shadow-sm border border-walnut/5">
                <h2 className="text-4xl font-serif font-bold text-walnut mb-4">Send a Message</h2>
                <p className="text-warm-gray mb-12">Prefer email? Fill out the form below and we'll get back to you within 24 hours. For faster service, use WhatsApp!</p>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-warm-gray">Full Name</label>
                         <input type="text" className="w-full bg-cream border-b border-walnut/10 py-4 focus:border-maple-amber outline-none transition-colors" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-warm-gray">Phone Number</label>
                         <input type="tel" className="w-full bg-cream border-b border-walnut/10 py-4 focus:border-maple-amber outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-warm-gray">Message</label>
                      <textarea rows={4} className="w-full bg-cream border-b border-walnut/10 py-4 focus:border-maple-amber outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
                   </div>
                   <div className="flex flex-col md:flex-row gap-4 items-center pt-4">
                      <button className="w-full md:w-auto bg-walnut hover:bg-maple-amber text-cream px-12 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
                        Send Message
                      </button>
                      <span className="text-warm-gray text-xs italic">We'll reply via WhatsApp or email.</span>
                   </div>
                </form>

                <div className="mt-16 pt-16 border-t border-walnut/5 text-center">
                   <h3 className="text-2xl font-serif font-bold text-walnut mb-4">Need Immediate Assistance?</h3>
                   <a href={WHATSAPP_URL} className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3 rounded-full font-bold shadow-md hover:scale-105 transition-transform">
                     <MessageCircle /> Chat on WhatsApp
                   </a>
                </div>
             </div>
          </div>
       </section>
    </div>
  );
};

export default ContactPage;
