import React, { useState, useMemo } from 'react';
import { Search, IndianRupee, Sparkles, Filter, Info, Utensils, Check } from 'lucide-react';
import { MenuItem, MENU_CATEGORIES, SAMPLE_MENU_ITEMS } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenFullMenuModal: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDish, onOpenFullMenuModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    return SAMPLE_MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.teluguName && item.teluguName.includes(searchQuery)) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVeg = !vegOnly || item.isVeg;
      return matchesCategory && matchesSearch && matchesVeg;
    });
  }, [activeCategory, searchQuery, vegOnly]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#F5EFEB] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs uppercase tracking-widest text-[#781826] font-semibold">
            Fresh & Wholesome
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#201516] tracking-tight">
            Our Food Menu
          </h2>
          <p className="text-base font-telugu font-semibold text-[#8A5A2B]">
            తాజా టిఫిన్స్, సాంప్రదాయ భోజనం మరియు ప్రత్యేక రుచులు
          </p>
          <div className="w-16 h-1 bg-[#781826] mx-auto rounded-full"></div>
        </div>

        {/* Informative Sample Notice */}
        <div className="max-w-3xl mx-auto mb-8 p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start gap-3 shadow-xs">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-semibold block">Menu Note for Guests:</span>
            <p className="text-amber-800">
              Dishes, categories, and prices listed below represent our signature South Indian sample menu within the affordable ₹1–200 range. Daily specials and seasonal offerings are prepared fresh every morning.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E5DACD] shadow-sm mb-8 space-y-4">
          
          {/* Top row: Search input & Veg toggle & Full menu button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E7A]" />
              <input
                type="text"
                placeholder="Search dosas, idli, thali meals, coffee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF7F2] border border-[#DCD0C2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#781826] focus:border-[#781826] transition-all text-[#201516]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8A7E7A] hover:text-[#201516] font-medium"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setVegOnly(!vegOnly)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all ${
                  vegOnly
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-800'
                    : 'bg-[#FAF7F2] border-[#DCD0C2] text-[#554746] hover:border-emerald-600'
                }`}
              >
                <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${vegOnly ? 'border-emerald-700 bg-emerald-700 text-white' : 'border-[#8A7D79]'}`}>
                  {vegOnly && <Check className="w-2.5 h-2.5" />}
                </span>
                <span>Pure Veg Only</span>
              </button>

              <button
                type="button"
                onClick={onOpenFullMenuModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#781826] hover:bg-[#60121D] rounded-xl shadow-xs transition-colors whitespace-nowrap"
              >
                <span>View Full Menu</span>
              </button>
            </div>
          </div>

          {/* Category Tabs (Segmented Button Controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar border-t border-[#F2ECE1]">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#781826] text-white shadow-xs font-semibold'
                      : 'text-[#5A4D4B] hover:text-[#201516] hover:bg-[#FAF7F2]'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Dishes Listing Count */}
        <div className="flex items-center justify-between text-xs text-[#7A6E6A] mb-6 px-1">
          <span>
            Showing <strong className="text-[#201516]">{filteredDishes.length}</strong> items
            {activeCategory !== 'all' && ` in ${MENU_CATEGORIES.find((c) => c.id === activeCategory)?.name}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          <span className="font-mono tabular-nums">All prices in INR (₹)</span>
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredDishes.map((dish) => {
              const hasImg = dish.image && !failedImages[dish.id];

              return (
                <div
                  key={dish.id}
                  onClick={() => onSelectDish(dish)}
                  className="group bg-white p-4 rounded-xl border border-[#E8DFD3] hover:border-[#781826]/40 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Optional Image thumbnail if available */}
                    {hasImg && (
                      <div className="h-40 w-full rounded-lg overflow-hidden bg-[#FAF7F2] mb-3">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                          onError={() => handleImageError(dish.id)}
                        />
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-1.5">
                          {dish.isVeg && (
                            <span className="w-3 h-3 rounded-sm border border-emerald-600 flex items-center justify-center p-0.5 shrink-0" title="Vegetarian">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                            </span>
                          )}
                          <h3 className="font-display font-bold text-base text-[#201516] group-hover:text-[#781826] transition-colors leading-tight">
                            {dish.name}
                          </h3>
                        </div>

                        {dish.teluguName && (
                          <p className="text-xs font-telugu text-[#8A5A2B] font-medium mt-0.5 ml-4.5">
                            {dish.teluguName}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center font-bold text-[#781826] text-base font-mono tabular-nums shrink-0">
                        <IndianRupee className="w-3.5 h-3.5" />
                        <span>{dish.price}</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#5C504E] leading-relaxed line-clamp-2">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] text-[#8A7D79]">
                    <span className="capitalize">{dish.category.replace('-', ' & ')}</span>
                    <span className="text-[#781826] font-semibold group-hover:underline">View Details</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl border border-[#E5DACD] text-center max-w-md mx-auto space-y-3">
            <Utensils className="w-10 h-10 text-[#A08E88] mx-auto" />
            <h4 className="font-display font-bold text-base text-[#201516]">No matching dishes found</h4>
            <p className="text-xs text-[#6A5E5B]">
              Try searching for something else or reset your active filters to explore our full South Indian selection.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setVegOnly(false);
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#781826] rounded-lg mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View Full Menu CTA Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenFullMenuModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[#781826] hover:bg-[#60121D] rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <Utensils className="w-5 h-5 text-white/90" />
            <span>View Full Menu & Item Catalog</span>
          </button>
        </div>

      </div>
    </section>
  );
};
