import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E9DFD3]'
          : 'bg-[#FAF7F2] border-b border-[#EFE7DC]'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="bg-[#781826] text-[#FAF7F2] text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-4">
          <span className="hidden sm:inline">వర్మ గ్రాండ్ ఫ్యామిలీ రెస్టారెంట్</span>
          <span className="hidden sm:inline">·</span>
          <span>{RESTAURANT_DATA.priceIndicator}</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">Pure South Indian Delicacies Daily from 7:00 AM</span>
          <a
            href={`tel:${RESTAURANT_DATA.contact.phone.replace(/\s+/g, '')}`}
            className="sm:hidden font-semibold underline underline-offset-2 flex items-center gap-1"
          >
            <Phone className="w-3 h-3" /> Call
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Restaurant Brand Lockup */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col justify-center shrink-0 focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#781826] text-white flex items-center justify-center font-display font-bold text-lg shadow-sm group-hover:bg-[#60121D] transition-colors">
                VG
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-display font-bold text-[#781826] tracking-tight leading-none block">
                  {RESTAURANT_DATA.shortName}
                </span>
                <span className="text-xs text-[#8A5A2B] font-telugu font-medium tracking-normal block leading-tight mt-0.5">
                  {RESTAURANT_DATA.teluguName}
                </span>
              </div>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A3E3D]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#781826] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#781826]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Contact */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESTAURANT_DATA.contact.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#781826] bg-[#781826]/10 hover:bg-[#781826]/15 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Call restaurant"
            >
              <Phone className="w-3.5 h-3.5 text-[#781826]" />
              <span>{RESTAURANT_DATA.contact.phoneDisplay}</span>
            </a>

            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-[#781826] hover:bg-[#60121D] rounded-lg shadow-sm transition-all hover:shadow whitespace-nowrap shrink-0"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>View Menu</span>
            </a>

            {onOpenReservation && (
              <button
                type="button"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#4A3E3D] hover:text-[#781826] border border-[#D5C6B5] hover:border-[#781826] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Table Enquiry
              </button>
            )}
          </div>

          {/* Mobile Actions: Menu Button & Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#781826] rounded-lg shadow-sm whitespace-nowrap shrink-0"
            >
              View Menu
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A3E3D] hover:text-[#781826] focus:outline-none focus:ring-2 focus:ring-[#781826] rounded-lg"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E9DFD3] bg-[#FAF7F2] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <div className="pb-2 border-b border-[#EFE7DC] text-xs text-[#7A6E6A]">
              <span>వర్మ గ్రాండ్ ఫ్యామిలీ రెస్టారెంట్ · South Indian Cuisine</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-[#3A2E2C] hover:bg-[#F2ECE1] hover:text-[#781826] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#E9DFD3] grid grid-cols-2 gap-2">
              <a
                href={`tel:${RESTAURANT_DATA.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-[#781826] bg-[#781826]/10 rounded-lg text-center"
              >
                <Phone className="w-3.5 h-3.5" /> Call Restaurant
              </a>
              <a
                href={RESTAURANT_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-white bg-[#781826] rounded-lg text-center"
              >
                <MapPin className="w-3.5 h-3.5" /> Directions
              </a>
            </div>

            {onOpenReservation && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full mt-2 py-2 text-sm font-semibold text-[#781826] border border-[#781826] rounded-lg"
              >
                Make Table / Family Enquiry
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
