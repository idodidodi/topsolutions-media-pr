import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, Zap, Globe2, TrendingUp, 
  CheckCircle2, Sparkles, Play, Award, Layers, BarChart2
} from 'lucide-react';

export default function Hero({ onOpenAuth, onSelectTab }) {
  const [activeTab, setActiveTab] = useState('advertisers'); // 'advertisers' | 'publishers'

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-gradient text-white">
      {/* Background Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40"></div>
      
      {/* Ambient Radial Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#18A1BB]/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-[#0170B9]/20 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-[#262262]/30 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#18A1BB]/30 text-xs sm:text-sm font-medium text-slate-200 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-[#61CE70] animate-ping"></span>
            <span className="text-[#6EC1E4] font-semibold">2026 Ready</span>
            <span className="text-slate-400">•</span>
            <span>Ultra-low latency OpenRTB 2.5 & XML Smart Feeds</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#18A1BB]" />
          </div>
        </div>

        {/* Hero Main Heading & Copy */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
            Global Programmatic Traffic Network &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18A1BB] via-[#6EC1E4] to-[#61CE70]">
              Monetization Ecosystem
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Connect directly to top-tier global demand and high-converting traffic. 
            Empowering advertisers with surgical targeting and publishers with guaranteed 100% fill rates, 
            instant payouts, and anti-adblock technology.
          </p>
        </div>

        {/* Dual Persona Switcher Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-[#002633]/80 border border-[#18A1BB]/30 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setActiveTab('advertisers')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'advertisers'
                  ? 'bg-gradient-to-r from-[#18A1BB] to-[#0170B9] text-white shadow-md shadow-[#18A1BB]/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              For Advertisers
            </button>
            <button
              onClick={() => setActiveTab('publishers')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'publishers'
                  ? 'bg-gradient-to-r from-[#18A1BB] to-[#0170B9] text-white shadow-md shadow-[#18A1BB]/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              For Publishers
            </button>
          </div>
        </div>

        {/* Dynamic CTA & Highlights based on Persona */}
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-[#18A1BB]/25 rounded-2xl p-6 sm:p-8 shadow-2xl mb-12">
          {activeTab === 'advertisers' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#18A1BB]/20 text-[#18A1BB]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Smart Pricing</h4>
                    <p className="text-xs text-slate-300">CPM, CPC, CPA Goal, CPL, CPI & XML</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#18A1BB]/20 text-[#18A1BB]">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Anti-Fraud Shield</h4>
                    <p className="text-xs text-slate-300">99.8% bot-free human traffic guarantee</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#18A1BB]/20 text-[#18A1BB]">
                    <Globe2 className="w-5 h-5 text-[#6EC1E4]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">240+ Geos</h4>
                    <p className="text-xs text-slate-300">Direct carrier & ISP precision targeting</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => onOpenAuth('advertiser')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#18A1BB] to-[#0170B9] text-white hover:brightness-110 shadow-lg shadow-[#18A1BB]/30 flex items-center justify-center gap-2 group transition"
                >
                  Launch Advertiser Campaign
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#calculator"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 border border-white/20 text-white flex items-center justify-center gap-2 transition"
                >
                  <BarChart2 className="w-4 h-4 text-[#18A1BB]" />
                  Explore Traffic & Pricing
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#61CE70]/20 text-[#61CE70]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">100% Fill Rate</h4>
                    <p className="text-xs text-slate-300">Never waste an impression globally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#18A1BB]/20 text-[#18A1BB]">
                    <Zap className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Anti-AdBlock Tech</h4>
                    <p className="text-xs text-slate-300">Recover 25–40% lost ad revenue</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#0170B9]/20 text-[#6EC1E4]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Flexible Payouts</h4>
                    <p className="text-xs text-slate-300">Weekly net payments via Crypto/Wire/Paxum</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => onOpenAuth('publisher')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#10B981] via-[#18A1BB] to-[#0170B9] text-white hover:brightness-110 shadow-lg shadow-[#10B981]/20 flex items-center justify-center gap-2 group transition"
                >
                  Monetize Your Traffic Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#calculator"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 border border-white/20 text-white flex items-center justify-center gap-2 transition"
                >
                  <TrendingUp className="w-4 h-4 text-[#61CE70]" />
                  Estimate Earnings
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs uppercase tracking-wider text-slate-400 font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#18A1BB]"></span>
            <span>Pop-Under (OnClick)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6EC1E4]"></span>
            <span>Push Notifications</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#61CE70]"></span>
            <span>In-Page Push</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0170B9]"></span>
            <span>Native Ad Widgets</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Direct Links & XML</span>
          </div>
        </div>

      </div>
    </section>
  );
}
