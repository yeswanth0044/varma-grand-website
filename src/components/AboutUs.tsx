import React, { useState } from 'react';
import { Utensils, Users, IndianRupee, HeartHandshake } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const AboutUs: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const highlights = [
    {
      title: "South Indian Cuisine",
      telugu: "దక్షిణ భారత వంటకాలు",
      description: "Rooted in authentic regional recipes, from crisp ghee-roasted dosas and steamed fluffy idlis to aromatic sambar, rasam, and traditional thali meals.",
      icon: Utensils,
    },
    {
      title: "Family Dining",
      telugu: "కుటుంబ భోజనం",
      description: "Designed as a comfortable and welcoming space where families, children, and elderly guests can relax and enjoy wholesome meals together.",
      icon: Users,
    },
    {
      title: "Value for Money",
      telugu: "సరసమైన ధరలు",
      description: "Generous, satisfying portions at honest and affordable prices in the ₹1–200 range, making quality South Indian dining accessible every day.",
      icon: IndianRupee,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F5EFEB] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#781826] font-semibold">
            About Our Restaurant
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#201516] tracking-tight">
            {RESTAURANT_DATA.aboutUs.heading}
          </h2>
          <p className="text-base sm:text-lg font-telugu font-semibold text-[#8A5A2B]">
            {RESTAURANT_DATA.aboutUs.teluguHeading}
          </p>
          <div className="w-16 h-1 bg-[#781826] mx-auto rounded-full"></div>
        </div>

        {/* Content Layout: Image + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Image & Dining Atmosphere (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E3D7C8] bg-white">
              {!imgError ? (
                <img
                  src="/src/assets/images/about_family_dining_1792551192687.jpg"
                  alt="Family dining room atmosphere at Varma Grand Family Restaurant"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-80 sm:h-96 lg:h-[420px] bg-[#781826]/10 flex flex-col items-center justify-center p-6 text-center text-[#781826]">
                  <Users className="w-12 h-12 mb-3 text-[#781826]" />
                  <p className="font-display font-bold text-lg">Welcoming Family Seating</p>
                  <p className="text-xs text-[#554746] mt-1">Comfortable and hygienic dining environment</p>
                </div>
              )}
              
              <div className="p-4 bg-white border-t border-[#EFE7DC]">
                <div className="flex items-center gap-2 text-xs text-[#6A5E5B]">
                  <HeartHandshake className="w-4 h-4 text-[#781826]" />
                  <span>Warm, courteous hospitality for every family gathering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text & 3 Visual Highlights (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#4A3E3D] leading-relaxed">
              <p>
                At <strong className="text-[#201516] font-semibold">Varma Grand Family Restaurant (వర్మ గ్రాండ్ ఫ్యామిలీ రెస్టారెంట్)</strong>, our mission is simple: to serve flavorful, authentic South Indian cuisine made with fresh ingredients, traditional spices, and genuine care.
              </p>
              <p className="text-sm sm:text-base text-[#554746]">
                Whether you stop by for a morning breakfast of crispy ghee roast dosa and aromatic filter coffee, or bring your entire family for a relaxed afternoon thali lunch or evening tiffin, you will always be greeted with warmth and wholesome food.
              </p>
            </div>

            {/* 3 Visual Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-white border border-[#E8DED1] shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#781826]/10 text-[#781826] flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#201516] mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs font-telugu text-[#8A5A2B] font-medium mb-2">
                      {item.telugu}
                    </p>
                    <p className="text-xs text-[#655856] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 text-xs text-[#7A6E6A]">
              <span>Notice: Operational information, prices, and hours are kept up to date for guest convenience.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
