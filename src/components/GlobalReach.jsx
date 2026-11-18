import React, { useState } from 'react';
import { Globe, TrendingUp, BarChart2, Shield, ArrowRight } from 'lucide-react';

export default function GlobalReach({ onOpenAuth }) {
  const [selectedTier, setSelectedTier] = useState('tier1');

  const geoTiers = {
    tier1: {
      title: 'Tier 1 Prime Markets',
      desc: 'Highest consumer purchasing power, maximum eCPMs, and massive conversion value.',
      countries: [
        { name: 'United States', code: 'US', volume: '1.2B / mo', avgCPM: '$4.20', flag: '🇺🇸' },
        { name: 'United Kingdom', code: 'GB', volume: '450M / mo', avgCPM: '$3.80', flag: '🇬🇧' },
        { name: 'Canada', code: 'CA', volume: '380M / mo', avgCPM: '$3.50', flag: '🇨🇦' },
        { name: 'Germany', code: 'DE', volume: '420M / mo', avgCPM: '$3.60', flag: '🇩🇪' },
        { name: 'Australia', code: 'AU', volume: '290M / mo', avgCPM: '$3.90', flag: '🇦🇺' },
        { name: 'France', code: 'FR', volume: '350M / mo', avgCPM: '$3.10', flag: '🇫🇷' },
      ],
    },
    tier2: {
      title: 'Tier 2 High Growth Markets',
      desc: 'Strong volume, competitive acquisition costs, and explosive ROI for performance affiliates.',
      countries: [
        { name: 'Italy', code: 'IT', volume: '280M / mo', avgCPM: '$2.20', flag: '🇮🇹' },
        { name: 'Spain', code: 'ES', volume: '310M / mo', avgCPM: '$2.10', flag: '🇪🇸' },
        { name: 'Japan', code: 'JP', volume: '410M / mo', avgCPM: '$2.80', flag: '🇯🇵' },
        { name: 'Brazil', code: 'BR', volume: '620M / mo', avgCPM: '$1.70', flag: '🇧🇷' },
        { name: 'Poland', code: 'PL', volume: '220M / mo', avgCPM: '$1.95', flag: '🇵🇱' },
        { name: 'Netherlands', code: 'NL', volume: '190M / mo', avgCPM: '$2.90', flag: '🇳🇱' },
      ],
    },
    tier3: {
      title: 'Tier 3 Massive Scale Markets',
      desc: 'Colossal impression volume, ultra-low CPC/CPM rates, ideal for utility apps & broad reach.',
      countries: [
        { name: 'India', code: 'IN', volume: '1.1B / mo', avgCPM: '$0.85', flag: '🇮🇳' },
        { name: 'Indonesia', code: 'ID', volume: '580M / mo', avgCPM: '$0.90', flag: '🇮🇩' },
        { name: 'Mexico', code: 'MX', volume: '430M / mo', avgCPM: '$1.25', flag: '🇲🇽' },
        { name: 'Vietnam', code: 'VN', volume: '390M / mo', avgCPM: '$0.75', flag: '🇻🇳' },
        { name: 'Philippines', code: 'PH', volume: '340M / mo', avgCPM: '$0.80', flag: '🇵🇭' },
        { name: 'Nigeria', code: 'NG', volume: '290M / mo', avgCPM: '$0.65', flag: '🇳🇬' },
      ],
    },
  };

  const current = geoTiers[selectedTier];

  return (
    <section className="py-24 bg-[#F8FAFC] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18A1BB]/10 border border-[#18A1BB]/30 text-xs font-bold text-[#003E53] mb-4">
            <Globe className="w-3.5 h-3.5 text-[#18A1BB]" />
            <span>Worldwide Traffic Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003E53] tracking-tight mb-4">
            240+ Geographies With High-Yield Monetization
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From tier-1 English-speaking powerhouses to high-volume emerging markets, monetize or buy traffic at scale anywhere on the map.
          </p>

          {/* Tier Selector Buttons */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              {[
                { id: 'tier1', label: 'Tier 1 (Premium)' },
                { id: 'tier2', label: 'Tier 2 (Growth)' },
                { id: 'tier3', label: 'Tier 3 (Mass Volume)' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTier(t.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                    selectedTier === t.id
                      ? 'bg-[#003E53] text-white shadow-md'
                      : 'text-slate-600 hover:text-[#003E53]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Tier Country Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl mb-12">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-extrabold text-[#003E53]">{current.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{current.desc}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-600">Live Traffic Stream Active</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.countries.map((c) => (
              <div 
                key={c.code}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#18A1BB]/60 hover:bg-white hover:shadow-lg transition flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <h4 className="font-bold text-[#003E53] text-sm flex items-center gap-1.5">
                      {c.name}
                      <span className="text-[10px] font-mono text-slate-400">({c.code})</span>
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">{c.volume}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400">Avg. eCPM</div>
                  <div className="text-base font-extrabold text-[#18A1BB]">{c.avgCPM}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              Looking for a specific geo or localized carrier IP range? We support all 240+ ISO country codes.
            </div>
            <button
              onClick={() => onOpenAuth('advertiser')}
              className="text-xs font-bold text-[#18A1BB] hover:text-[#003E53] flex items-center gap-1 transition"
            >
              <span>Explore all countries in DSP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
