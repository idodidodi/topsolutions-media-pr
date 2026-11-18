import React, { useState } from 'react';
import { 
  Cpu, Activity, Globe, Shield, Radio, Terminal, 
  Layers, Zap, Sparkles, CheckCircle2, Mail, ExternalLink, 
  MousePointerClick, Bell, Smartphone, Monitor 
} from 'lucide-react';

export default function Option2_TechProgrammatic() {
  const [selectedFormat, setSelectedFormat] = useState('popunder');

  const mediaFormats = [
    {
      id: 'popunder',
      name: 'Pop-Under (OnClick & Zero-Click)',
      metric: '100% Direct Viewability',
      desc: 'High-impact full-screen editorial landing in a discrete browser window upon user interaction. Delivers maximum visual retention without ad-blindness.',
      icon: MousePointerClick,
    },
    {
      id: 'push',
      name: 'Web & System Push Notifications',
      metric: 'Opt-In Direct Syndication',
      desc: 'Native browser alerts delivered directly to verified subscriber devices across Android, Windows, and macOS with exceptional dwell times.',
      icon: Bell,
    },
    {
      id: 'inpage',
      name: 'In-Page Push (IPP - iOS & Safari)',
      metric: '100% Mobile OS Support',
      desc: 'Floating contextual notification units functioning across all operating systems, including iOS and iPadOS, requiring zero browser permissions.',
      icon: Smartphone,
    },
    {
      id: 'native',
      name: 'Native Editorial Recommendations',
      metric: 'Organic Editorial Flow',
      desc: 'Contextually embedded content widgets matching publisher typography and aesthetic standards for maximum reader engagement.',
      icon: Layers,
    },
    {
      id: 'xml',
      name: 'Direct XML Feeds & OpenRTB 2.5',
      metric: '<12ms Bidding Latency',
      desc: 'Sub-millisecond programmatic pipelines facilitating high-throughput traffic syndication, domain arbitrage, and direct publisher integration.',
      icon: Terminal,
    },
  ];

  return (
    <div className="min-h-screen bg-[#001822] text-slate-200 font-sans selection:bg-[#18A1BB] selection:text-white">
      
      {/* High-Tech Header */}
      <header className="sticky top-0 z-40 bg-[#001D27]/90 backdrop-blur-md border-b border-[#18A1BB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#18A1BB] to-[#0170B9] p-0.5 shadow-md shadow-[#18A1BB]/30">
              <div className="w-full h-full bg-[#001822] rounded-[10px] flex items-center justify-center font-extrabold text-[#18A1BB] text-lg">
                TS
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                TopSolutions <span className="text-[#18A1BB] text-xs font-mono px-1.5 py-0.5 rounded bg-[#18A1BB]/15 border border-[#18A1BB]/30">PROGRAMMATIC</span>
              </span>
              <p className="text-[10px] text-slate-400 font-mono tracking-wider">
                MEDIA LTD • RTB & XML INFRASTRUCTURE
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-300">
            <a href="#architecture" className="hover:text-[#18A1BB] transition">Architecture</a>
            <a href="#formats" className="hover:text-[#18A1BB] transition">Media Formats</a>
            <a href="#telemetry" className="hover:text-[#18A1BB] transition">Network Telemetry</a>
            <a href="#targeting" className="hover:text-[#18A1BB] transition">Targeting Engine</a>
            <a href="#contact" className="hover:text-[#18A1BB] transition">Agency Desk</a>
          </nav>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>RTB 2.5 ACTIVE</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-28 overflow-hidden bg-hero-gradient border-b border-[#18A1BB]/20">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#18A1BB]/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18A1BB]/15 border border-[#18A1BB]/30 text-xs font-mono text-[#6EC1E4] mb-6">
            <Cpu className="w-3.5 h-3.5 text-[#18A1BB]" />
            <span>High-Throughput Digital PR & Media Syndication Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
            Institutional Programmatic PR &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18A1BB] via-[#6EC1E4] to-[#61CE70]">
              Global Audience Distribution
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            TopSolutions Media LTD engineers high-velocity digital media syndication. Connecting enterprise brands, publishers, and media buyers through direct XML endpoints, sub-12ms OpenRTB pipelines, and automated anti-fraud telemetry across 240+ countries.
          </p>

          {/* Telemetry Metric Bar */}
          <div className="max-w-4xl mx-auto bg-[#001D27]/80 border border-[#18A1BB]/30 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              <div className="pt-2 sm:pt-0">
                <div className="text-3xl font-mono font-extrabold text-white">4.8B+</div>
                <div className="text-xs uppercase font-semibold text-[#18A1BB] mt-1">Daily Impressions</div>
                <div className="text-[10px] text-slate-400">Global editorial inventory</div>
              </div>
              <div className="pt-2 sm:pt-0">
                <div className="text-3xl font-mono font-extrabold text-white">&lt;12ms</div>
                <div className="text-xs uppercase font-semibold text-[#6EC1E4] mt-1">Auction Latency</div>
                <div className="text-[10px] text-slate-400">High-throughput OpenRTB</div>
              </div>
              <div className="pt-2 sm:pt-0">
                <div className="text-3xl font-mono font-extrabold text-white">99.8%</div>
                <div className="text-xs uppercase font-semibold text-emerald-400 mt-1">Clean Traffic</div>
                <div className="text-[10px] text-slate-400">Heuristic bot screening</div>
              </div>
              <div className="pt-2 sm:pt-0">
                <div className="text-3xl font-mono font-extrabold text-white">240+</div>
                <div className="text-xs uppercase font-semibold text-amber-400 mt-1">Active Geographies</div>
                <div className="text-[10px] text-slate-400">Tier 1 & emerging markets</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Programmatic Media Formats */}
      <section id="formats" className="py-24 bg-[#001D27] border-b border-[#18A1BB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase text-[#18A1BB] tracking-wider">Multi-Channel Syndication</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
              High-Impact Media Delivery Formats
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Engineered for maximum audience engagement, high viewability, and strict adherence to global privacy mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaFormats.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.id}
                  className="p-6 rounded-2xl bg-[#002633] border border-[#18A1BB]/25 hover:border-[#18A1BB] hover:shadow-xl hover:shadow-[#18A1BB]/10 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#001822] border border-[#18A1BB]/30 flex items-center justify-center text-[#18A1BB]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono text-[#6EC1E4] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        {f.metric}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{f.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{f.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Protocol: OpenRTB / XML</span>
                    <span className="text-emerald-400">100% Fill</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Targeting & Audience Engine */}
      <section id="targeting" className="py-24 bg-[#001822] border-b border-[#18A1BB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase text-[#18A1BB] tracking-wider">Granular Precision</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                360° Audience Telemetry & Precision Delivery
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our programmatic DSP engine empowers partners to target verified audiences with surgical accuracy. Eliminate media waste through deep hardware, carrier, and contextual segmentation.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#001D27] border border-white/10">
                  <div className="text-[#18A1BB] font-bold">GEOLOCATION</div>
                  <div className="text-slate-400 text-[11px] mt-1">Country, Region, City, DMA, Zip</div>
                </div>
                <div className="p-3 rounded-xl bg-[#001D27] border border-white/10">
                  <div className="text-[#18A1BB] font-bold">CARRIER & ISP</div>
                  <div className="text-slate-400 text-[11px] mt-1">Wi-Fi vs 3G/4G/5G Cellular</div>
                </div>
                <div className="p-3 rounded-xl bg-[#001D27] border border-white/10">
                  <div className="text-[#18A1BB] font-bold">DEVICE & OS</div>
                  <div className="text-slate-400 text-[11px] mt-1">iOS, Android, Windows, Mac</div>
                </div>
                <div className="p-3 rounded-xl bg-[#001D27] border border-white/10">
                  <div className="text-[#18A1BB] font-bold">ANTI-ADBLOCK</div>
                  <div className="text-slate-400 text-[11px] mt-1">+38% Recovered Yield</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#002633] rounded-3xl p-8 border border-[#18A1BB]/30 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs">
                <span className="text-slate-400">TELEMETRY CONSOLE</span>
                <span className="text-emerald-400">STATUS: OPTIMAL</span>
              </div>

              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div className="bg-[#001822] p-3 rounded-lg border border-white/5">
                  <span className="text-slate-500">ENGINE: </span>
                  <span className="text-white">TopSolutions Programmatic DSP v4.4</span>
                </div>
                <div className="bg-[#001822] p-3 rounded-lg border border-white/5">
                  <span className="text-slate-500">PROTOCOLS: </span>
                  <span className="text-[#6EC1E4]">OpenRTB 2.5, OpenRTB 3.0, XML Feed, S2S Postback</span>
                </div>
                <div className="bg-[#001822] p-3 rounded-lg border border-white/5">
                  <span className="text-slate-500">FRAUD_DETECTION: </span>
                  <span className="text-emerald-400">ML Heuristic Bot Filter (Active)</span>
                </div>
                <div className="bg-[#001822] p-3 rounded-lg border border-white/5">
                  <span className="text-slate-500">MONETIZATION: </span>
                  <span className="text-white">100% Fill Rate with Anti-AdBlock Script</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Agency Desk & Contact */}
      <section id="contact" className="py-24 bg-[#001D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono font-bold uppercase text-[#18A1BB] tracking-wider">Direct Media Desk</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Initiate Corporate Inquiries with TopSolutions Media LTD
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We welcome direct discussions with publishers, media agencies, and programmatic platforms looking to establish long-term syndication partnerships.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
              <div className="p-5 rounded-2xl bg-[#002633] border border-[#18A1BB]/30">
                <div className="text-xs text-slate-400 font-mono mb-1">EMAIL INQUIRY</div>
                <div className="text-sm font-bold text-white truncate">contact@topsolutionsmedia.com</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#002633] border border-[#18A1BB]/30">
                <div className="text-xs text-slate-400 font-mono mb-1">TELEGRAM DESK</div>
                <div className="text-sm font-bold text-white">@TopSolutionsMedia</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#002633] border border-[#18A1BB]/30">
                <div className="text-xs text-slate-400 font-mono mb-1">SKYPE DESK</div>
                <div className="text-sm font-bold text-white truncate">live:.cid.topsolutions_media</div>
              </div>
            </div>

            <div className="text-xs text-slate-500 font-mono pt-4">
              Registered Entity: TopSolutions Media LTD • Display & Mobile Ad Agency / XML
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00121A] text-slate-500 text-xs py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div>TopSolutions Media LTD • Display and Mobile Ad Agency / XML</div>
          <div>Copyright © {new Date().getFullYear()} All Rights Reserved.</div>
        </div>
      </footer>

    </div>
  );
}
