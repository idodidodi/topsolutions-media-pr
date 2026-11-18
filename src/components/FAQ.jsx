import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldAlert, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is TopSolutions Media LTD?',
      a: 'TopSolutions Media LTD is a global programmatic advertising network and technology provider operating since 2020. We bridge premier publishers and high-volume advertisers via self-serve DSP/SSP interfaces, direct OpenRTB 2.5 connections, and smart XML feeds across desktop and mobile devices.',
    },
    {
      q: 'What is the minimum deposit for advertisers to start testing campaigns?',
      a: 'Advertisers can start with a minimum initial deposit of just $100 via Credit Card, PayPal, Capitalist, or Cryptocurrency (USDT TRC20/ERC20). Wire transfers require a minimum of $500. All funds are credited instantly to your ad balance.',
    },
    {
      q: 'How frequently do publishers receive payouts and what are the payment methods?',
      a: 'Publishers can choose between Net-7 (weekly) or Net-15 payout frequencies with a low minimum payout threshold of only $50 for USDT and Paxum, and $500 for Wire Transfers. We also support PayPal and Capitalist with zero withdrawal processing fees.',
    },
    {
      q: 'How does your proprietary Anti-AdBlock solution function?',
      a: 'Our Anti-AdBlock script is an ultra-lightweight (<2KB) snippet that dynamically randomizes DNS hostnames, CSS classes, and payload delivery pathways. Adblockers (AdBlock, Adblock Plus, Brave Shields, uBlock) are unable to detect or filter the ad calls, instantly boosting your publisher revenues by up to 38%.',
    },
    {
      q: 'What pricing models are supported for advertisers?',
      a: 'We support CPM (Cost Per Mille), CPC (Cost Per Click), CPA Goal (Smart auto-bidding algorithm that hits your target CPA), CPL (Cost Per Lead), CPI (Cost Per Install for mobile apps), and direct Revenue Share XML feeds.',
    },
    {
      q: 'How do you prevent bot traffic and click fraud?',
      a: 'Every incoming impression passes through our proprietary multi-stage anti-fraud shield. We inspect user behavioral markers (mouse curves, touch-screen gestures, viewport focus), browser environment integrity, and cross-reference known bot IPs. Fraudulent impressions are discarded prior to bid execution.',
    },
    {
      q: 'Can I integrate external trackers like Voluum, Keitaro, or Binom?',
      a: 'Yes! TopSolutions Media is pre-integrated with all major tracking platforms. You can pass dynamic macros including {zone_id}, {country}, {carrier}, {os}, {browser}, {device}, and {click_id} directly into your tracking URLs and receive real-time S2S server-to-server postback data.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#F8FAFC] text-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18A1BB]/10 border border-[#18A1BB]/30 text-xs font-bold text-[#003E53] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#18A1BB]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003E53] tracking-tight mb-4">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about partnering with TopSolutions Media as an advertiser or publisher.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-base text-[#003E53]">{faq.q}</span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-[#003E53] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#18A1BB] text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200">
          <p className="text-sm font-semibold text-[#003E53] mb-2">Still have questions or need custom XML feed integration?</p>
          <a href="#contact" className="text-xs font-bold text-[#18A1BB] hover:underline">
            Contact our dedicated support team directly &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
