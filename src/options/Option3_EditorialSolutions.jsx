import React from 'react';
import { 
  BookOpen, Globe, Award, ShieldCheck, Newspaper, 
  Layers, Users, Sparkles, CheckCircle2, Mail, ExternalLink, ArrowRight 
} from 'lucide-react';

export default function Option3_EditorialSolutions() {
  return (
    <div className="min-h-screen bg-[#FDFEFE] text-slate-800 font-sans selection:bg-[#18A1BB] selection:text-white">
      
      {/* Editorial Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top metadata strip */}
          <div className="py-2.5 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center gap-4">
              <span>EST. 2020</span>
              <span>•</span>
              <span>GLOBAL PROGRAMMATIC PR & MEDIA AGENCY</span>
            </div>
            <div className="flex items-center gap-2 text-[#003E53] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18A1BB]"></span>
              <span>240+ Geographies Reached Worldwide</span>
            </div>
          </div>

          {/* Main Logo & Navigation */}
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#003E53]">
                TopSolutions <span className="text-[#18A1BB] font-serif italic">Media LTD</span>
              </span>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-0.5">
                Display and Mobile Ad Agency / XML
              </p>
            </div>

            <nav className="flex items-center gap-6 sm:gap-8 text-xs font-bold uppercase tracking-wider text-slate-700">
              <a href="#editorial" className="hover:text-[#18A1BB] transition">Editorial Solutions</a>
              <a href="#syndication" className="hover:text-[#18A1BB] transition">Media Syndication</a>
              <a href="#standards" className="hover:text-[#18A1BB] transition">Brand Standards</a>
              <a href="#coverage" className="hover:text-[#18A1BB] transition">Global Coverage</a>
              <a href="#desk" className="hover:text-[#18A1BB] transition">Media Desk</a>
            </nav>
          </div>

        </div>
      </header>

      {/* Hero Editorial Showcase */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F4F9FA] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-block border-y border-[#003E53]/20 py-1 px-4 text-xs uppercase font-extrabold tracking-widest text-[#003E53] mb-6">
            Strategic Press Relations & Global Publisher Syndication
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#003E53] tracking-tight leading-[1.15] mb-8">
            Curated Digital Media Visibility & Authoritative Audience Reach
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto mb-12">
            TopSolutions Media bridges enterprise organizations and digital publishers through high-quality editorial syndication, direct XML feeds, and transparent programmatic distribution.
          </p>

          {/* Key Facts Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-t border-b border-slate-200 py-6">
            <div>
              <div className="text-3xl font-extrabold text-[#003E53]">4.8B</div>
              <div className="text-[11px] font-bold text-[#18A1BB] uppercase tracking-wider mt-1">Daily Impressions</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#003E53]">240+</div>
              <div className="text-[11px] font-bold text-[#18A1BB] uppercase tracking-wider mt-1">Global Markets</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#003E53]">100%</div>
              <div className="text-[11px] font-bold text-[#18A1BB] uppercase tracking-wider mt-1">Guaranteed Fill</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#003E53]">99.8%</div>
              <div className="text-[11px] font-bold text-[#18A1BB] uppercase tracking-wider mt-1">Human Verified</div>
            </div>
          </div>

        </div>
      </section>

      {/* Editorial Solutions Grid */}
      <section id="editorial" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-bold text-[#18A1BB] tracking-widest">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003E53] tracking-tight mt-2 mb-4">
              Comprehensive Media Solutions for Modern Brands
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Crafting premium visibility with direct demand, programmatic transparency, and surgical distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200">
              <Newspaper className="w-10 h-10 text-[#003E53] mb-6" />
              <h3 className="text-xl font-bold text-[#003E53] mb-3">Institutional Press Syndication</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Position corporate press releases and high-value brand announcements across curated publishing hubs and media networks.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 font-medium">
                <li>• Direct editorial integration</li>
                <li>• Global distribution networks</li>
                <li>• High-authority contextual indexing</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200">
              <Layers className="w-10 h-10 text-[#18A1BB] mb-6" />
              <h3 className="text-xl font-bold text-[#003E53] mb-3">Native & High-Impact Formats</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Engage audiences with non-intrusive native widgets, push notification alerts, popunder zero-click navigation, and responsive display units.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 font-medium">
                <li>• Organic editorial flow</li>
                <li>• Full iOS & Android mobile support</li>
                <li>• Maximum viewability guarantee</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200">
              <Globe className="w-10 h-10 text-[#0170B9] mb-6" />
              <h3 className="text-xl font-bold text-[#003E53] mb-3">Programmatic XML & RTB 2.5</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Connect directly through real-time bidding protocols and XML smart feeds engineered for high-throughput media exchange and arbitrage.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 font-medium">
                <li>• Sub-12ms auction response</li>
                <li>• Granular placement telemetry</li>
                <li>• Direct publisher revenue share</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Standards & Trust */}
      <section id="standards" className="py-24 bg-[#003E53] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#18A1BB]">
                Our Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Transparent. Direct. Delivering Measurable Results.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                TopSolutions Media LTD was established on the conviction that high-grade service and authentic trust are the ultimate keys to enduring commercial success.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                We work closely with premium partners, top-tier demand agencies, and web publishers worldwide to ensure the best possible rates in the industry while strictly protecting brand safety and compliance.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="font-bold text-[#18A1BB] text-sm mb-1">Anti-AdBlock Tech</div>
                  <div className="text-slate-300">Recovers up to 38% lost publisher inventory safely.</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="font-bold text-[#61CE70] text-sm mb-1">Clean Traffic Shield</div>
                  <div className="text-slate-300">Continuous AI screening against invalid bot traffic.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#002633] p-8 sm:p-10 rounded-3xl border border-[#18A1BB]/30">
              <h3 className="text-xl font-bold text-white mb-6">Direct Media Desk & Corporate Contact</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400">Official Correspondence</div>
                  <div className="text-base font-semibold text-white mt-0.5">contact@topsolutionsmedia.com</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400">Telegram Media Desk</div>
                  <div className="text-base font-semibold text-white mt-0.5">@TopSolutionsMedia</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400">Skype Communications</div>
                  <div className="text-base font-semibold text-white mt-0.5">live:.cid.topsolutions_media</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
                Operating entity: TopSolutions Media LTD • Display & Mobile Ad Agency / XML
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="bg-white text-slate-500 text-xs py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#003E53]">TopSolutions Media LTD</span>
            <span>—</span>
            <span>Display and Mobile Ad Agency / XML</span>
          </div>
          <div>
            Copyright © {new Date().getFullYear()} TopSolutions Media LTD. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
