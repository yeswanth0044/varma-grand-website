import React, { useState } from 'react';
import { X, Search, IndianRupee, Printer, UtensilsCrossed, Check } from 'lucide-react';
import { MenuItem, MENU_CATEGORIES, SAMPLE_MENU_ITEMS, RESTAURANT_DATA } from '../data/restaurantData';

interface FullMenuCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDish: (dish: MenuItem) => void;
}

export const FullMenuCatalogModal: React.FC<FullMenuCatalogModalProps> = ({
  isOpen,
  onClose,
  onSelectDish,
}) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  if (!isOpen) return null;

  const filtered = SAMPLE_MENU_ITEMS.filter((item) => {
    const matchCat = selectedCat === 'all' || item.category === selectedCat;
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.teluguName && item.teluguName.includes(search)) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-[#E5DACD] animate-in fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 bg-[#201516] text-[#FAF7F2] border-b border-[#3A2427] flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#781826] text-white flex items-center justify-center font-display font-bold text-sm">
                VG
              </span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                Full Restaurant Menu Catalog
              </h3>
            </div>
            <p className="text-xs font-telugu text-[#D4AF37] mt-0.5">
              {RESTAURANT_DATA.name} · {RESTAURANT_DATA.teluguName}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              title="Print menu"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Menu</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close menu modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-4 bg-white border-b border-[#E8DFD3] space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E7A]" />
            <input
              type="text"
              placeholder="Search complete menu items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#DCD0C2] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#781826]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCat === cat.id
                    ? 'bg-[#781826] text-white font-semibold'
                    : 'bg-[#FAF7F2] text-[#554746] hover:bg-[#F0E6D8]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Dishes List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onClose();
                    onSelectDish(item);
                  }}
                  className="p-3.5 rounded-xl bg-white border border-[#EAE1D5] hover:border-[#781826] hover:shadow-xs transition-all cursor-pointer flex items-start justify-between gap-3"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-1.5">
                      {item.isVeg && (
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 block shrink-0" />
                      )}
                      <h4 className="text-sm font-bold text-[#201516] leading-tight hover:text-[#781826]">
                        {item.name}
                      </h4>
                    </div>
                    {item.teluguName && (
                      <p className="text-xs font-telugu text-[#8A5A2B] ml-4 font-medium">
                        {item.teluguName}
                      </p>
                    )}
                    <p className="text-[11px] text-[#6A5E5B] line-clamp-1 ml-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="flex items-center font-bold text-sm text-[#781826] font-mono tabular-nums">
                      <IndianRupee className="w-3.5 h-3.5" />
                      <span>{item.price}</span>
                    </div>
                    <span className="text-[10px] text-[#9A8E8A] capitalize">
                      {item.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center text-xs text-[#8A7E7A]">
              No dishes found matching your search.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F2ECE1] border-t border-[#E5DACD] text-xs text-[#7A6E6A] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>* Representative menu catalog. Fresh items prepared daily.</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#781826]">₹1–200 Price Range</span>
            <span>·</span>
            <a
              href={`tel:${RESTAURANT_DATA.contact.phone.replace(/\s+/g, '')}`}
              className="text-[#781826] font-bold hover:underline"
            >
              Call to Order: {RESTAURANT_DATA.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
