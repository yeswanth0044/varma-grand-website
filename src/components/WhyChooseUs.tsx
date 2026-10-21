import React from 'react';
import { Utensils, Users, Coins, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Utensils,
    Users,
    Coins,
    MapPin,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F5EFEB] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest text-[#781826] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Commitment</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#201516] tracking-tight">
            Why Choose Varma Grand?
          </h2>
          <p className="text-base font-telugu font-semibold text-[#8A5A2B]">
            ఎందుకు వర్మ గ్రాండ్ రెస్టారెంట్‌ను ఎంచుకోవాలి?
          </p>
          <div className="w-16 h-1 bg-[#781826] mx-auto rounded-full"></div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANT_DATA.whyChooseUs.map((card, idx) => {
            const Icon = iconMap[card.icon] || Utensils;

            return (
              <div
                key={card.id}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5DACD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#781826]/10 text-[#781826] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#C89B3C]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-[#201516] mb-1">
                    {card.title}
                  </h3>

                  <p className="text-xs font-telugu font-semibold text-[#8A5A2B] mb-3">
                    {card.telugu}
                  </p>

                  <p className="text-xs sm:text-sm text-[#5C504E] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F2ECE1] text-[11px] text-[#8A7D79]">
                  Verified Hospitality Standard
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
