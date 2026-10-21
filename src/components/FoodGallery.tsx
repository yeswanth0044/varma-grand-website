import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const FoodGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'dishes', label: 'South Indian Dishes' },
    { id: 'ambience', label: 'Restaurant Ambience' },
    { id: 'family', label: 'Family Dining' },
    { id: 'presentation', label: 'Food Presentation' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest text-[#781826] font-semibold">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#201516] tracking-tight">
            Food & Ambience Gallery
          </h2>
          <p className="text-base font-telugu font-semibold text-[#8A5A2B]">
            వంటకాల మరియు రెస్టారెంట్ వాతావరణ చిత్రమాలిక
          </p>
          <div className="w-16 h-1 bg-[#781826] mx-auto rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => {
                setActiveFilter(filter.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-[#781826] text-white shadow-xs font-semibold'
                  : 'bg-white text-[#5A4D4B] hover:text-[#201516] border border-[#E5DACD] hover:bg-[#FAF7F2]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#F4ECE1] border border-[#E8DED1] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-medium uppercase tracking-wider text-[#EAD8C0] mb-1">
                  {item.category.toUpperCase()}
                </span>
                <h3 className="text-base font-display font-bold leading-tight">
                  {item.title}
                </h3>
                {item.teluguTitle && (
                  <p className="text-xs font-telugu text-[#D4AF37] mt-0.5">
                    {item.teluguTitle}
                  </p>
                )}
                <p className="text-xs text-white/80 line-clamp-1 mt-1">
                  {item.caption}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#FAF7F2] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to view full photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-[#8A7E7A]">
          <span>Tip: Click on any photo to open the interactive full-screen viewer.</span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 transition-colors z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 transition-colors z-10"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="max-w-4xl w-full bg-[#18181B] rounded-2xl overflow-hidden border border-white/15 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 sm:p-6 bg-[#201516] text-[#FAF7F2] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C89B3C] font-semibold block mb-0.5">
                  {currentItem.category}
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold">
                  {currentItem.title}
                </h3>
                {currentItem.teluguTitle && (
                  <p className="text-sm font-telugu text-[#FAF7F2]/90 mt-0.5">
                    {currentItem.teluguTitle}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
                  {currentItem.caption}
                </p>
              </div>

              <div className="text-xs text-white/60 font-mono shrink-0 self-end sm:self-center">
                Photo {lightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
