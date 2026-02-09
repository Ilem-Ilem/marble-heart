
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, ZoomIn } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="pt-24 min-h-screen bg-cream">
       <section className="py-20 text-center container mx-auto px-4">
          <span className="uppercase tracking-[0.4em] font-bold text-xs text-maple-amber mb-4 block">Visual Stories</span>
          <h1 className="text-5xl font-serif font-bold text-walnut mb-6">Our Hearthside Gallery</h1>
          <p className="text-warm-gray max-w-2xl mx-auto text-lg">A window into our kitchen, our space, and the moments we share with you.</p>
       </section>

       <section className="pb-24 container mx-auto px-4 md:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
             {GALLERY_IMAGES.map(img => (
                <div 
                  key={img.id} 
                  className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-2xl transition-all break-inside-avoid"
                  onClick={() => setSelectedImg(img.url)}
                >
                   <img src={img.url} alt={img.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-walnut/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-3 bg-cream/20 backdrop-blur-md rounded-full text-white">
                        <ZoomIn />
                      </div>
                      <div className="absolute bottom-4 left-4">
                         <span className="text-white text-xs font-bold uppercase tracking-widest">{img.category}</span>
                         <h4 className="text-white font-serif text-lg">{img.title}</h4>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </section>

       {/* Lightbox */}
       {selectedImg && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
             <button className="absolute top-8 right-8 text-white p-2 hover:scale-110 transition-transform">
                <X size={40} />
             </button>
             <img 
               src={selectedImg} 
               className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
               alt="Enlarged" 
               onClick={(e) => e.stopPropagation()}
             />
          </div>
       )}
    </div>
  );
};

export default GalleryPage;
