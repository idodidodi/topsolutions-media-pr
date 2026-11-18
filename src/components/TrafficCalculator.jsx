import React, { useState, useMemo } from 'react';
import { 
  Calculator, TrendingUp, DollarSign, Users, Sparkles, 
  ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, BarChart 
} from 'lucide-react';

export default function TrafficCalculator({ onOpenAuth }) {
  const [role, setRole] = useState('publisher'); // 'publisher' | 'advertiser'
  const [format, setFormat] = useState('popunder');
  const [tier, setTier] = useState('tier1');
  const [impressions, setImpressions] = useState(2500000); // 2.5M impressions

  const formatData = {
    popunder: {
      name: 'Popunder (OnClick)',
      rates: { tier1: 3.8, tier2: 1.9, tier3: 0.95 },
      ctr: '100% Direct View',
      fillRate: '100%',
    },
    push: {
      name: 'Push Notifications',
      rates: { tier1: 4.6, tier2: 2.4, tier3: 1.1 },
      ctr: '4.8% Opt-In CTR',
      fillRate: '99.5%',
    },
    inpage: {
      name: 'In-Page Push (IPP)',
      rates: { tier1: 3.2, tier2: 1.8, tier3: 0.85 },
      ctr: '3.6% CTR (iOS & Android)',
      fillRate: '100%',
    },
    native: {
      name: 'Native Ad Widgets',
      rates: { tier1: 2.9, tier2: 1.5, tier3: 0.75 },
      ctr: '2.4% Editorial CTR',
      fillRate: '100%',
    },
    direct: {
      name: 'Direct Link / XML Feed',
      rates: { tier1: 5.2, tier2: 2.8, tier3: 1.3 },
      ctr: 'Smartlink High Yield',
      fillRate: '100%',
    },
  };

  const currentRate = formatData[format].rates[tier];

  // Calculations
  const calculatedMetrics = useMemo(() => {
    const monthlyImpressions = impressions;
    const dailyImpressions = Math.round(monthlyImpressions / 30);
    const estimatedMonthlyRevenue = ((monthlyImpressions / 1000) * currentRate).toFixed(2);
    const estimatedDailyRevenue = (estimatedMonthlyRevenue / 30).toFixed(2);
    
    // For advertiser
    const estimatedClicks = Math.round(monthlyImpressions * 0.038);
    const estimatedCPAConversions = Math.round(estimatedClicks * 0.045);

    return {
      monthlyImpressions,
      dailyImpressions,
      estimatedMonthlyRevenue,
      estimatedDailyRevenue,
      ecpm: currentRate.toFixed(2),
      estimatedClicks,
      estimatedCPAConversions,
    };
  }, [impressions, currentRate]);

  return (
    <section id="calculator" className="py-24 bg-[#001D27] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#18A1BB]/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0170B9]/15 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18A1BB]/15 border border-[#18A1BB]/30 text-xs font-semibold text-[#18A1BB] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Yield & Volume Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Calculate Your Traffic Opportunity
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Forecast real-time performance projections backed by TopSolutions Media’s global programmatic demand engine.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="bg-[#002633] border border-[#18A1BB]/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* Persona Switcher Inside Calculator */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 rounded-xl bg-[#001822] border border-white/10">
              <button
                onClick={() => setRole('publisher')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition ${
                  role === 'publisher'
                    ? 'bg-gradient-to-r from-[#10B981] to-[#18A1BB] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <DollarSign className="w-4 h-4 text-emerald-300" />
                Publisher Yield Estimator
              </button>
              <button
                onClick={() => setRole('advertiser')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition ${
                  role === 'advertiser'
                    ? 'bg-gradient-to-r from-[#18A1BB] to-[#0170B9] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TrendingUp className="w-4 h-4 text-[#6EC1E4]" />
                Advertiser Reach & ROI Estimator
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Ad Format Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  1. Select Ad Format
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {Object.entries(formatData).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setFormat(key)}
                      className={`px-3 py-2.5 sm:px-3.5 sm:py-3 rounded-xl text-left border text-xs sm:text-sm font-medium transition duration-200 ${
                        format === key
                          ? 'border-[#18A1BB] bg-[#18A1BB]/20 text-white shadow-sm ring-1 ring-[#18A1BB]'
                          : 'border-white/10 bg-[#001D27]/80 text-slate-300 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <div className="font-semibold text-white text-xs sm:text-sm leading-snug">{item.name}</div>
                      <div className="text-[10px] sm:text-[11px] text-[#6EC1E4] mt-0.5">{item.ctr}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Geo Tier Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  2. Select Traffic Geography / Tier
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'tier1', label: 'Tier 1 Geos', sub: 'USA, UK, CA, AU, DE' },
                    { id: 'tier2', label: 'Tier 2 Geos', sub: 'FR, IT, ES, JP, BR' },
                    { id: 'tier3', label: 'Tier 3 Geos', sub: 'Global / LATAM / SEA' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTier(t.id)}
                      className={`p-3 rounded-xl text-left border transition ${
                        tier === t.id
                          ? 'border-[#18A1BB] bg-[#18A1BB]/20 text-white ring-1 ring-[#18A1BB]'
                          : 'border-white/10 bg-[#001D27]/80 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold text-white">{t.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">{t.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Impressions Slider */}
              <div className="pt-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    3. Monthly Traffic Volume
                  </label>
                  <span className="text-base font-extrabold text-[#18A1BB]">
                    {impressions.toLocaleString()} Impressions
                  </span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="20000000"
                  step="100000"
                  value={impressions}
                  onChange={(e) => setImpressions(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#001822] rounded-lg appearance-none cursor-pointer accent-[#18A1BB]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                  <span>100K/mo</span>
                  <span>5M/mo</span>
                  <span>10M/mo</span>
                  <span>20M+/mo</span>
                </div>
              </div>

              {/* Network Perks Checklist */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#61CE70]" />
                  <span>100% Global Fill Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#61CE70]" />
                  <span>Anti-Adblock Recover (+38%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#61CE70]" />
                  <span>Weekly Net-7 / Net-15 Payouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#61CE70]" />
                  <span>Zero Server Latency (&lt;2KB code)</span>
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Projected Output (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#003E53] to-[#002633] border-2 border-[#18A1BB]/40 p-6 sm:p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-15">
                  <TrendingUp className="w-32 h-32 text-[#18A1BB]" />
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#6EC1E4]">
                      {role === 'publisher' ? 'Estimated Publisher Earnings' : 'Projected Campaign Performance'}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#61CE70]/20 text-[#61CE70] border border-[#61CE70]/30">
                      Live Estimate
                    </span>
                  </div>

                  {role === 'publisher' ? (
                    <div>
                      <div className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-1">
                        ${Number(calculatedMetrics.estimatedMonthlyRevenue).toLocaleString()}
                        <span className="text-base font-semibold text-slate-300"> /mo</span>
                      </div>
                      <div className="text-sm font-medium text-slate-300">
                        ≈ ${Number(calculatedMetrics.estimatedDailyRevenue).toLocaleString()} / day
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-1">
                        {calculatedMetrics.estimatedClicks.toLocaleString()}
                        <span className="text-base font-semibold text-slate-300"> Clicks</span>
                      </div>
                      <div className="text-sm font-medium text-slate-300">
                        Est. Conversions: ~{calculatedMetrics.estimatedCPAConversions.toLocaleString()} leads/sales
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10 text-xs">
                    <div>
                      <div className="text-slate-400">Average eCPM</div>
                      <div className="text-lg font-bold text-[#18A1BB]">${calculatedMetrics.ecpm}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Guaranteed Fill</div>
                      <div className="text-lg font-bold text-[#61CE70]">100%</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Selected Format</div>
                      <div className="text-sm font-semibold text-white">{formatData[format].name}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Anti-Fraud Protection</div>
                      <div className="text-sm font-semibold text-emerald-400">Active (99.8%)</div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenAuth(role)}
                    className="w-full py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-[#18A1BB] via-[#0170B9] to-[#6EC1E4] text-white hover:brightness-110 shadow-lg shadow-[#18A1BB]/30 flex items-center justify-center gap-2 group transition"
                  >
                    <span>{role === 'publisher' ? 'Claim Your Revenue & Start Monetizing' : 'Launch Target Campaign With This Traffic'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    *Estimates are calculated using historical 30-day network bid averages. Exact revenue varies by website niche, user loyalty, and geo seasonality.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
