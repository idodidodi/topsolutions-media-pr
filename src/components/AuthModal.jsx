import React, { useState } from 'react';
import { X, CheckCircle2, TrendingUp, Zap, Lock, Mail, User, Globe, ArrowRight } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialRole = 'register' }) {
  const [mode, setMode] = useState(initialRole === 'login' ? 'login' : 'register');
  const [accountType, setAccountType] = useState(
    initialRole === 'publisher' ? 'publisher' : 'advertiser'
  );
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#002633] border border-[#18A1BB]/40 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-[#18A1BB] via-[#6EC1E4] to-[#61CE70]"></div>

        {success ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">
              {mode === 'login' ? 'Welcome Back!' : 'Account Initialized!'}
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              {mode === 'login'
                ? 'Redirecting to your TopSolutions Media dashboard...'
                : 'Your dedicated account manager will verify your submission and reach out within 15 minutes.'}
            </p>
            <button
              onClick={() => { setSuccess(false); onClose(); }}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#18A1BB] text-white hover:bg-[#13899f] transition"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#18A1BB] to-[#0170B9] flex items-center justify-center font-bold text-sm">
                  TS
                </div>
                <span className="font-extrabold text-lg tracking-tight">TopSolutions Media</span>
              </div>
              <h3 className="text-xl font-bold">
                {mode === 'login' ? 'Log In to DSP / SSP Portal' : 'Create Your Free Account'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {mode === 'login' 
                  ? 'Access your real-time analytics, campaigns, and earnings.'
                  : 'Join 35,000+ publishers and advertisers scaling globally.'}
              </p>
            </div>

            {/* Account Type Selector for Registration */}
            {mode === 'register' && (
              <div className="grid grid-cols-2 gap-2 mb-6 p-1 rounded-xl bg-[#001822] border border-white/10">
                <button
                  type="button"
                  onClick={() => setAccountType('advertiser')}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition ${
                    accountType === 'advertiser'
                      ? 'bg-gradient-to-r from-[#18A1BB] to-[#0170B9] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  Advertiser (Buy Traffic)
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('publisher')}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition ${
                    accountType === 'publisher'
                      ? 'bg-gradient-to-r from-[#10B981] to-[#18A1BB] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-emerald-300" />
                  Publisher (Monetize)
                </button>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#001822] border border-white/10 focus:border-[#18A1BB] text-sm text-white placeholder-slate-500 outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Corporate Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#001822] border border-white/10 focus:border-[#18A1BB] text-sm text-white placeholder-slate-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#001822] border border-white/10 focus:border-[#18A1BB] text-sm text-white placeholder-slate-500 outline-none"
                  />
                </div>
              </div>

              {mode === 'register' && accountType === 'publisher' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Website or Traffic Source</label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="https://mysite.com or 500k monthly views"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#001822] border border-white/10 focus:border-[#18A1BB] text-sm text-white placeholder-slate-500 outline-none"
                    />
                  </div>
                </div>
              )}

              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Telegram / Skype Contact</label>
                  <input
                    type="text"
                    placeholder="@telegram_handle or skype_id"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#001822] border border-white/10 focus:border-[#18A1BB] text-sm text-white placeholder-slate-500 outline-none"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#18A1BB] to-[#0170B9] text-white hover:brightness-110 shadow-lg shadow-[#18A1BB]/25 flex items-center justify-center gap-2 transition"
              >
                <span>{mode === 'login' ? 'Log In to Account' : 'Create Free Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Toggle Mode */}
            <div className="mt-5 text-center text-xs text-slate-400">
              {mode === 'login' ? (
                <>
                  Don't have an account yet?{' '}
                  <button
                    onClick={() => setMode('register')}
                    className="font-bold text-[#18A1BB] hover:underline"
                  >
                    Register here
                  </button>
                </>
              ) : (
                <>
                  Already registered?{' '}
                  <button
                    onClick={() => setMode('login')}
                    className="font-bold text-[#18A1BB] hover:underline"
                  >
                    Log In
                  </button>
                </>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
