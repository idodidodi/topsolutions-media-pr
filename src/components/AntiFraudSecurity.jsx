import React from 'react';
import { 
  ShieldCheck, Bot, Eye, Lock, CheckCircle2, 
  Cpu, AlertTriangle, RefreshCw, Sparkles 
} from 'lucide-react';

export default function AntiFraudSecurity({ onOpenAuth }) {
  const protectionPillars = [
    {
      title: 'Real-Time Heuristic Bot Filtering',
      desc: 'Our proprietary traffic inspection engine validates user touch gestures, viewport visibility, mouse movement, and device sensor data to instantly flag and filter bot traffic before bids execute.',
      icon: Bot,
      stat: '99.8%',
      statLabel: 'Verified Human Traffic',
    },
    {
      title: 'Anti-AdBlock Bypass Technology',
      desc: 'Our dynamic DNS script rotates endpoints and payload signatures, allowing publishers to safely bypass AdBlock, uBlock Origin, and Brave shields, unlocking up to 40% previously lost revenue.',
      icon: RefreshCw,
      stat: '+38%',
      statLabel: 'Publisher Revenue Recovery',
    },
    {
      title: 'Malware & Phishing Shield',
      desc: 'Continuous real-time scanning of all creative assets, redirect destinations, and landing pages to ensure 100% compliance with Google Webmaster policies and brand safety requirements.',
      icon: Lock,
      stat: '24/7',
      statLabel: 'Automated Creative Audit',
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-700 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Institutional-Grade Traffic Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003E53] tracking-tight mb-4">
            Multi-Layer Fraud Prevention & Anti-AdBlock Architecture
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We hold our inventory to the highest industry standards. Advertisers never pay for fake clicks, and publishers maximize monetization on every legitimate user.
          </p>
        </div>

        {/* 3 Protection Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {protectionPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div 
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-8 relative overflow-hidden hover:shadow-xl hover:border-[#18A1BB]/40 transition group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#18A1BB] shadow-sm mb-6 group-hover:scale-105 group-hover:bg-[#003E53] group-hover:text-white transition">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003E53] mb-3">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{p.desc}</p>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-baseline justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-[#003E53]">{p.stat}</div>
                    <div className="text-xs font-semibold text-slate-500">{p.statLabel}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Comparison: With TopSolutions vs Other Networks */}
        <div className="bg-[#002633] text-white rounded-3xl p-6 sm:p-10 border border-[#18A1BB]/30 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-extrabold mb-2">How TopSolutions Media Outperforms Conventional Ad Networks</h3>
            <p className="text-slate-300 text-xs sm:text-sm">Real benchmarks comparing our direct programmatic infrastructure against standard ad networks.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 uppercase text-[11px] tracking-wider">
                  <th className="py-4 px-4 font-bold">Platform Feature</th>
                  <th className="py-4 px-4 font-extrabold text-[#18A1BB]">TopSolutions Media LTD</th>
                  <th className="py-4 px-4 font-medium">Standard Ad Networks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-200">Global Fill Rate Guarantee</td>
                  <td className="py-4 px-4 font-bold text-emerald-400">100% Guaranteed Worldwide</td>
                  <td className="py-4 px-4 text-slate-400">70% – 85% with dead traffic gaps</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-200">Anti-AdBlock Native Script</td>
                  <td className="py-4 px-4 font-bold text-emerald-400">Included free, self-rotating domains</td>
                  <td className="py-4 px-4 text-slate-400">Requires expensive third-party tools</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-200">Anti-Fraud / Bot Detection</td>
                  <td className="py-4 px-4 font-bold text-emerald-400">Real-time ML heuristic evaluation</td>
                  <td className="py-4 px-4 text-slate-400">Basic post-click IP blacklist</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-200">Payout Timelines</td>
                  <td className="py-4 px-4 font-bold text-emerald-400">Weekly Net-7 / Net-15 (USDT, Wire, Paxum)</td>
                  <td className="py-4 px-4 text-slate-400">Net-30 / Net-60 delayed schedules</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-200">Account Management</td>
                  <td className="py-4 px-4 font-bold text-emerald-400">Dedicated 24/7 VIP Skype / Telegram rep</td>
                  <td className="py-4 px-4 text-slate-400">Automated ticketing bot</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
