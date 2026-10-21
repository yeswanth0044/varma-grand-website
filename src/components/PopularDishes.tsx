import React, { useState } from 'react';
import { IndianRupee, Sparkles, Eye, UtensilsCrossed } from 'lucide-react';
import { MenuItem, SAMPLE_MENU_ITEMS } from '../data/restaurantData';

interface PopularDishesProps {
  onSelectDish: (dish: MenuItem) => void;
  onExploreFullMenu: () => void;
}

export const PopularDishes: React.FC<PopularDishesProps> = ({ onSelectDish, onExploreFullMenu }) => {
  // Filter popular items
  const popularItems = SAMPLE_MENU_ITEMS.filter((item) => item.isPopular).slice(0, 6);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-[#781826] text-xs uppercase tracking-widest font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Customer Favorites</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#201516] tracking-tight">
              Popular Dishes
            </h2>
            <p className="text-sm sm:text-base font-telugu text-[#8A5A2B] font-medium mt-1">
              అత్యంత ప్రజాదరణ పొందిన దక్షిణ భారత రుచులు
            </p>
          </div>

          <button
            type="button"
            onClick={onExploreFullMenu}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#781826] hover:text-[#55101A] border border-[#781826]/30 hover:border-[#781826] bg-white rounded-lg transition-colors self-start md:self-auto"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Explore All Categories</span>
          </button>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {popularItems.map((dish) => {
            const hasCustomImage = dish.image && !failedImages[dish.id];

            return (
              <div
                key={dish.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8DED1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-52 sm:h-56 bg-[#F4ECE1] overflow-hidden">
                  {hasCustomImage ? (
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(dish.id)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#FAF0E4] to-[#F1E5D5] flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-[#781826]/10 text-[#781826] flex items-center justify-center mb-2">
                        <UtensilsCrossed className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-display font-bold text-[#201516]">{dish.name}</span>
                      {dish.teluguName && (
                        <span className="text-xs font-telugu text-[#8A5A2B] mt-0.5">{dish.teluguName}</span>
                      )}
                    </div>
                  )}

                  {/* Veg Indicator Stamp */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-[#E5DACD] flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 block"></span>
                    <span className="text-[11px] font-semibold text-emerald-800">Pure Veg</span>
                  </div>

                  {/* Chef Special / Favorite tag */}
                  {dish.isChefSpecial && (
                    <div className="absolute top-3 right-3 bg-[#781826] text-white text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                      Chef Special
                    </div>
                  )}

                  {/* Quick View Button Overlay */}
                  <button
                    type="button"
                    onClick={() => onSelectDish(dish)}
                    className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-medium text-xs backdrop-blur-[1px]"
                  >
                    <span className="px-3 py-1.5 bg-white/95 text-[#201516] rounded-lg shadow font-semibold flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#781826]" /> Quick Details
                    </span>
                  </button>
                </div>

                {/* Content Box */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-bold text-lg text-[#201516] leading-snug group-hover:text-[#781826] transition-colors">
                        {dish.name}
                      </h3>
                      <div className="flex items-center text-base font-bold text-[#781826] shrink-0 font-mono tabular-nums">
                        <IndianRupee className="w-3.5 h-3.5" />
                        <span>{dish.price}</span>
                      </div>
                    </div>

                    {dish.teluguName && (
                      <p className="text-xs font-telugu font-semibold text-[#8A5A2B] mt-0.5">
                        {dish.teluguName}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-[#5C4F4D] line-clamp-2 mt-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F2ECE1] flex items-center justify-between text-xs">
                    <span className="text-[#8A7D79] italic text-[11px]">Freshly prepared</span>
                    <button
                      type="button"
                      onClick={() => onSelectDish(dish)}
                      className="font-semibold text-[#781826] hover:underline underline-offset-2"
                    >
                      View Details &rarr;
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-[#8A7E7A]">
          <span>Note: Prices shown are representative sample rates in the ₹1–200 range and subject to daily menu availability.</span>
        </div>

      </div>
    </section>
  );
};
