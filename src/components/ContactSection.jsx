import React, { useState } from 'react';
import { 
  Mail, MessageSquare, Send, CheckCircle2, 
  MapPin, Clock, Phone, Sparkles, ArrowRight 
} from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'advertiser',
    messenger: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#001D27] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#18A1BB]/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Anchor for About */}
        <div id="about" className="-mt-16 pt-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: About Us & Direct Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18A1BB]/15 border border-[#18A1BB]/30 text-xs font-bold text-[#18A1BB] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About TopSolutions Media</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Built on Transparency, Trust & Measured Results
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                TopSolutions Media is a global programmatic Ad Network and digital Ad Agency with wide-ranging solutions for advertisers and publishers worldwide.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                We believe in being transparent, direct, and delivering tangible results. The long-term partnerships we sustain with premium demand partners and publishers are the foundation of our success. When you work with us, we build our roadmap around your ROI.
              </p>
            </div>

            {/* Direct Instant Messengers & Support */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#6EC1E4]">
                Direct Priority Channels
              </h3>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#002633] border border-[#18A1BB]/20 hover:border-[#18A1BB] transition">
                <div className="w-10 h-10 rounded-xl bg-[#0088cc]/20 text-[#0088cc] flex items-center justify-center font-bold text-lg">
                  ✈
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Telegram VIP Desk</div>
                  <div className="text-sm font-bold text-white">@TopSolutionsMedia</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#002633] border border-[#18A1BB]/20 hover:border-[#18A1BB] transition">
                <div className="w-10 h-10 rounded-xl bg-[#00aff0]/20 text-[#00aff0] flex items-center justify-center font-bold text-lg">
                  S
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Skype Support</div>
                  <div className="text-sm font-bold text-white">live:.cid.topsolutions_media</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#002633] border border-[#18A1BB]/20 hover:border-[#18A1BB] transition">
                <div className="w-10 h-10 rounded-xl bg-[#18A1BB]/20 text-[#18A1BB] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Official Inquiry Email</div>
                  <div className="text-sm font-bold text-white">contact@topsolutionsmedia.com</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Response time: Under 15 minutes during market trading hours (24/7 coverage)</span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#002633] border border-[#18A1BB]/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-white mb-2">Talk To Our Team</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Ready to scale your programmatic ad campaigns or monetize your website traffic? Let us know your requirements.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Received!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for contacting TopSolutions Media LTD. A dedicated account strategist has been assigned to your request and will follow up shortly via your provided email or messenger.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#18A1BB] text-white hover:bg-[#13899f] transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Persona Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      I Am Inquiring As:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'advertiser', label: 'Advertiser / DSP' },
                        { id: 'publisher', label: 'Publisher / SSP' },
                        { id: 'agency', label: 'Agency / XML Feed' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, role: item.id })}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border transition ${
                            formData.role === item.id
                              ? 'bg-[#18A1BB] text-white border-[#18A1BB]'
                              : 'bg-[#001D27] text-slate-300 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#001822] border border-white/10 focus:border-[#18A1BB] focus:ring-1 focus:ring-[#18A1BB] text-sm text-white placeholder-slate-500 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#001822] border border-white/10 focus:border-[#18A1BB] focus:ring-1 focus:ring-[#18A1BB] text-sm text-white placeholder-slate-500 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Telegram / Skype ID (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.messenger}
                        onChange={(e) => setFormData({ ...formData, messenger: e.target.value })}
                        placeholder="@username or live:skype"
                        className="w-full px-4 py-3 rounded-xl bg-[#001822] border border-white/10 focus:border-[#18A1BB] focus:ring-1 focus:ring-[#18A1BB] text-sm text-white placeholder-slate-500 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Buying Popunder / Push traffic"
                        className="w-full px-4 py-3 rounded-xl bg-[#001822] border border-white/10 focus:border-[#18A1BB] focus:ring-1 focus:ring-[#18A1BB] text-sm text-white placeholder-slate-500 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Message / Traffic Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your target geos, monthly budget or website traffic volume, formats of interest, etc."
                      className="w-full px-4 py-3 rounded-xl bg-[#001822] border border-white/10 focus:border-[#18A1BB] focus:ring-1 focus:ring-[#18A1BB] text-sm text-white placeholder-slate-500 outline-none transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#18A1BB] via-[#0170B9] to-[#6EC1E4] text-white hover:brightness-110 shadow-lg shadow-[#18A1BB]/30 flex items-center justify-center gap-2 group transition"
                  >
                    <span>Send Message to TopSolutions Media</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    🔒 We respect your privacy. All details are kept strictly confidential under our non-disclosure policy.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
