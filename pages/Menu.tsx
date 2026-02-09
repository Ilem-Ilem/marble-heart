
import React, { useState } from 'react';
import { MENU_ITEMS, WHATSAPP_URL } from '../constants';
import { Leaf } from 'lucide-react';

const categories = [
  'All', 
  'Breakfast & Brunch', 
  'Burgers & Sandwiches', 
  'Main Courses', 
  'Salads & Soups', 
  'Sides', 
  'Desserts', 
  'Drinks'
] as const;

const MenuPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<typeof categories[number]>('All');

  const filteredItems = activeTab === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeTab);

  return (
    <div className="pt-24 min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/menu/WhatsApp Image 2026-02-08 at 7.35.30 PM.jpeg"
            alt="Menu Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-walnut/70 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 text-center text-cream">
          <h1 className="text-4xl md:text-6xl font-serif font-bold">Our Menu</h1>
          <p className="mt-4 uppercase tracking-[0.3em] font-bold text-maple-orange text-xs">Freshly Prepared Classics</p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-8 border-b border-walnut/5 sticky top-[72px] z-40 bg-cream/95 backdrop-blur-md overflow-x-auto">
        <div className="container mx-auto px-4 flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-4 pb-2 md:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${activeTab === cat ? 'bg-maple-amber text-white shadow-lg' : 'bg-white text-walnut hover:bg-maple-orange/10 border border-walnut/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-walnut/5 flex flex-col group">
              <div className="h-64 relative overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {item.isMapleSpecial && (
                   <div className="absolute top-4 left-4 bg-maple-orange text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1.5 shadow-md">
                      <Leaf size={12} /> Maple Favorite
                   </div>
                )}
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-walnut leading-tight mb-4">{item.name}</h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>
                <div className="pt-6 border-t border-walnut/5 text-[10px] font-bold text-forest uppercase tracking-widest flex items-center justify-between">
                   <span>{item.category}</span>
                   <span className="opacity-50 italic">Freshly Prepared</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center p-12 bg-walnut rounded-[3rem] text-cream">
           <h3 className="text-3xl font-serif font-bold mb-4">Reservations</h3>
           <p className="mb-8 opacity-80 max-w-lg mx-auto text-lg italic">"Reserve your table and enjoy a warm dining experience with us. Call us or book online to guarantee your seat."</p>
           <a href={WHATSAPP_URL} className="bg-maple-amber hover:bg-gold text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-xl">
             Book a Table
           </a>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
