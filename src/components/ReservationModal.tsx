import React, { useState } from 'react';
import { X, Calendar, Users, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '4',
    date: '',
    timeSlot: 'Lunch (12:30 PM)',
    specialRequests: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E5DACD] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#201516] text-[#FAF7F2] border-b border-[#3A2225] flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white">
              Table & Family Dining Enquiry
            </h3>
            <p className="text-xs font-telugu text-[#D4AF37] mt-0.5">
              {RESTAURANT_DATA.name} · {RESTAURANT_DATA.teluguName}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-display font-bold text-[#201516]">
                Enquiry Successfully Logged!
              </h4>
              <p className="text-xs text-[#554746] leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. We have noted your table enquiry for <strong>{formData.guests} guests</strong> on {formData.date || 'your scheduled visit'}. A member of our staff will reach out to <strong>{formData.phone}</strong> to confirm your reservation.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#781826] hover:bg-[#60121D] rounded-xl transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#3A2E2C] font-semibold mb-1">
                  Guest / Family Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Varma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#DCD0C2] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#781826]"
                />
              </div>

              <div>
                <label className="block text-[#3A2E2C] font-semibold mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 94400 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#DCD0C2] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#781826]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#3A2E2C] font-semibold mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#DCD0C2] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#781826]"
                  >
                    <option value="1-2">1–2 Persons</option>
                    <option value="3-4">3–4 Persons</option>
                    <option value="5-8">5–8 Persons (Family)</option>
                    <option value="9-15">9–15 Persons (Group)</option>
                    <option value="16+">16+ Persons (Party)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#3A2E2C] font-semibold mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#DCD0C2] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#781826]"
                  >
                    <option value="Breakfast (8:30 AM)">Breakfast (8:30 AM)</option>
                    <option value="Lunch (12:30 PM)">Lunch (12:30 PM)</option>
                    <option value="Lunch (1:30 PM)">Lunch (1:30 PM)</option>
                    <option value="Dinner (7:30 PM)">Dinner (7:30 PM)</option>
                    <option value="Dinner (8:30 PM)">Dinner (8:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#3A2E2C] font-semibold mb-1">
                  Date of Visit
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#DCD0C2] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#781826]"
                />
              </div>

              <div>
                <label className="block text-[#3A2E2C] font-semibold mb-1">
                  Special Notes / Occasion (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Birthday lunch, senior citizen wheelchair access, quiet seating..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#DCD0C2] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#781826]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 text-xs font-semibold text-white bg-[#781826] hover:bg-[#60121D] rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Table Request</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-3 px-4 text-xs font-semibold text-[#554746] bg-[#FAF7F2] border border-[#D5C6B5] rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
