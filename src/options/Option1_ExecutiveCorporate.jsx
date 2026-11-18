import React, { useState } from 'react';
import { 
  Globe2, ShieldCheck, BarChart3, Newspaper, Layers, 
  Award, CheckCircle2, ChevronRight, Mail, Sparkles, 
  Compass, Users, Eye, Target, ArrowUpRight
} from 'lucide-react';

export default function Option1_ExecutiveCorporate() {
  const [activeTab, setActiveTab] = useState('distribution');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#18A1BB] selection:text-white">
      
      {/* Top Corporate Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#003E53] to-[#18A1BB] flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
              TS
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#003E53]">
                TopSolutions <span className="text-[#18A1BB] font-semibold text-sm">MEDIA</span>
              </span>
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                Digital PR & Global Media Network
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-[#003E53] transition">About Agency</a>
            <a href="#solutions" className="hover:text-[#003E53] transition">PR Solutions</a>
            <a href="#network" className="hover:text-[#003E53] transition">Publisher Network</a>
            <a href="#targeting" className="hover:text-[#003E53] transition">Audience Intelligence</a>
            <a href="#verification" className="hover:text-[#003E53] transition">Brand Safety</a>
            <a href="#contact" className="hover:text-[#003E53] transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3 text-xs font-semibold text-[#003E53] bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Global Media Desk: Online</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-b from-white via-[#F1F8FA] to-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18A1BB]/10 border border-[#18A1BB]/30 text-xs font-bold text-[#003E53] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#18A1BB]" />
              <span>Institutional PR & High-Authority Media Syndication</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#003E53] tracking-tight leading-[1.15] mb-6">
              Strategic Digital PR & Premium Global{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003E53] via-[#18A1BB] to-[#0170B9]">
                Media Distribution
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10">
              TopSolutions Media LTD connects industry-leading enterprises, agencies, and high-growth brands to verified global audiences. We combine authoritative publication placements with high-yield programmatic distribution across 240+ countries.
            </p>

            {/* Strategic Pillars Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl font-extrabold text-[#003E53] mb-1">4.8B+</div>
                <div className="text-xs font-bold text-[#18A1BB] uppercase tracking-wider mb-1">Daily Media Reach</div>
                <p className="text-xs text-slate-500">Verified monthly global impressions across vetted desktop and mobile editorial networks.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl font-extrabold text-[#003E53] mb-1">240+</div>
                <div className="text-xs font-bold text-[#18A1BB] uppercase tracking-wider mb-1">Geographies Covered</div>
                <p className="text-xs text-slate-500">Hyper-targeted regional coverage across Tier 1 North America, Europe, Asia-Pacific and LatAm.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl font-extrabold text-[#003E53] mb-1">100%</div>
                <div className="text-xs font-bold text-[#18A1BB] uppercase tracking-wider mb-1">Brand Safety Guarantee</div>
                <p className="text-xs text-slate-500">Multi-layer anti-fraud screening ensuring your brand appears alongside clean, compliant content.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solutions & Core Offerings */}
      <section id="solutions" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#18A1BB]">Comprehensive Agency Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003E53] tracking-tight mt-2 mb-4">
              Integrated Media & Public Relations Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From corporate announcements to high-impact content syndication, our agency structures end-to-end media visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Authority Press Syndication',
                desc: 'Broadcast official corporate announcements, product launches, and brand milestones across premier news outlets and financial terminals.',
                icon: Newspaper,
                badge: 'Authority Media',
              },
              {
                title: 'Native Content & Editorial Integration',
                desc: 'Place contextually aligned long-form sponsored articles and executive thought-leadership pieces within top-tier digital magazines.',
                icon: Layers,
                badge: 'High Engagement',
              },
              {
                title: 'High-Impact Display & Media Showcases',
                desc: 'Deliver viewable, responsive IAB banner and rich-media interactive placements placed exclusively in premium above-the-fold positions.',
                icon: Eye,
                badge: 'Visual Brand Impact',
              },
              {
                title: 'Precision Audience Segmentation',
                desc: 'Target key decision-makers by country, metropolitan region, carrier, device OS, and corporate IP networks with zero ad waste.',
                icon: Target,
                badge: 'Hyper-Targeted',
              },
              {
                title: 'Global Publisher Monetization',
                desc: 'Equip premier website publishers with clean, compliant programmatic demand, guaranteeing 100% fill rates and anti-adblock recovery.',
                icon: BarChart3,
                badge: 'Maximum Yield',
              },
              {
                title: 'Real-Time Telemetry & Reporting',
                desc: 'Access verified analytics tracking impression viewability, geographic dispersion, audience dwell times, and engagement metrics.',
                icon: ShieldCheck,
                badge: 'Audit Verified',
              },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#18A1BB]/60 hover:shadow-lg transition">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#18A1BB] shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#003E53]/5 text-[#003E53]">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#003E53] mb-3">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publisher Network & Distribution Reach */}
      <section id="network" className="py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#18A1BB]">Global Reach & Scale</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003E53] tracking-tight">
                An Established Ecosystem of Direct Publishers & Demand Partners
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                TopSolutions Media works directly with thousands of select publishers and top quality demand agencies. We believe that transparent communication and long-term partnerships are the keys to sustainable success.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  'Direct integrations with vetted tier-1 media portals and publishing networks',
                  'Proprietary Anti-AdBlock script safely recovering up to 38% lost impressions',
                  'Comprehensive OpenRTB 2.5 and XML feed connectivity with <12ms latency',
                  'Strict compliance with Google Webmaster policies and brand safety guidelines',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
                <h3 className="text-lg font-bold text-[#003E53] mb-6 flex items-center justify-between">
                  <span>Audience Volume by Geographic Tier</span>
                  <span className="text-xs font-semibold text-slate-400">Monthly Run Rate</span>
                </h3>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                      <span>Tier 1 (United States, UK, Canada, Australia, Germany)</span>
                      <span className="text-[#003E53]">2.1B Impressions</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-gradient-to-r from-[#003E53] to-[#18A1BB] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                      <span>Tier 2 (France, Italy, Spain, Brazil, Japan)</span>
                      <span className="text-[#003E53]">1.5B Impressions</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[65%] h-full bg-gradient-to-r from-[#18A1BB] to-[#6EC1E4] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                      <span>Tier 3 & Global Emerging Markets (LATAM, SEA, MENA)</span>
                      <span className="text-[#003E53]">1.2B Impressions</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[50%] h-full bg-gradient-to-r from-[#6EC1E4] to-[#0170B9] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 rounded-xl bg-slate-50">
                    <div className="text-lg font-extrabold text-[#003E53]">99.8%</div>
                    <div className="text-[11px] text-slate-500 font-medium">Clean Human Traffic</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50">
                    <div className="text-lg font-extrabold text-[#18A1BB]">100%</div>
                    <div className="text-[11px] text-slate-500 font-medium">Guaranteed Fill Rate</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Safety & Verification */}
      <section id="verification" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#18A1BB]">Enterprise Standards</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003E53] tracking-tight mt-2 mb-4">
              Institutional-Grade Quality & Verification
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Our proprietary audit infrastructure safeguards brand equity, ensuring every impression and publication is delivered in a pristine, compliant environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-[#18A1BB] mb-4" />
              <h3 className="text-lg font-bold text-[#003E53] mb-2">Automated Heuristic Bot Screening</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-layer inspection monitors user interactions, cursor physics, and device sensor data, rejecting fraudulent non-human traffic prior to delivery.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <Award className="w-8 h-8 text-[#0170B9] mb-4" />
              <h3 className="text-lg font-bold text-[#003E53] mb-2">24/7 Human Editorial Review</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Experienced media specialists manually vet creative content, ensuring 100% alignment with industry guidelines, copyright, and regional regulatory laws.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <Globe2 className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-[#003E53] mb-2">Full Regulatory Compliance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating strictly in compliance with GDPR, CCPA, IAB standards, and global privacy mandates to ensure seamless corporate governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate About & Contact Section */}
      <section id="contact" className="py-24 bg-[#003E53] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#18A1BB] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                About TopSolutions Media LTD
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Partner With an Established Global Media Network
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                TopSolutions Media LTD is a global programmatic Ad Network and digital Ad Agency with wide-ranging solutions for publishers, media buyers, and brand partners. We believe in being transparent, direct, and delivering measurable results.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                When you choose to work with us, our seasoned team builds your distribution strategy around your objectives, backed by direct communication and long-term trust.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#002633] rounded-3xl p-8 border border-[#18A1BB]/30 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Direct Media Desk</h3>
              <p className="text-xs text-slate-400 mb-6">
                Inquire about custom publisher feeds, institutional PR distribution, or agency partnerships.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#18A1BB]/20 text-[#18A1BB] flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Official Agency Email</div>
                    <div className="text-sm font-semibold text-white">contact@topsolutionsmedia.com</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0088cc]/20 text-[#0088cc] flex items-center justify-center font-bold">
                    ✈
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Telegram Media Desk</div>
                    <div className="text-sm font-semibold text-white">@TopSolutionsMedia</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00aff0]/20 text-[#00aff0] flex items-center justify-center font-bold">
                    S
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Skype Media Support</div>
                    <div className="text-sm font-semibold text-white">live:.cid.topsolutions_media</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400">
                Official entity: TopSolutions Media LTD • Display & Mobile Ad Agency / XML
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Footer */}
      <footer className="bg-[#001D27] text-slate-400 text-xs py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">TopSolutions Media LTD</span>
            <span>•</span>
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
