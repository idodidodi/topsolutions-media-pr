import React, { useState } from 'react';
import { 
  Bell, MousePointerClick, LayoutGrid, Smartphone, 
  ExternalLink, Layers, CheckCircle2, ArrowRight, Monitor, Sparkles
} from 'lucide-react';

export default function AdFormats({ onOpenAuth }) {
  const [selectedFormat, setSelectedFormat] = useState('popunder');

  const formats = [
    {
      id: 'popunder',
      name: 'Pop-Under (OnClick)',
      shortDesc: 'High-impact full-screen landing in a new browser tab on first user click.',
      badge: 'Highest Conversion Volume',
      icon: MousePointerClick,
      color: 'text-[#18A1BB]',
      bgColor: 'bg-[#18A1BB]/10',
      specs: {
        devices: 'Desktop, Mobile, Tablet',
        pricing: 'CPM, CPA, CPL, CPI',
        avgCTR: '100% Direct Impression',
        fillRate: '100% Global Fill',
        integration: '1-line JavaScript code, Anti-Adblock compatible',
      },
      verticals: ['VPN & Utilities', 'E-Commerce', 'Gaming', 'Sweepstakes', 'Finance & Crypto'],
      description: 'Pop-Under (OnClick) ads trigger quietly behind the active browser window upon user engagement. Also known as Zero-Click traffic. Guarantees maximum viewability and non-intrusive landing page engagement with zero ad blindness.',
      previewType: 'popunder',
    },
    {
      id: 'push',
      name: 'Push Notifications',
      shortDesc: 'Native opt-in system alerts delivered directly to user devices even when browsing offline.',
      badge: 'High CTR & Retargeting',
      icon: Bell,
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10',
      specs: {
        devices: 'Android, Windows, macOS, Linux',
        pricing: 'CPC, CPM, CPA Goal',
        avgCTR: '3.5% – 7.8%',
        fillRate: '99.8%',
        integration: 'Service worker or direct feed',
      },
      verticals: ['Software & Apps', 'Trading / Finance', 'News & Content', 'E-Commerce', 'Sports & iGaming'],
      description: 'Web Push alerts reach users natively on desktop and mobile screens. With direct consent-based opt-ins, push notifications generate verified high-intent clicks and exceptional lifetime customer retention.',
      previewType: 'push',
    },
    {
      id: 'inpage',
      name: 'In-Page Push (IPP)',
      shortDesc: 'Floating native push banners that run seamlessly on all operating systems including iOS.',
      badge: '100% iOS Compatible',
      icon: Smartphone,
      color: 'text-[#61CE70]',
      bgColor: 'bg-[#61CE70]/10',
      specs: {
        devices: 'iOS (iPhone/iPad), Android, Mac, Windows',
        pricing: 'CPC, CPM',
        avgCTR: '2.8% – 5.2%',
        fillRate: '100%',
        integration: 'Lightweight JS snippet',
      },
      verticals: ['Mobile Apps', 'Nutra & Health', 'E-Commerce', 'Dating', 'Sweepstakes'],
      description: 'In-Page Push mimics native OS notifications directly inside website content. It requires no user opt-in or browser subscription permissions, unlocking 100% of lucrative iOS and Safari audiences.',
      previewType: 'inpage',
    },
    {
      id: 'native',
      name: 'Native Ads Widgets',
      shortDesc: 'Editorial recommendation grids that adapt organically to publisher layout and styling.',
      badge: 'Editorial Quality',
      icon: LayoutGrid,
      color: 'text-[#6EC1E4]',
      bgColor: 'bg-[#6EC1E4]/10',
      specs: {
        devices: 'All Responsive Devices',
        pricing: 'CPC, CPM, CPL',
        avgCTR: '1.8% – 3.9%',
        fillRate: '100%',
        integration: 'Customizable CSS Widgets / API',
      },
      verticals: ['Content Discovery', 'Nutra', 'Financial Products', 'Gadgets', 'E-Learning'],
      description: 'Native ads blend harmoniously with articles and web layouts. Readers perceive them as trusted recommended reading, resulting in higher dwell times, lower bounce rates, and organic brand safety.',
      previewType: 'native',
    },
    {
      id: 'direct',
      name: 'Direct Links / XML Feeds',
      shortDesc: 'Programmatic RTB endpoints and smart redirect URLs for search arbitrage and app developers.',
      badge: 'Zero Creative Required',
      icon: ExternalLink,
      color: 'text-[#0170B9]',
      bgColor: 'bg-[#0170B9]/10',
      specs: {
        devices: 'All Web & In-App Traffic',
        pricing: 'Revenue Share, Smart CPM, CPC',
        avgCTR: 'Full Page Transition',
        fillRate: '100% Guaranteed',
        integration: 'OpenRTB 2.5, XML Feed, JSON API, Smartlink',
      },
      verticals: ['Domain Parking', 'Search Arbitrage', 'Mobile App SDKs', 'Social Media Bio Links'],
      description: 'Direct smartlinks automatically analyze incoming user parameters (Geo, OS, carrier, connection speed) and algorithmically route traffic to the highest-bidding advertiser landing page in milliseconds.',
      previewType: 'direct',
    },
    {
      id: 'banners',
      name: 'Display & Video Banners',
      shortDesc: 'Standard IAB responsive display formats plus VAST / VPAID in-stream video banners.',
      badge: 'Universal Brand Reach',
      icon: Layers,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      specs: {
        devices: 'Desktop, Mobile Web, Apps',
        pricing: 'CPM, CPC, CPV',
        avgCTR: '0.8% – 2.1%',
        fillRate: '100%',
        integration: 'Async IAB tags (300x250, 728x90, 320x50, 300x600)',
      },
      verticals: ['Brand Awareness', 'Retail', 'Automotive', 'Entertainment', 'B2B Services'],
      description: 'High-visibility display units placed in prime above-the-fold slots. Enhanced with lazy-loading and viewability tracking to ensure advertisers only pay for verified viewable impressions.',
      previewType: 'banners',
    },
  ];

  const current = formats.find((f) => f.id === selectedFormat) || formats[0];

  return (
    <section id="formats" className="py-24 bg-[#F8FAFC] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18A1BB]/10 border border-[#18A1BB]/30 text-xs font-bold text-[#003E53] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#18A1BB]" />
            <span>High-Performing Ad Formats</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003E53] tracking-tight mb-4">
            Engaging Formats Engineered for Maximum Yield
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every format is fully tested against adblockers, mobile devices, and browser policies to deliver the highest conversion rates and publisher eCPMs.
          </p>
        </div>

        {/* Formats Grid / Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {formats.map((f) => {
            const Icon = f.icon;
            const isSelected = selectedFormat === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setSelectedFormat(f.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#003E53] text-white border-[#18A1BB] shadow-xl shadow-[#003E53]/20 ring-2 ring-[#18A1BB]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#18A1BB]/50 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className={`p-2.5 rounded-xl w-fit mb-3 ${isSelected ? 'bg-white/10 text-[#18A1BB]' : f.bgColor + ' ' + f.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-sm tracking-tight mb-1">{f.name}</div>
                </div>
                <div className={`text-[11px] font-semibold mt-2 ${isSelected ? 'text-[#6EC1E4]' : 'text-slate-500'}`}>
                  {f.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Format Detailed Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Detailed Information (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#18A1BB]/15 text-[#003E53] border border-[#18A1BB]/30">
                  {current.badge}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Compatible with OpenRTB 2.5 & XML Feeds
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#003E53] mb-3">
                  {current.name}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Specs Table */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block">Supported Devices</span>
                  <span className="font-bold text-[#003E53] text-sm">{current.specs.devices}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Available Pricing</span>
                  <span className="font-bold text-[#003E53] text-sm">{current.specs.pricing}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Typical CTR</span>
                  <span className="font-bold text-[#18A1BB] text-sm">{current.specs.avgCTR}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Guaranteed Fill</span>
                  <span className="font-bold text-[#61CE70] text-sm">{current.specs.fillRate}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-500 block">Integration Script</span>
                  <span className="font-semibold text-slate-700">{current.specs.integration}</span>
                </div>
              </div>

              {/* Best Converting Verticals */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                  Top Converting Niches & Verticals
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.verticals.map((vert, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#18A1BB]/15 hover:text-[#003E53] text-slate-700 text-xs font-semibold transition"
                    >
                      {vert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={() => onOpenAuth('advertiser')}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#18A1BB] to-[#0170B9] text-white hover:brightness-110 shadow-md shadow-[#18A1BB]/25 flex items-center justify-center gap-2 group transition"
                >
                  <span>Buy {current.name} Traffic</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onOpenAuth('publisher')}
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 text-[#003E53] flex items-center justify-center gap-2 transition"
                >
                  <span>Monetize With {current.name}</span>
                </button>
              </div>

            </div>

            {/* Right: Interactive Live Visual Mockup (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#002633] to-[#003E53] p-6 sm:p-10 flex flex-col justify-center items-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-200">
              
              <div className="text-xs font-bold text-[#6EC1E4] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Monitor className="w-4 h-4 text-[#18A1BB]" />
                Live Format Interaction Mockup
              </div>

              {/* Mockup Frame */}
              <div className="w-full max-w-sm bg-slate-900 rounded-2xl p-3 border-4 border-slate-700 shadow-2xl relative">
                {/* Browser top bar */}
                <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  <div className="text-[10px] text-slate-400 bg-slate-800 px-3 py-0.5 rounded-md flex-1 text-center truncate ml-2">
                    publisher-site.com/article
                  </div>
                </div>

                {/* Simulated Content Area */}
                <div className="h-56 bg-slate-800 rounded-lg p-3 relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-1.5 opacity-40">
                    <div className="h-3 bg-slate-600 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-600 rounded w-full"></div>
                    <div className="h-2 bg-slate-600 rounded w-5/6"></div>
                    <div className="h-2 bg-slate-600 rounded w-2/3"></div>
                  </div>

                  {/* Dynamic Ad Preview Element based on type */}
                  {current.previewType === 'push' && (
                    <div className="absolute top-4 right-4 max-w-[210px] bg-white rounded-xl p-2.5 shadow-2xl border border-slate-200 text-slate-800 animate-bounce">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1 rounded bg-[#18A1BB] text-white">
                          <Bell className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-bold truncate">Special Flash Deal!</span>
                      </div>
                      <p className="text-[9px] text-slate-500 leading-tight">Claim your 85% exclusive discount before midnight.</p>
                      <button className="mt-1.5 w-full py-1 rounded bg-[#0170B9] text-white text-[9px] font-bold">Visit Offer</button>
                    </div>
                  )}

                  {current.previewType === 'popunder' && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
                      <div className="bg-[#003E53] border border-[#18A1BB] rounded-xl p-3 text-center text-white shadow-2xl w-full">
                        <div className="text-[10px] uppercase font-bold text-[#18A1BB] mb-1">New Tab Popunder Triggered</div>
                        <div className="text-xs font-extrabold mb-1">High-Converting Advertiser Landing Page</div>
                        <div className="text-[9px] text-slate-300 mb-2">Clean, full-page desktop/mobile presentation</div>
                        <span className="inline-block px-2 py-0.5 rounded bg-[#61CE70] text-[#002633] text-[9px] font-bold">100% Viewable</span>
                      </div>
                    </div>
                  )}

                  {current.previewType === 'inpage' && (
                    <div className="mt-auto bg-slate-900/90 border border-[#18A1BB]/40 rounded-xl p-2.5 text-white flex items-center gap-2.5 shadow-xl">
                      <div className="w-8 h-8 rounded-lg bg-[#18A1BB]/20 flex items-center justify-center text-[#18A1BB] shrink-0">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold truncate">Update Available for iOS</div>
                        <div className="text-[9px] text-slate-400 truncate">Tap to test speed acceleration</div>
                      </div>
                      <button className="px-2 py-1 bg-[#18A1BB] text-white rounded text-[9px] font-bold">Open</button>
                    </div>
                  )}

                  {current.previewType === 'native' && (
                    <div className="mt-auto bg-white rounded-lg p-2 border border-slate-200 text-slate-800">
                      <div className="text-[9px] font-bold text-slate-400 uppercase mb-1">Sponsored Recommendation</div>
                      <div className="flex gap-2 items-center">
                        <div className="w-12 h-10 bg-slate-200 rounded shrink-0"></div>
                        <div className="text-[9px] font-semibold leading-tight line-clamp-2">
                          10 tech strategies that transformed affiliate publishing in 2026.
                        </div>
                      </div>
                    </div>
                  )}

                  {current.previewType === 'direct' && (
                    <div className="absolute inset-0 bg-[#001D27] flex flex-col items-center justify-center p-3 text-center text-white">
                      <ExternalLink className="w-8 h-8 text-[#18A1BB] mb-2 animate-pulse" />
                      <div className="text-xs font-bold text-white mb-0.5">Automated Smartlink Dispatch</div>
                      <div className="text-[9px] text-slate-400">Geo + Device + Carrier Matched in 12ms</div>
                      <div className="mt-2 text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-[#6EC1E4] border border-blue-500/30">
                        Highest Bid: $4.80 eCPM
                      </div>
                    </div>
                  )}

                  {current.previewType === 'banners' && (
                    <div className="mt-auto bg-gradient-to-r from-[#18A1BB]/30 to-[#0170B9]/30 border border-[#18A1BB]/50 rounded-lg p-2.5 text-center">
                      <div className="text-[9px] uppercase font-bold text-slate-300">IAB 300x100 / 300x250 Display</div>
                      <div className="text-xs font-bold text-white mt-0.5">High Impact Responsive Video & Banner</div>
                    </div>
                  )}

                  <div className="space-y-1.5 opacity-40">
                    <div className="h-2 bg-slate-600 rounded w-full"></div>
                    <div className="h-2 bg-slate-600 rounded w-4/5"></div>
                  </div>
                </div>

              </div>

              <div className="text-[11px] text-slate-400 mt-4 text-center">
                Interactive real-time preview simulation
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
