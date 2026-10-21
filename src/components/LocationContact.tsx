import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, ExternalLink, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const LocationContact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: 'Lunch',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      guests: '2',
      date: '',
      time: 'Lunch',
      notes: '',
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F5EFEB] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#781826] font-semibold">
            Visit & Connect
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#201516] tracking-tight">
            Location & Contact Information
          </h2>
          <p className="text-base font-telugu font-semibold text-[#8A5A2B]">
            మా చిరునామా, సంప్రదింపు వివరాలు మరియు సమయాలు
          </p>
          <div className="w-16 h-1 bg-[#781826] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Details & Hours Card (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DACD] shadow-sm space-y-6">
              
              {/* Brand Heading */}
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#781826]">
                  {RESTAURANT_DATA.name}
                </h3>
                <p className="text-sm font-telugu font-semibold text-[#8A5A2B] mt-0.5">
                  {RESTAURANT_DATA.teluguName}
                </p>
                <p className="text-xs text-[#7A6E6A] mt-1">
                  Authentic South Indian Cuisine & Family Hospitality
                </p>
              </div>

              {/* Action Buttons: Get Directions & Call Now */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${RESTAURANT_DATA.contact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#781826] hover:bg-[#60121D] rounded-xl shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now: {RESTAURANT_DATA.contact.phoneDisplay}</span>
                </a>

                <a
                  href={RESTAURANT_DATA.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#4A3A39] hover:text-[#781826] bg-[#FAF7F2] hover:bg-[#F2ECE1] border border-[#D5C6B5] hover:border-[#781826] rounded-xl shadow-xs transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#781826]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8A7E7A]" />
                </a>
              </div>

              {/* Contact Information List */}
              <div className="space-y-4 pt-4 border-t border-[#F2ECE1]">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF0E4] text-[#8A5A2B] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#8A7D79]">
                      Restaurant Address
                    </h4>
                    <p className="text-sm text-[#201516] font-medium mt-0.5">
                      {RESTAURANT_DATA.contact.fullAddress}
                    </p>
                    <p className="text-xs text-[#8A7E7A] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{RESTAURANT_DATA.contact.addressVerificationNotice}</span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF0E4] text-[#8A5A2B] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#8A7D79]">
                      Phone Number
                    </h4>
                    <a
                      href={`tel:${RESTAURANT_DATA.contact.phone.replace(/\s+/g, '')}`}
                      className="text-sm text-[#781826] font-semibold hover:underline mt-0.5 block"
                    >
                      {RESTAURANT_DATA.contact.phoneDisplay}
                    </a>
                    <span className="text-xs text-[#8A7E7A]">Available for table enquiries & takeaway orders</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF0E4] text-[#8A5A2B] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#8A7D79]">
                      Email Inquiries
                    </h4>
                    <a
                      href={`mailto:${RESTAURANT_DATA.contact.email}`}
                      className="text-sm text-[#4A3E3D] hover:text-[#781826] mt-0.5 block"
                    >
                      {RESTAURANT_DATA.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="pt-4 border-t border-[#F2ECE1] space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#781826]" />
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#201516]">
                    Daily Operating Hours
                  </h4>
                </div>

                <div className="space-y-2 text-xs">
                  {RESTAURANT_DATA.timings.map((t) => (
                    <div
                      key={t.label}
                      className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#EAE0D4] flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                    >
                      <div>
                        <span className="font-semibold text-[#201516] block">{t.label}</span>
                        <span className="text-[#8A7D79] text-[11px]">{t.days}</span>
                      </div>
                      <span className="font-mono font-bold text-[#781826] text-xs sm:text-right">
                        {t.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Google Maps & Table Enquiry (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Embedded Google Maps */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E5DACD] shadow-sm">
              <div className="p-4 border-b border-[#F2ECE1] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#781826]" />
                  <span className="text-xs font-bold text-[#201516]">Live Map Location</span>
                </div>
                <a
                  href={RESTAURANT_DATA.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#781826] hover:underline flex items-center gap-1"
                >
                  Open in Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="h-64 sm:h-72 w-full bg-[#EBE3D7] relative">
                <iframe
                  title="Varma Grand Family Restaurant Location Map"
                  src={RESTAURANT_DATA.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Quick Table / Dining Enquiry Form */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5DACD] shadow-sm">
              <div className="mb-4">
                <h3 className="text-base font-display font-bold text-[#201516]">
                  Table & Family Dining Enquiry
                </h3>
                <p className="text-xs text-[#7A6E6A] mt-0.5">
                  Visiting with family or a large group? Send a quick enquiry to reserve seats.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-emerald-900 text-base">Enquiry Received!</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you, <strong className="text-emerald-950">{formData.name}</strong>. Our team at Varma Grand has logged your request for {formData.guests} guests on {formData.date || 'your preferred date'}. We will reach out to <span className="font-mono font-medium">{formData.phone}</span> promptly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-100 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#4A3E3D] font-medium mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Varma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#DCD0C2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781826]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#4A3E3D] font-medium mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#DCD0C2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781826]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[#4A3E3D] font-medium mb-1">Number of Guests</label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#DCD0C2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781826]"
                      >
                        <option value="1-2">1–2 Guests</option>
                        <option value="3-4">3–4 Guests (Family)</option>
                        <option value="5-8">5–8 Guests (Large Family)</option>
                        <option value="9+">9+ Guests (Celebration)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#4A3E3D] font-medium mb-1">Meal Preference</label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#DCD0C2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781826]"
                      >
                        <option value="Breakfast">Morning Breakfast</option>
                        <option value="Lunch">Lunch Thali Meals</option>
                        <option value="Dinner">Evening / Dinner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#4A3E3D] font-medium mb-1">Visit Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#DCD0C2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781826]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#4A3E3D] font-medium mb-1">Special Requests / Seating Notes (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. High chair for baby, quiet corner booth, special meals requirement..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#DCD0C2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781826]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#781826] hover:bg-[#60121D] rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Dining Enquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
