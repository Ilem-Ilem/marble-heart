
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Leaf, Heart, Coffee, Utensils, Zap, GlassWater } from 'lucide-react';
import { MENU_ITEMS, TESTIMONIALS, WHATSAPP_URL, ADDRESS, PARTNER_BRANDS } from '../constants';

const Home: React.FC = () => {
  const featuredItems = MENU_ITEMS.filter(item => item.isMapleSpecial).slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/menu/WhatsApp Image 2026-02-08 at 7.35.28 PM.jpeg"
            alt="Maple Hearth Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-cream px-4 max-w-4xl animate-fade-in">
          <div className="mb-6 flex flex-wrap justify-center gap-4">
             <span className="bg-maple-orange/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-white/20">EAT & DRINK</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-4 drop-shadow-xl">
            Maple Hearth <span className="text-maple-orange italic">Restaurant</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6 tracking-[0.1em] opacity-90 uppercase">
            Where Comfort Meets Flavor
          </p>
          
          {/* Subtle Categories Row integrated into content */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-cream/70 mb-10">
            <span className="flex items-center gap-2">Restaurants</span>
            <span className="opacity-30">•</span>
            <span className="flex items-center gap-2">Coffee Shops</span>
            <span className="opacity-30 hidden md:inline">•</span>
            <span className="flex items-center gap-2">Quick Food</span>
            <span className="opacity-30">•</span>
            <span className="flex items-center gap-2">Pubs / Bars</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              className="w-full md:w-auto bg-maple-amber hover:bg-gold text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/menu"
              className="w-full md:w-auto border-2 border-cream hover:bg-cream hover:text-walnut text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <img
                src="/images/menu/WhatsApp Image 2026-02-08 at 7.35.29 PM.jpeg"
                alt="Heart of the Kitchen"
                className="rounded-2xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-maple-amber/10 rounded-full -z-0 blur-3xl" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <span className="text-maple-amber font-bold tracking-widest uppercase text-sm">Welcome to Maple Hearth</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-walnut leading-tight">
                Hearty, homemade meals crafted with love.
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed italic">
                "At Maple Hearth Restaurant, we serve hearty, homemade meals crafted with love and fresh ingredients. Whether you’re here for a cozy breakfast, a family lunch, or a relaxing dinner, every dish is prepared to make you feel right at home."
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-forest/10 rounded-lg text-forest"><Leaf /></div>
                  <span className="font-semibold text-walnut">Prairie Fresh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-maple-amber/10 rounded-lg text-maple-amber"><Heart /></div>
                  <span className="font-semibold text-walnut">Family Owned</span>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center text-maple-amber font-bold hover:gap-4 transition-all group">
                Read Our Full Story <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Collection */}
      <section className="py-24 bg-white border-y border-walnut/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-maple-amber font-bold tracking-widest uppercase text-sm">The Concourse Collection</span>
            <h2 className="text-4xl font-serif font-bold text-walnut mt-2">More Food & Drink</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PARTNER_BRANDS.map(brand => (
              <div key={brand.name} className="group flex flex-col">
                <div className="h-48 rounded-2xl overflow-hidden mb-6 relative">
                  <img src={brand.image} alt={brand.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-walnut">{brand.location}</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-walnut mb-2">{brand.name}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24 bg-walnut text-cream overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-maple-orange font-bold tracking-widest uppercase text-sm">🍽 OUR MENU</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Specialty Crafted Dishes</h2>
            <p className="max-w-2xl mx-auto mt-4 text-warm-gray text-sm tracking-widest uppercase">Every recipe is carefully crafted to deliver bold taste and lasting satisfaction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map(item => (
              <div key={item.id} className="group bg-charcoal rounded-2xl overflow-hidden shadow-xl transform transition-all hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-maple-amber text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Signature</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-3">{item.name}</h3>
                  <p className="text-warm-gray text-sm mb-6 leading-relaxed line-clamp-2">{item.description}</p>
                  <div className="flex justify-end items-center">
                    <Link to="/menu" className="p-2 bg-cream/10 rounded-full hover:bg-maple-orange transition-colors">
                      <ChevronRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-maple-amber font-bold tracking-widest uppercase text-sm">Guest Voices</span>
            <h2 className="text-4xl font-serif font-bold mt-2 mb-16">Shared Memories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map(t => (
                <div key={t.id} className="bg-white p-10 rounded-3xl shadow-xl text-left relative border-l-8 border-maple-amber">
                  <p className="text-walnut text-lg leading-relaxed mb-6">"{t.text}"</p>
                  <div className="text-maple-amber font-bold text-sm uppercase tracking-widest">— {t.author}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
