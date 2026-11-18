import React from 'react';
import { Activity, Globe, Shield, Users, BarChart3, Zap } from 'lucide-react';

export default function StatsTicker() {
  const stats = [
    {
      label: 'Daily Ad Impressions',
      value: '4.8B+',
      subtext: 'High-performing inventory',
      icon: Activity,
      color: 'text-[#18A1BB]',
      bg: 'bg-[#18A1BB]/10',
    },
    {
      label: 'Global Geographies',
      value: '240+',
      subtext: 'Tier 1, 2 & 3 markets',
      icon: Globe,
      color: 'text-[#6EC1E4]',
      bg: 'bg-[#6EC1E4]/10',
    },
    {
      label: 'Active Partners',
      value: '35,000+',
      subtext: 'Publishers & Advertisers',
      icon: Users,
      color: 'text-[#61CE70]',
      bg: 'bg-[#61CE70]/10',
    },
    {
      label: 'Clean Traffic Guarantee',
      value: '99.8%',
      subtext: 'Multi-layer anti-fraud shield',
      icon: Shield,
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
    },
    {
      label: 'Avg. Anti-Adblock Lift',
      value: '+38%',
      subtext: 'Recovered publisher yield',
      icon: Zap,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
    },
    {
      label: 'Bidding Engine Latency',
      value: '< 12ms',
      subtext: 'OpenRTB 2.5 real-time DSP',
      icon: BarChart3,
      color: 'text-[#0170B9]',
      bg: 'bg-[#0170B9]/10',
    },
  ];

  return (
    <section id="stats" className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#002633] border border-[#18A1BB]/25 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center px-2 ${
                  index > 0 ? 'pt-4 lg:pt-0' : ''
                }`}
              >
                <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} mb-3 shadow-inner`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mb-0.5">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 hidden sm:block">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
