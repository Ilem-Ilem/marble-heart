
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  // Header should be transparent only on home page hero before scroll
  const headerBgClass = isHomePage 
    ? (isScrolled ? 'glass-header py-3 shadow-lg' : 'bg-transparent py-5')
    : 'glass-header py-3 shadow-lg';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <img 
            src="/images/logo/WhatsApp Image 2026-02-08 at 7.34.39 PM.jpeg" 
            alt="Maple Hearth Logo" 
            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold uppercase tracking-widest hover:text-maple-orange transition-colors ${location.pathname === link.path ? 'text-maple-orange' : 'text-cream'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/15812568701"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-maple-amber hover:bg-gold text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105"
          >
            Reservations
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-cream p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-walnut/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 border-t border-walnut-lighter' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-semibold uppercase tracking-widest ${location.pathname === link.path ? 'text-maple-orange' : 'text-cream'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/15812568701"
            className="bg-maple-amber text-white text-center py-3 rounded-lg font-bold uppercase tracking-widest"
          >
            WhatsApp Reservation
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
