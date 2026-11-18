import React from 'react';
import { Star, Quote, Award, CheckCircle2, TrendingUp } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      author: 'Marcus Vance',
      role: 'Senior Media Buyer, Nexus Growth Agency',
      type: 'Advertiser',
      avatar: 'MV',
      color: 'bg-[#18A1BB]',
      quote: 'We run high-volume sweepstakes and VPN offers globally. TopSolutions Media delivered a 32% lower CPA compared to other ad networks thanks to their surgical carrier targeting and clean bot-free traffic.',
      metric: '32% Lower CPA',
      rating: 5,
    },
    {
      author: 'Elena Rostova',
      role: 'Head of Monetization, StreamPortal Network',
      type: 'Publisher',
      avatar: 'ER',
      color: 'bg-emerald-600',
      quote: 'Their Anti-AdBlock script is an absolute game-changer. We immediately saw a 38% bump in daily earnings from our European desktop visitors, and weekly USDT payouts arrive without a hitch every Tuesday.',
      metric: '+38% Net Revenue',
      rating: 5,
    },
    {
      author: 'David Kim',
      role: 'Founder & Arbitrageur, OmniClicks Media',
      type: 'Advertiser / XML',
      avatar: 'DK',
      color: 'bg-[#0170B9]',
      quote: 'TopSolutions direct XML feeds give us sub-15ms response times. We route millions of clicks daily, and their smart algorithm consistently matches our highest-bidding landing pages.',
      metric: '4.8M Daily Clicks',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18A1BB]/10 border border-[#18A1BB]/30 text-xs font-bold text-[#003E53] mb-4">
            <Award className="w-3.5 h-3.5 text-[#18A1BB]" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003E53] tracking-tight mb-4">
            Trusted by World-Class Media Buyers & Top Webmasters
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See how programmatic partners worldwide achieve record-breaking ROIs and monetize every impression with TopSolutions Media.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div 
              key={i}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#18A1BB]/50 hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                {/* Rating & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className={`text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded-full ${
                    r.type === 'Publisher' ? 'bg-emerald-100 text-emerald-800' : 'bg-[#18A1BB]/15 text-[#003E53]'
                  }`}>
                    {r.type}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#18A1BB]/30 mb-3" />
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${r.color} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                    {r.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#003E53]">{r.author}</h4>
                    <p className="text-[11px] text-slate-500">{r.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Result</div>
                  <div className="text-xs font-extrabold text-[#18A1BB]">{r.metric}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
