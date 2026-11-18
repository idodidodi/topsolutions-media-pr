import React from 'react';
import { 
  CreditCard, RefreshCw, Cpu, Layers, 
  CheckCircle2, ArrowRight, Wallet, Shield 
} from 'lucide-react';

export default function Integrations() {
  const trackers = [
    { name: 'Voluum', type: 'Server-to-Server / Postback', badge: 'Verified Partner' },
    { name: 'Keitaro', type: 'Direct Click & API Macro', badge: 'Certified' },
    { name: 'Binom', type: 'Ultra-Fast Tracker Sync', badge: 'Pre-configured' },
    { name: 'RedTrack', type: 'Multi-Touch Attribution', badge: '1-Click Setup' },
    { name: 'AppsFlyer', type: 'Mobile Attribution SDK', badge: 'MMP' },
    { name: 'Adjust', type: 'Mobile Measurement Partner', badge: 'MMP' },
  ];

  const paymentMethods = [
    { name: 'Tether USDT', sub: 'TRC-20 & ERC-20', icon: '₮', color: 'text-emerald-400 bg-emerald-500/10' },
    { name: 'Wire Transfer', sub: 'USD & EUR SWIFT/SEPA', icon: '🏛', color: 'text-blue-400 bg-blue-500/10' },
    { name: 'Paxum', sub: 'Instant P2P Transfer', icon: 'P', color: 'text-purple-400 bg-purple-500/10' },
    { name: 'PayPal', sub: 'Global Verified Gateway', icon: 'PP', color: 'text-[#18A1BB] bg-[#18A1BB]/10' },
    { name: 'Capitalist', sub: 'Multi-currency E-Wallet', icon: 'C', color: 'text-amber-400 bg-amber-500/10' },
    { name: 'Credit Cards', sub: 'Visa & Mastercard Instant', icon: '💳', color: 'text-rose-400 bg-rose-500/10' },
  ];

  return (
    <section className="py-24 bg-[#001D27] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trackers & Ecosystem */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18A1BB]/15 border border-[#18A1BB]/30 text-xs font-bold text-[#18A1BB] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Turnkey Tracking & Programmatic Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Seamlessly Integrated With Your Tech Stack
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            No complex coding required. TopSolutions Media integrates natively with all industry-standard trackers, OpenRTB DSPs, and MMPs.
          </p>
        </div>

        {/* Tracker Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {trackers.map((t, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-[#002633] border border-[#18A1BB]/20 hover:border-[#18A1BB] transition text-center flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-[#6EC1E4] px-2 py-0.5 rounded bg-white/5 border border-white/10 inline-block mb-3">
                  {t.badge}
                </span>
                <div className="text-lg font-extrabold text-white mb-1">{t.name}</div>
              </div>
              <div className="text-[11px] text-slate-400 mt-2">{t.type}</div>
            </div>
          ))}
        </div>

        {/* Payment Methods Section */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-extrabold text-white mb-3 flex items-center justify-center gap-2">
              <Wallet className="w-6 h-6 text-[#18A1BB]" />
              Frictionless Payment Methods & Reliable Payouts
            </h3>
            <p className="text-slate-300 text-sm">
              Instant campaign balance top-ups for advertisers and automated weekly payouts for verified publishers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {paymentMethods.map((pm, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#002633]/60 border border-white/10 hover:border-[#18A1BB]/40 transition text-center flex flex-col items-center"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mb-3 ${pm.color}`}>
                  {pm.icon}
                </div>
                <div className="text-sm font-bold text-white mb-0.5">{pm.name}</div>
                <div className="text-[11px] text-slate-400">{pm.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#61CE70]" />
              <span>Low Minimum Payout: $50 (Paxum/USDT)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#61CE70]" />
              <span>Zero Hidden Withdrawal Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#61CE70]" />
              <span>Automated Billing & VAT Invoicing</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
