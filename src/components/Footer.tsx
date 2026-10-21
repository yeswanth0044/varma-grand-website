import React from 'react';
import { ArrowUp, Phone, MapPin, Clock, Utensils, Heart } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#201516] text-[#EFE7DC] border-t border-[#3A2225] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#3A2225]">
          
          {/* Brand info (4 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#781826] text-white flex items-center justify-center font-display font-bold text-lg border border-[#C89B3C]/30 shadow-xs">
                VG
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                  {RESTAURANT_DATA.name}
                </h3>
                <p className="text-xs font-telugu text-[#D4AF37] font-medium">
                  {RESTAURANT_DATA.teluguName}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#C8BCB9] leading-relaxed max-w-sm">
              Authentic South Indian flavours, comforting tiffins, traditional thali meals, and welcoming hospitality for the whole family.
            </p>

            <div className="pt-1 text-xs text-[#A89895] flex items-center gap-2">
              <span className="px-2.5 py-1 bg-[#331C1F] rounded-md border border-[#4D272C] text-[#EAE0D8] font-mono">
                {RESTAURANT_DATA.priceIndicator}
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#D4AF37]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#C8BCB9] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={RESTAURANT_DATA.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline flex items-center gap-1 text-xs font-semibold pt-1"
                >
                  <MapPin className="w-3 h-3" /> Get Google Maps Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#D4AF37]">
              Contact & Timings
            </h4>
            <div className="space-y-2.5 text-xs text-[#C8BCB9]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{RESTAURANT_DATA.contact.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_DATA.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors font-semibold"
                >
                  {RESTAURANT_DATA.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Daily: 07:00 AM – 10:30 PM</span>
                  <span className="text-[#968884] text-[11px]">Breakfast · Lunch Meals · Dinner Specials</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#968884]">
          <p>
            &copy; {new Date().getFullYear()} {RESTAURANT_DATA.name} ({RESTAURANT_DATA.teluguName}). All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#A69794]">
              Authentic South Indian Cuisine
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#331C1F] hover:bg-[#452428] text-white border border-[#4D272C] transition-colors focus:outline-none"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
