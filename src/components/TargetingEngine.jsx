import React, { useState } from 'react';
import { 
  Globe2, Smartphone, Monitor, Radio, Compass, 
  Clock, Hash, SlidersHorizontal, ShieldAlert, Check, Sparkles 
} from 'lucide-react';

export default function TargetingEngine() {
  const [activeTab, setActiveTab] = useState('geo');

  const targetingOptions = [
    {
      id: 'geo',
      title: 'Geographic & City Level',
      desc: 'Target users across 240+ countries down to specific regions, states, cities, metro codes, and zip codes.',
      icon: Globe2,
      example: 'United States > California > Los Angeles (DMA)',
      tags: ['Tier 1 / 2 / 3', 'Country ISO', 'City / Metro', 'IP Geolocation'],
    },
    {
      id: 'device',
      title: 'Device & Screen Resolution',
      desc: 'Filter between Desktop, Mobile Smart Devices, Tablets, and specific screen pixel densities.',
      icon: Smartphone,
      example: 'Apple iPhone 15 Pro, Samsung Galaxy S24, iPads',
      tags: ['Desktop', 'Smartphone', 'Tablet', 'High-DPI Screens'],
    },
    {
      id: 'os',
      title: 'Operating System & Version',
      desc: 'Pinpoint specific OS releases to align with software compatibility and native in-app experiences.',
      icon: Monitor,
      example: 'iOS 17.4+, Android 14, macOS Sonoma, Windows 11',
      tags: ['iOS', 'Android', 'Windows', 'macOS', 'Linux'],
    },
    {
      id: 'carrier',
      title: 'Telecom Carrier & Connection',
      desc: 'Target by mobile network operators (MNOs), connection speeds, or separate Wi-Fi from 3G/4G/5G cellular.',
      icon: Radio,
      example: 'Verizon, AT&T, Vodafone, T-Mobile (Cellular Only)',
      tags: ['Wi-Fi / Fixed', '3G/4G/5G Cellular', 'Direct Carrier Billing', 'ISP / ASN'],
    },
    {
      id: 'browser',
      title: 'Browser & System Language',
      desc: 'Direct traffic by browser engine (Chrome, Safari, Firefox, Edge, Opera) and user language headers.',
      icon: Compass,
      example: 'Google Chrome v120+, Safari Mobile (English & Spanish)',
      tags: ['Chrome', 'Safari', 'Firefox', 'Multi-Language UI'],
    },
    {
      id: 'frequency',
      title: 'Frequency & Budget Capping',
      desc: 'Prevent ad burnout and stretch ad spend by limiting impressions per unique IP over 1h, 12h, or 24h intervals.',
      icon: SlidersHorizontal,
      example: '1 Impression / 24 Hours per unique user IP',
      tags: ['Unique User Cap', 'Daily Budget Cap', 'Total Spend Cap', 'Pacing Control'],
    },
    {
      id: 'schedule',
      title: 'Dayparting & Timezone Bidding',
      desc: 'Schedule campaigns to run during local peak conversion hours according to the user’s regional timezone.',
      icon: Clock,
      example: 'Mon–Fri 09:00–21:00 (Target Geo Timezone)',
      tags: ['Hourly Schedule', 'Weekend Boost', 'Local Time Matching', 'Bid Multipliers'],
    },
    {
      id: 'whitelist',
      title: 'Whitelists, Blacklists & Tokens',
      desc: 'Granular sub-source control: whitelist top ROI publisher zones or instantly prune low-performing placement IDs.',
      icon: Hash,
      example: 'Sub-Source Token: {zone_id}, {publisher_id}, {click_id}',
      tags: ['Placement Whitelist', 'Domain Blacklist', 'Dynamic Tokens', 'Postback Macros'],
    },
  ];

  return (
    <section id="targeting" className="py-24 bg-[#002633] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18A1BB]/15 border border-[#18A1BB]/30 text-xs font-bold text-[#18A1BB] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Precision Ad Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            360° Granular Targeting Capabilities
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Reach the exact audience that drives your KPI targets. Eliminate wasted impressions with ultra-targeted DSP delivery parameters.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetingOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.id}
                className="p-6 rounded-2xl bg-[#001D27]/80 border border-[#18A1BB]/20 hover:border-[#18A1BB] hover:shadow-xl hover:shadow-[#18A1BB]/10 transition group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#003E53] border border-[#18A1BB]/30 flex items-center justify-center text-[#18A1BB] mb-4 group-hover:scale-105 group-hover:bg-[#18A1BB] group-hover:text-white transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{opt.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">{opt.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-[10px] uppercase font-bold text-[#6EC1E4] mb-2">Example Setting</div>
                  <div className="text-xs font-mono text-slate-200 bg-[#00131A] p-2 rounded-lg border border-white/5 truncate">
                    {opt.example}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {opt.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#003E53] to-[#0170B9] p-6 sm:p-8 rounded-2xl border border-[#18A1BB]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Need Custom Whitelists or Niche Volume?</h4>
            <p className="text-xs sm:text-sm text-slate-200">
              Our dedicated traffic managers will hand-pick high-converting placement feeds tailored to your specific offer and vertical.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-[#002633] font-bold text-xs sm:text-sm hover:bg-slate-100 shadow-md transition"
          >
            Request Custom Target Feed
          </a>
        </div>

      </div>
    </section>
  );
}
