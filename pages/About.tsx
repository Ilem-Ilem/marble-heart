
import React from 'react';
import { Leaf, Award, Heart, Shield } from 'lucide-react';
import { ABOUT_STORY_LONG } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=1600" 
          alt="Kitchen Hearth"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-walnut/60" />
        <div className="relative z-10 text-center text-cream">
           <span className="uppercase tracking-[0.4em] font-bold text-xs text-maple-orange mb-4 block">Our Story</span>
           <h1 className="text-5xl md:text-7xl font-serif font-bold">Made with Heart</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
             <div className="space-y-6">
                <h2 className="text-4xl font-serif font-bold text-walnut">Rooted in Tradition, Crafted for Today</h2>
                <div className="space-y-4">
                  {ABOUT_STORY_LONG.split('\n\n').map((para, i) => (
                    <p key={i} className="text-warm-gray text-lg leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
             </div>
             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" 
                  className="rounded-[3rem] shadow-2xl relative z-10" 
                  alt="Family gathering" 
                />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-maple-orange/20 rounded-full -z-0 blur-2xl" />
             </div>
          </div>

          <div className="bg-white p-16 rounded-[4rem] shadow-sm border border-walnut/5">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-serif font-bold text-walnut">What We Stand For</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="text-center space-y-4">
                   <div className="inline-block p-4 bg-maple-amber/10 rounded-2xl text-maple-amber mb-2"><Leaf /></div>
                   <h4 className="font-bold text-walnut">Sustainability</h4>
                   <p className="text-sm text-warm-gray">Working with local producers to reduce our footprint.</p>
                </div>
                <div className="text-center space-y-4">
                   <div className="inline-block p-4 bg-forest/10 rounded-2xl text-forest mb-2"><Award /></div>
                   <h4 className="font-bold text-walnut">Quality</h4>
                   <p className="text-sm text-warm-gray">No shortcuts. Everything is made from scratch with care.</p>
                </div>
                <div className="text-center space-y-4">
                   <div className="inline-block p-4 bg-gold/10 rounded-2xl text-gold mb-2"><Heart /></div>
                   <h4 className="font-bold text-walnut">Community</h4>
                   <p className="text-sm text-warm-gray">We're more than a restaurant; we're part of your neighborhood.</p>
                </div>
                <div className="text-center space-y-4">
                   <div className="inline-block p-4 bg-charcoal/5 rounded-2xl text-charcoal mb-2"><Shield /></div>
                   <h4 className="font-bold text-walnut">Authenticity</h4>
                   <p className="text-sm text-warm-gray">Genuine recipes passed down through generations.</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
