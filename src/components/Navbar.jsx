import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Globe, ArrowUpRight, 
  ShieldCheck, BarChart3, Users, DollarSign, Sparkles, LogIn
} from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Advertisers', href: '#advertisers' },
    { name: 'Publishers', href: '#publishers' },
    { name: 'Ad Formats', href: '#formats' },
    { name: 'Traffic Estimator', href: '#calculator' },
    { name: 'Targeting', href: '#targeting' },
    { name: 'Network Stats', href: '#stats' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#002633]/90 backdrop-blur-md shadow-lg shadow-[#002633]/30 border-b border-[#18A1BB]/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#18A1BB] to-[#0170B9] p-0.5 shadow-md shadow-[#18A1BB]/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#002633] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#18A1BB] to-[#6EC1E4] text-xl tracking-tighter">
                  TS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                TopSolutions <span className="text-[#18A1BB] font-medium text-sm px-1.5 py-0.5 rounded bg-[#18A1BB]/15 border border-[#18A1BB]/30">MEDIA</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                Programmatic Ad Network & XML
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-200 hover:text-[#18A1BB] hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2 xl:gap-3">
            <button
              onClick={() => onOpenAuth('login')}
              className="whitespace-nowrap flex items-center gap-1.5 text-xs xl:text-sm font-semibold text-slate-200 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition"
            >
              <LogIn className="w-4 h-4 text-[#18A1BB]" />
              Log In
            </button>
            <button
              onClick={() => onOpenAuth('register')}
              className="whitespace-nowrap relative group overflow-hidden rounded-lg p-[1px] font-semibold text-xs xl:text-sm shadow-md shadow-[#18A1BB]/25 active:scale-95 transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#18A1BB] via-[#0170B9] to-[#6EC1E4] group-hover:opacity-90 transition"></span>
              <span className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-[7px] bg-[#002633] text-white group-hover:bg-transparent group-hover:text-white transition duration-200">
                Join Network
                <ChevronRight className="w-4 h-4 text-[#18A1BB] group-hover:text-white group-hover:translate-x-0.5 transition" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenAuth('login')}
              className="whitespace-nowrap text-xs font-semibold text-white bg-[#003E53] px-3 py-1.5 rounded-lg border border-[#18A1BB]/30"
            >
              Log In
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-[#003E53]/60 rounded-lg border border-[#18A1BB]/30"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#002633] border-b border-[#18A1BB]/20 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-200 hover:text-[#18A1BB] hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('register'); }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#18A1BB] to-[#0170B9] text-white font-semibold text-sm shadow-md"
            >
              Create Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
