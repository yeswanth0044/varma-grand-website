import React, { useState } from 'react';
import { Utensils, MapPin, Sparkles, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF7F2] pt-6 pb-16 lg:py-20 border-b border-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Price indicator & Telugu lead */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#781826]">
              <span className="font-semibold px-3 py-1 bg-[#781826]/10 rounded-md border border-[#781826]/20">
                {RESTAURANT_DATA.priceIndicator}
              </span>
              <span className="text-[#A08E88] hidden sm:inline">|</span>
              <span className="font-telugu font-semibold text-[#8A5A2B]">
                వర్మ గ్రాండ్ ఫ్యామిలీ రెస్టారెంట్
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-display font-bold text-[#201516] tracking-tight leading-[1.15] text-balance">
                Authentic South Indian Flavours, <span className="text-[#781826] italic font-serif">Made with Love</span>
              </h1>
              
              <p className="text-lg sm:text-xl font-telugu font-medium text-[#7A361C] leading-snug">
                {RESTAURANT_DATA.teluguSubtitle}
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#554746] max-w-2xl leading-relaxed">
              {RESTAURANT_DATA.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('#menu')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#781826] hover:bg-[#60121D] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
              >
                <Utensils className="w-5 h-5 text-white/90" />
                <span>Explore Our Menu</span>
              </button>

              <a
                href={RESTAURANT_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-[#4A3A39] hover:text-[#781826] bg-[#FFFFFF] hover:bg-[#F8F4EE] border border-[#D5C6B5] hover:border-[#781826] rounded-xl shadow-sm transition-all"
              >
                <MapPin className="w-5 h-5 text-[#781826]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Key Quality Assurances */}
            <div className="pt-6 border-t border-[#EAE1D5] grid grid-cols-3 gap-4 text-xs sm:text-sm text-[#4A3E3D]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FAF0E4] text-[#8A5A2B] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[#201516]">Fresh Daily</span>
                  <span className="text-[#7A6E6A] text-xs">Pure Desi Ghee & Spices</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FAF0E4] text-[#8A5A2B] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[#201516]">7 AM – 10:30 PM</span>
                  <span className="text-[#7A6E6A] text-xs">All 7 Days Open</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FAF0E4] text-[#8A5A2B] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[#201516]">Family Friendly</span>
                  <span className="text-[#7A6E6A] text-xs">Warm Hospitality</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Image Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative border/glow frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#781826]/15 via-[#C89B3C]/20 to-[#781826]/10 rounded-3xl filter blur-sm"></div>

              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-[#E8DED1]">
                {!imageError ? (
                  <img
                    src="/src/assets/images/hero_south_indian_spread_1792551192076.jpg"
                    alt="Authentic South Indian food spread at Varma Grand Family Restaurant"
                    className="w-full h-80 sm:h-96 lg:h-[460px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-80 sm:h-96 lg:h-[460px] bg-gradient-to-br from-[#781826] to-[#4A0E16] flex flex-col items-center justify-center text-white p-6 text-center">
                    <Utensils className="w-16 h-16 text-[#C89B3C] mb-4" />
                    <h3 className="text-xl font-display font-bold">Varma Grand</h3>
                    <p className="text-sm font-telugu mt-1 text-[#F5EFEB]">వర్మ గ్రాండ్ ఫ్యామిలీ రెస్టారెంట్</p>
                    <p className="text-xs text-white/80 mt-2 max-w-xs">Traditional South Indian Breakfast, Meals & Specialties</p>
                  </div>
                )}

                {/* Overlaid highlight card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#EDE2D5] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#781826] text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#FAF7F2]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#201516]">
                        Grand South Indian Feast
                      </h4>
                      <p className="text-[11px] text-[#7A6E6A]">
                        Crispy Ghee Dosas, Steamed Idlis & Thali Meals
                      </p>
                    </div>
                  </div>
                  <div className="text-right pl-2 shrink-0">
                    <span className="text-xs font-semibold text-[#781826] block">From ₹35</span>
                    <span className="text-[10px] text-[#887874]">Fresh Daily</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
