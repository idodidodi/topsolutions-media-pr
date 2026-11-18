import React from 'react';
import { ArrowUp, Globe, Mail, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenAuth }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00141C] text-slate-400 text-xs border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Info (2 cols) */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#18A1BB] to-[#0170B9] p-0.5 shadow-md shadow-[#18A1BB]/30">
                <div className="w-full h-full bg-[#002633] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#18A1BB] to-[#6EC1E4] text-lg tracking-tighter">
                    TS
                  </span>
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">TopSolutions Media LTD</span>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  Display & Mobile Ad Agency / XML
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              TopSolutions Media is a global programmatic advertising network and technology platform providing high-yield monetization for digital publishers and targeted performance traffic for advertisers.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-[11px] text-slate-300 font-semibold">Network Operational & RTB Bidding Live</span>
            </div>
          </div>

          {/* Advertisers */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">For Advertisers</h4>
            <ul className="space-y-2.5">
              <li><a href="#advertisers" className="hover:text-[#18A1BB] transition">Self-Serve DSP</a></li>
              <li><a href="#formats" className="hover:text-[#18A1BB] transition">Popunder Traffic</a></li>
              <li><a href="#formats" className="hover:text-[#18A1BB] transition">Push Notifications</a></li>
              <li><a href="#formats" className="hover:text-[#18A1BB] transition">In-Page Push (IPP)</a></li>
              <li><a href="#targeting" className="hover:text-[#18A1BB] transition">Carrier & OS Targeting</a></li>
              <li><a href="#calculator" className="hover:text-[#18A1BB] transition">CPA Goal & Bidding</a></li>
            </ul>
          </div>

          {/* Publishers */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">For Publishers</h4>
            <ul className="space-y-2.5">
              <li><a href="#publishers" className="hover:text-[#18A1BB] transition">Traffic Monetization</a></li>
              <li><a href="#publishers" className="hover:text-[#18A1BB] transition">100% Fill Rate Guarantee</a></li>
              <li><a href="#publishers" className="hover:text-[#18A1BB] transition">Anti-AdBlock Solution</a></li>
              <li><a href="#calculator" className="hover:text-[#18A1BB] transition">eCPM Revenue Estimator</a></li>
              <li><a href="#formats" className="hover:text-[#18A1BB] transition">Native Ad Widgets</a></li>
              <li><a href="#stats" className="hover:text-[#18A1BB] transition">Payment Terms & USDT</a></li>
            </ul>
          </div>

          {/* Technology & Programmatic */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Technology</h4>
            <ul className="space-y-2.5">
              <li><a href="#targeting" className="hover:text-[#18A1BB] transition">OpenRTB 2.5 Protocols</a></li>
              <li><a href="#formats" className="hover:text-[#18A1BB] transition">Smart XML Feeds</a></li>
              <li><a href="#stats" className="hover:text-[#18A1BB] transition">Anti-Fraud Shield</a></li>
              <li><a href="#about" className="hover:text-[#18A1BB] transition">API Documentation</a></li>
              <li><a href="#about" className="hover:text-[#18A1BB] transition">Direct Postbacks (S2S)</a></li>
              <li><a href="#faq" className="hover:text-[#18A1BB] transition">System Status</a></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company & Legal</h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="hover:text-[#18A1BB] transition">About TopSolutions</a></li>
              <li><a href="#contact" className="hover:text-[#18A1BB] transition">Contact & Support</a></li>
              <li><a href="#faq" className="hover:text-[#18A1BB] transition">FAQ Knowledge Base</a></li>
              <li><a href="#" className="hover:text-[#18A1BB] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#18A1BB] transition">Terms of Use</a></li>
              <li><a href="#" className="hover:text-[#18A1BB] transition">GDPR Compliance</a></li>
            </ul>
          </div>

        </div>

        {/* Payment Badges & Regulatory Line */}
        <div className="py-6 border-y border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mr-2">Supported Payouts:</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white font-mono text-[10px]">Tether USDT (TRC20)</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white font-mono text-[10px]">Bank Wire (USD/EUR)</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white font-mono text-[10px]">Paxum</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white font-mono text-[10px]">PayPal</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white font-mono text-[10px]">Capitalist</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400">IAB Tech Lab Member</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">GDPR & CCPA Compliant</span>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            Copyright © {new Date().getFullYear()} TopSolutions Media LTD. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#18A1BB] transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
