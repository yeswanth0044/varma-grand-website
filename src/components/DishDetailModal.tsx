import React from 'react';
import { X, IndianRupee, Phone, CheckCircle, Utensils, Sparkles } from 'lucide-react';
import { MenuItem, RESTAURANT_DATA } from '../data/restaurantData';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose }) => {
  if (!dish) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E5DACD] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Media */}
        <div className="relative h-56 sm:h-64 bg-[#F5EFEB] overflow-hidden">
          {dish.image ? (
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#FAF0E4] to-[#F0E4D2]">
              <div className="w-14 h-14 rounded-full bg-[#781826]/10 text-[#781826] flex items-center justify-center mb-2">
                <Utensils className="w-7 h-7" />
              </div>
              <span className="font-display font-bold text-lg text-[#201516]">{dish.name}</span>
            </div>
          )}

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            aria-label="Close dish preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Veg tag */}
          {dish.isVeg && (
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-xs border border-[#E5DACD] flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 block"></span>
              <span className="text-xs font-semibold text-emerald-800">100% Pure Veg</span>
            </div>
          )}

          {dish.isChefSpecial && (
            <div className="absolute bottom-3 left-3 bg-[#781826] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
              Chef Recommended
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-display font-bold text-[#201516] leading-snug">
                {dish.name}
              </h3>
              {dish.teluguName && (
                <p className="text-sm font-telugu font-semibold text-[#8A5A2B] mt-0.5">
                  {dish.teluguName}
                </p>
              )}
            </div>

            <div className="flex items-center text-xl font-bold text-[#781826] font-mono tabular-nums shrink-0 bg-[#FAF7F2] px-3 py-1 rounded-lg border border-[#EFE7DC]">
              <IndianRupee className="w-4 h-4" />
              <span>{dish.price}</span>
            </div>
          </div>

          <p className="text-sm text-[#554746] leading-relaxed">
            {dish.description}
          </p>

          <div className="bg-[#FAF7F2] p-3.5 rounded-xl border border-[#EFE7DC] space-y-2 text-xs text-[#6A5E5B]">
            <div className="flex items-center gap-2 text-[#201516] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>Accompaniments & Preparation</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Served fresh with traditional slow-simmered lentil sambar, freshly ground coconut chutney, spicy tomato chutney, and pure ghee seasoning.
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_DATA.contact.phone.replace(/\s+/g, '')}`}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#781826] hover:bg-[#60121D] rounded-xl shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call to Order / Inquire</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="py-3 px-4 text-xs sm:text-sm font-semibold text-[#554746] hover:text-[#201516] bg-[#FAF7F2] hover:bg-[#F2ECE1] border border-[#D5C6B5] rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
