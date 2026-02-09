
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, MessageCircle } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-serif font-bold text-cream">Maple Heart Cruison</span>
            </Link>
            <p className="text-warm-gray text-sm leading-relaxed">
              Where comfort meets flavor. Drawing from Canadian hearthside cooking and the sweet richness of maple.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BYQt9XJSb/?mibextid=wwXIfr" className="p-2 bg-walnut rounded-full hover:bg-maple-amber transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-maple-orange">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/menu" className="hover:text-maple-orange transition-colors">Our Menu</Link></li>
              <li><Link to="/about" className="hover:text-maple-orange transition-colors">About Our Story</Link></li>
              <li><Link to="/gallery" className="hover:text-maple-orange transition-colors">Photo Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-maple-orange transition-colors">Contact & Hours</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-maple-orange">Find Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-maple-orange shrink-0 mt-0.5" />
                <span className="text-warm-gray">{ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-maple-orange shrink-0" />
                <span className="text-warm-gray">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-maple-orange shrink-0" />
                <span className="text-warm-gray">Chat on WhatsApp</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-maple-orange">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-warm-gray">
              <li className="flex justify-between"><span>Mon–Fri:</span> <span>8 AM – 10 PM</span></li>
              <li className="flex justify-between"><span>Sat:</span> <span>9 AM – 11 PM</span></li>
              <li className="flex justify-between"><span>Sun:</span> <span>9 AM – 9 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-walnut pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-warm-gray">
          <p>© 2025 Maple Heart Cruison. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream">Privacy Policy</a>
            <a href="#" className="hover:text-cream">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
