import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, Info, ThumbsUp } from 'lucide-react';
import { CUSTOMER_REVIEWS, RESTAURANT_DATA } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest text-[#781826] font-semibold">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Guest Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#201516] tracking-tight">
            Customer Experiences & Reviews
          </h2>
          <p className="text-base font-telugu font-semibold text-[#8A5A2B]">
            మా అతిథుల అభిప్రాయాలు మరియు అనుభవాలు
          </p>
          <div className="w-16 h-1 bg-[#781826] mx-auto rounded-full"></div>
        </div>

        {/* Directory Stat Callout & Verification Transparency Banner */}
        <div className="max-w-3xl mx-auto bg-white p-5 rounded-2xl border border-[#E5DACD] shadow-xs mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#781826]/10 text-[#781826] flex items-center justify-center font-display font-bold text-xl tabular-nums">
                {RESTAURANT_DATA.listingStats.directoryCount}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#201516]">
                    {RESTAURANT_DATA.listingStats.directoryLabel}
                  </span>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 bg-amber-100 text-amber-800 rounded">
                    Listing Audit
                  </span>
                </div>
                <p className="text-xs text-[#7A6E6A] mt-0.5">
                  Public listing records tracked across maps & local discovery directories.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-amber-500 shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-[#F2ECE1] text-[11px] text-[#8A7D79] flex items-start gap-2">
            <Info className="w-3.5 h-3.5 text-[#8A5A2B] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#554746]">Listing Note:</strong> {RESTAURANT_DATA.listingStats.explanation}
            </p>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E8DED1] shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-xs text-[#8A7E7A] font-medium">
                    {review.date}
                  </span>
                </div>

                <p className="text-sm text-[#4A3E3D] leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#201516] flex items-center gap-1.5">
                    {review.author}
                    <span title="Verified Patron Visit">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    </span>
                  </h4>
                  <span className="text-xs text-[#7A6E6A] block">
                    {review.location}
                  </span>
                </div>

                {review.dishRecommended && (
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-semibold text-[#8A7D79] block">
                      Recommended:
                    </span>
                    <span className="text-xs font-semibold text-[#781826]">
                      {review.dishRecommended}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-[#8A7E7A]">
          <span>Have you dined with us recently? Share your feedback with our management team on your next visit!</span>
        </div>

      </div>
    </section>
  );
};
