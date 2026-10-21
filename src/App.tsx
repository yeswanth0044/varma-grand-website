import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { PopularDishes } from './components/PopularDishes';
import { MenuSection } from './components/MenuSection';
import { FoodGallery } from './components/FoodGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { FullMenuCatalogModal } from './components/FullMenuCatalogModal';
import { ReservationModal } from './components/ReservationModal';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleExploreFullMenu = () => {
    setIsFullMenuOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#221C1D]">
      {/* Sticky Navigation */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Us Section */}
        <AboutUs />

        {/* Popular Dishes Section */}
        <PopularDishes
          onSelectDish={(dish) => setSelectedDish(dish)}
          onExploreFullMenu={handleExploreFullMenu}
        />

        {/* Interactive Food Menu Section */}
        <MenuSection
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenFullMenuModal={() => setIsFullMenuOpen(true)}
        />

        {/* Food & Ambience Gallery */}
        <FoodGallery />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Customer Reviews & Listing Transparency */}
        <ReviewsSection />

        {/* Location, Contact & Google Maps */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />

      <FullMenuCatalogModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
        onSelectDish={(dish) => setSelectedDish(dish)}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
