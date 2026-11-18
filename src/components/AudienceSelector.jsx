import React, { useState } from 'react';
import { 
  TrendingUp, Zap, ShieldCheck, Target, DollarSign, 
  Clock, Users, Sliders, Globe, Layers, ArrowRight, CheckCircle2 
} from 'lucide-react';

export default function AudienceSelector({ onOpenAuth }) {
  const [activeTab, setActiveTab] = useState('advertisers');

  const advertiserFeatures = [
    {
      title: 'Performance-First Pricing Models',
      desc: 'Flexibility across CPM, CPC, CPA Goal, CPL, CPI, and Smart Cost per View. Only pay for verified traffic that drives measurable conversions.',
      icon: DollarSign,
    },
    {
      title: 'Surgical Precision Targeting',
      desc: 'Filter by Country, City, Carrier (Wi-Fi vs 4G/5G), OS, Browser, Device, IP ranges, dayparting, and custom whitelist/blacklist tokens.',
      icon: Target,
    },
    {
      title: 'Multi-Tier Anti-Fraud Shield',
      desc: 'AI-driven heuristic bot filtering and real-time click validation ensuring 99.8% authentic human traffic for every campaign dollar.',
      icon: ShieldCheck,
    },
    {
      title: 'Smart Bidding & CPA Goal',
      desc: 'Automated auto-optimization algorithms adjust your bids across sub-sources in real time to meet your target acquisition cost.',
      icon: Sliders,
    },
    {
      title: 'Dedicated Account Strategists',
      desc: 'Get matched with a seasoned media buying specialist for custom whitelist curation, bid guidance, and vertical recommendations.',
      icon: Users,
    },
    {
      title: 'OpenRTB 2.5 & XML Feeds',
      desc: 'Direct programmatic connectivity via high-throughput XML endpoints and OpenRTB protocol with sub-12ms response latency.',
      icon: Layers,
    },
  ];

  const publisherFeatures = [
    {
      title: 'Guaranteed 100% Global Fill Rate',
      desc: 'Never waste a single impression. Premium direct demand and programmatic backfills monetize traffic from every country on earth.',
      icon: Globe,
    },
    {
      title: 'Proprietary Anti-AdBlock Technology',
      desc: 'Bypass modern browser adblockers safely and recover 25% to 40% of previously lost advertising revenue without compromising UX.',
      icon: Zap,
    },
    {
      title: 'Competitive eCPMs Across All Niches',
      desc: 'Dynamic real-time auctions pitch thousands of global advertisers against each other to award you the maximum possible revenue per view.',
      icon: TrendingUp,
    },
    {
      title: 'Fast & Flexible Payouts',
      desc: 'Never wait for your money. Reliable Net-7 and Net-15 schedules via Wire Transfer, USDT (TRC20/ERC20), Paxum, PayPal, and Capitalist.',
      icon: Clock,
    },
    {
      title: 'Clean, Safe & Compliant Ads',
      desc: '24/7 automated and manual screening ensures zero malware, zero phishing, and 100% compliance with Google Webmaster and SEO guidelines.',
      icon: ShieldCheck,
    },
    {
      title: 'Lightweight & Async Integration',
      desc: 'Our single-tag universal code is under 2KB, executes asynchronously, and maintains a 100 Core Web Vitals score on your website.',
      icon: Sliders,
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Section Anchors */}
        <div id="advertisers" className="pt-2"></div>
        <div id="publishers" className="pt-2"></div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003E53] tracking-tight mb-4">
            Engineered for Both Sides of the Media Equation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Whether you are buying millions of targeted clicks or maximizing every visitor impression on your website, TopSolutions Media delivers institutional-grade ad tech.
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setActiveTab('advertisers')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeTab === 'advertisers'
                    ? 'bg-[#003E53] text-white shadow-lg shadow-[#003E53]/25'
                    : 'text-slate-600 hover:text-[#003E53]'
                }`}
              >
                <TrendingUp className="w-4 h-4 text-[#18A1BB]" />
                TopSolutions for Advertisers
              </button>
              <button
                onClick={() => setActiveTab('publishers')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeTab === 'publishers'
                    ? 'bg-[#003E53] text-white shadow-lg shadow-[#003E53]/25'
                    : 'text-slate-600 hover:text-[#003E53]'
                }`}
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                TopSolutions for Publishers
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Content Panel */}
        {activeTab === 'advertisers' ? (
          <div className="space-y-12 animate-fadeIn">
            {/* Top Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-[#002633] via-[#003E53] to-[#0170B9] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#18A1BB] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  High-Performance Traffic Buying
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold mt-4 mb-4 tracking-tight leading-tight">
                  Reach Verified Global Buyers With Predictable CPA & High ROI
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                  Access 4.8B+ daily desktop and mobile impressions across 240+ countries. Combine surgical micro-targeting with automated optimization to scale profitable campaigns in days.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => onOpenAuth('advertiser')}
                    className="px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#18A1BB] to-[#6EC1E4] text-[#002633] hover:brightness-110 shadow-lg shadow-[#18A1BB]/30 flex items-center gap-2 group transition"
                  >
                    <span>Create Advertiser Account</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="#targeting"
                    className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center gap-2 transition"
                  >
                    View Targeting Options
                  </a>
                </div>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advertiserFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div 
                    key={i}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#18A1BB]/50 hover:shadow-lg hover:shadow-[#18A1BB]/5 transition group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#18A1BB] shadow-sm mb-4 group-hover:bg-[#003E53] group-hover:text-white transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#003E53] mb-2">{f.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-12 animate-fadeIn">
            {/* Top Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-[#002633] via-[#003E53] to-[#0d7377] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#61CE70] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  Maximum Yield Monetization
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold mt-4 mb-4 tracking-tight leading-tight">
                  Turn Every Web & Mobile Visitor Into Consistent, Predictable Revenue
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                  Direct connection to premium global brands, ad agencies, and programmatic DSPs. Protect user experience with lightweight tags while enjoying 100% fill rate and timely payments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => onOpenAuth('publisher')}
                    className="px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#61CE70] to-[#18A1BB] text-[#002633] hover:brightness-110 shadow-lg shadow-[#61CE70]/20 flex items-center gap-2 group transition"
                  >
                    <span>Start Monetizing as Publisher</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="#calculator"
                    className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center gap-2 transition"
                  >
                    Calculate Revenue
                  </a>
                </div>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publisherFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div 
                    key={i}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#10B981]/50 hover:shadow-lg hover:shadow-[#10B981]/5 transition group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm mb-4 group-hover:bg-[#003E53] group-hover:text-emerald-400 transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#003E53] mb-2">{f.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
